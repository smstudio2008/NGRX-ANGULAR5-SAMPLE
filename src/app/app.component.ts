import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { DataSample } from '../app/perfect-scrollbar/Redux/Model/data-sample';
import * as SampleActions from '../app/perfect-scrollbar/Redux/Action/Data.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {}

  title: String = 'The NGRX Challenge';
  

  addData(name, url) {
    this.store.dispatch(new SampleActions.AddData({ timeStamp: new Date()}) );
  }

  autoScrolling() {
    window.scrollTo(0, document.body.scrollHeight);
  }

}
