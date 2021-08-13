import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, IState } from '../app.state';
import { getPostAction } from '../demo.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  data$: Observable<IState>;
  constructor(private store: Store<AppState>) {
    this.data$ = store.select('demoState');
    this.store.dispatch(getPostAction());
  }
}
