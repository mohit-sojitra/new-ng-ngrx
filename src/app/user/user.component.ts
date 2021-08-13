import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, IState } from '../app.state';
import { getUserAction } from '../demo.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  data$: Observable<IState>;
  constructor(private store: Store<AppState>) {
    this.data$ = store.select('demoState');
    this.store.dispatch(getUserAction());
  }
}
