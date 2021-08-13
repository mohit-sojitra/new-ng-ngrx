import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DemoService } from './demo.service';
import { map, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  ApiError,
  DummyAction,
  getPostAction,
  getUserAction,
  savePostsAction,
  saveUsersAction,
} from './demo.action';
import { IUser } from './model/user.model';
import { IPost } from './model/post.model';
import { AppState } from './app.state';

@Injectable()
export class DemoEffects {
  constructor(
    private actions$: Actions,
    private demoService: DemoService,
    private store: Store<AppState>
  ) {}

  user = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      withLatestFrom(this.store.select('demoState')),
      exhaustMap((data) => {
        if (!data[1].user.length) {
          return this.demoService.getUser().pipe(
            map((user: IUser[]) => {
              return saveUsersAction({ payload: user });
            }),
            catchError((error) => {
              console.log(error);
              return of(ApiError({ error }));
            })
          );
        } else {
          return of(DummyAction());
        }
      })
    )
  );

  post = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostAction),
      withLatestFrom(this.store.select('demoState')),
      exhaustMap((data) => {
        if (!data[1].post.length) {
        return this.demoService.getPosts().pipe(
            map((post: IPost[]) => {
              return savePostsAction({ payload: post });
            }),
            catchError((error) => {
              console.log(error);
              return of(ApiError({ error }));
            })
          );
        } else {
          return of(DummyAction());
        }
      })
    )
  );
}
