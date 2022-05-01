import {call, put, take, takeLatest} from '@redux-saga/core/effects';
import Helper from '@utils/helpers';
import {END, eventChannel} from 'redux-saga';
import api from '@utils/api';
import {loadBannerSuccess, loadHomeData} from './slice';

function callApi(endPoint: string, params: object, emit: any, type: string) {
  return new Promise(resolve => {
    api(`/${endPoint}`, params, {method: 'GET'})
      .then(({data}) => {
        emit({[type]: data});
        resolve({[type]: data});
      })
      .catch(() => {
        emit({[type]: []});
      });
  });
}

function getHomeData() {
  const homeChannel = eventChannel(emit => {
    let promiseList: any = [
      callApi('banners', {type: 'HOME', limit: 5}, emit, 'banner'),
    ];
    Promise.all(promiseList)
      .then(() => {
        emit(END);
      })
      .catch(e => {
        emit({error: e});
        emit(END);
      });
    return () => {};
  });
  return {channel: homeChannel};
}

function* handleHomeRequest() {
  const {channel} = yield call(getHomeData);
  while (true) {
    const {banner} = yield take(channel);
    if (banner) {
      yield put(loadBannerSuccess(banner));
    }
  }
}

export default [
  takeLatest(
    loadHomeData,
    Helper.safe(handleHomeRequest, {
      hideAlert: true,
    }),
  ),
];
