import { Action, createAction, props } from '@ngrx/store';
import { IPost } from './model/post.mode';
import { IUser } from './model/user.model';

export const add_data = 'ADD_DATA';
export const API_ERROR_ACTION = 'API_ERROR_ACTION';
export const GET_USER = 'GET_USER';
export const GET_POSTS = 'GET_POSTS';
export const SAVE_USERS = 'SAVE_USERS';
export const SAVE_POSTS = 'SAVE_POSTS';

//ACTIONS
export const addDataAction = createAction(
  add_data,
  props<{ payload: string }>()
);
export const saveUsersAction = createAction(
  SAVE_USERS,
  props<{ payload: IUser[] }>()
);
export const savePostsAction = createAction(
  GET_POSTS,
  props<{ payload: IPost[] }>()
);
export const ApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());

//Effects
export const getUserAction = createAction(GET_USER);
export const getPostAction = createAction(GET_POSTS);
