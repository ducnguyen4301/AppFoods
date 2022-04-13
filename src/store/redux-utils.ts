import {produce} from 'immer';
import {CreateSliceOptions, SliceCaseReducers, Slide} from './type';

const getType = (sliceName: string, actionKey: string): string =>
  `@${sliceName}/${actionKey}`;

export const createAction = (type: string) => {
  function actionCreator(...args: any[]) {
    return {type, payload: args[0]};
  }
  actionCreator.toString = () => type;
  actionCreator.type = type;
  return actionCreator;
};

export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
>(
  options: CreateSliceOptions<State, CaseReducers>,
): Slide<State, CaseReducers> => {
  if (!options.name) {
    throw new Error("'name' is a required option for createSlice");
  }

  const reducers: any = options.reducers || {};
  const extraReducers: any = options.extraReducers || {};
  const reducerNames = Object.keys(reducers);

  const actions: any = {};
  const reducerByType: any = {...extraReducers};
  reducerNames.forEach(key => {
    const type = getType(options.name, key);
    actions[key] = createAction(type);
    reducerByType[type] = reducers[key];
  });

  const buildReducer = (state = options.initialState as State, action: any) => {
    const reducer = reducerByType[action.type];
    if (typeof reducer === 'function') {
      return produce(state, draft => reducer(draft, action));
    }
    return state;
  };

  const getState = (state: any) => state[options.name];

  return {
    name: options.name,
    actions,
    reducer: buildReducer,
    getState,
  };
};
