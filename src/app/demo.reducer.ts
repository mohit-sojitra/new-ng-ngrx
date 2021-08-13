import { Action, createReducer, on } from '@ngrx/store';
import { IState } from './app.state';
import { savePostsAction, saveUsersAction } from './demo.action';

const initialState: IState = { user: [], post: [] };

const reducer = createReducer(
  initialState,
  on(saveUsersAction, (state: IState, action: any) => {
    return { ...state, user: action.payload };
  }),
  on(savePostsAction, (state: IState, action: any) => {
    return { ...state, post: action.payload };
  })
);

export function demoReducer(state = initialState, action: Action): IState {
  return reducer(state, action);
}
