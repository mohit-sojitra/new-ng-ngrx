import { createAction, props } from '@ngrx/store';
import { IPost } from './model/post.model';
import { IUser } from './model/user.model';

export const API_ERROR_ACTION = 'API_ERROR_ACTION';
export const GET_USER = 'GET_USER';
export const GET_POSTS = 'GET_POSTS';
export const SAVE_USERS = 'SAVE_USERS';
export const SAVE_POSTS = 'SAVE_POSTS';
export const DUMMY_ACTION = 'DUMMY_ACTION';

// ACTIONS
export const saveUsersAction = createAction(
  SAVE_USERS,
  props<{ payload: IUser[] }>()
);
export const savePostsAction = createAction(
  SAVE_POSTS,
  props<{ payload: IPost[] }>()
);
export const DummyAction = createAction(DUMMY_ACTION);
export const ApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());

// Effects
export const getUserAction = createAction(GET_USER);
export const getPostAction = createAction(GET_POSTS);
