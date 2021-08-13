import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DemoService } from './demo.service';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  ApiError,
  getPostAction,
  getUserAction,
  savePostsAction,
  saveUsersAction,
} from './demo.action';
import { IUser } from './model/user.model';
import { IPost } from './model/post.mode';

@Injectable()
export class DemoEffects {
  constructor(private actions$: Actions, private demoService: DemoService) {}

  user = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      exhaustMap((action) =>
        this.demoService.getUser().pipe(
          map((user: IUser[]) => {
            return saveUsersAction({ payload: user });
          }),
          catchError((error) => {
            console.log(error);
            return of(ApiError({ error }));
          })
        )
      )
    )
  );

  post = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostAction),
      exhaustMap((action) =>
        this.demoService.getPosts().pipe(
          map((post: IPost[]) => {
            return savePostsAction({ payload: post });
          }),
          catchError((error) => {
            console.log(error);
            return of(ApiError({ error }));
          })
        )
      )
    )
  );
}
