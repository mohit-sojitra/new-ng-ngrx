import { Action, createReducer, on } from '@ngrx/store';
import { addDataAction, savePostsAction, saveUsersAction } from './demo.action';
import { IPost } from './model/post.mode';
import { IUser } from './model/user.model';

export interface state {
  data: string[];
  user: IUser[];
  post: IPost[];
}

const initialState: state = { data: ['a', 'b'], user: [] , post:[]};

const reducer = createReducer(
  initialState,
  on(addDataAction, (state: state, action: any) => {
    return { ...state, data: [...state.data, action.payload] };
  }),
  on(saveUsersAction, (state: state, action: any) => {
    return { ...state, user: action.payload };
  }),
  on(savePostsAction, (state: state, action: any) => {
    return { ...state, post: action.payload };
  })
);

export function demoReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
