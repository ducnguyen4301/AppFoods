import {Draft} from 'immer';
import {Action, AnyAction, Reducer} from 'redux';

type CaseReducer<S = any, A extends Action = AnyAction> = (
  state: Draft<S>,
  action: A,
) => S | void | Draft<S>;

export type SliceCaseReducers<State> = {
  [K: string]: CaseReducer<State, PayloadAction<any>>;
};

interface ActionCreatorWithoutPayload<T extends string = string> {
  type: string;
  (): PayloadAction<undefined, T>;
}

interface PayloadActionCreator<P, T extends string = string> {
  type: string;
  (payload: P): PayloadAction<P, T>;
}

type ActionCreatorForCaseReducer<CR> = CR extends (
  state: any,
  action: infer Action,
) => any
  ? Action extends {payload: infer P}
    ? PayloadActionCreator<P>
    : ActionCreatorWithoutPayload
  : ActionCreatorWithoutPayload;

type CaseReducerActions<CaseReducers extends SliceCaseReducers<any>> = {
  [Type in keyof CaseReducers]: ActionCreatorForCaseReducer<CaseReducers[Type]>;
};

export interface CreateSliceOptions<
  State,
  CR extends SliceCaseReducers<State> = SliceCaseReducers<State>,
> {
  name: string;
  initialState?: State;
  reducers?: CR;
  extraReducers?: {
    [key: string]: (state: Draft<State>, payload: any) => void;
  };
}

export interface Slide<
  State,
  CR extends SliceCaseReducers<State> = SliceCaseReducers<State>,
> {
  name: string;
  reducer: Reducer<State>;
  actions: CaseReducerActions<CR>;
  getState(state: any): State;
}

export type PayloadAction<P = void, T extends string = string, M = never> = {
  payload: P;
  type: T;
} & ([M] extends [never] ? {} : {meta: M});
