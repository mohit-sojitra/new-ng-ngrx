import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addDataAction, getUserAction } from '../demo.action';
import { state } from '../demo.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  data$: Observable<state>;
  constructor(private store: Store<{ demoStore: state }>) {
    this.data$ = store.select('demoStore');
    this.store.dispatch(getUserAction());
  }
}
