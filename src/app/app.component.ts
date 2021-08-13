import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addDataAction, getUserAction } from './demo.action';
import { state } from './demo.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$: Observable<state>;
  constructor(
    private store: Store<{demoStore:state}>
  ) {
    this.data$ = store.select('demoStore');
  }

  dispatchAction() {
    this.store.dispatch(addDataAction({ payload: 'mohit' }));
  }

  dispatchAPIAction(){
    this.store.dispatch(getUserAction());
  }
}
