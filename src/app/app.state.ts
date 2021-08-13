import { demoReducer } from './demo.reducer';
import { IPost } from './model/post.model';
import { IUser } from './model/user.model';

export interface AppState {
  demoState: IState;
}

export const appReducer = {
  demoState: demoReducer,
};

export interface IState {
  user: IUser[];
  post: IPost[];
}
