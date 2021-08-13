import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPostAction, getUserAction } from '../demo.action';
import { state } from '../demo.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  data$: Observable<state>;
  constructor(private store: Store<{ demoStore: state }>) {
    this.data$ = store.select('demoStore');
    this.store.dispatch(getPostAction());
  }
}
