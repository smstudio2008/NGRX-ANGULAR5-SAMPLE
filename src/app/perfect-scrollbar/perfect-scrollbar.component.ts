import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { DataSample } from '../perfect-scrollbar/Redux/Model/data-sample';
import { AppState } from './../app.state';

@Component({
  selector: 'app-perfect-scrollbar',
  templateUrl: './perfect-scrollbar.component.html',
  styleUrls: ['./perfect-scrollbar.component.css']
})
export class PerfectScrollbarComponent implements OnInit {

  newSample: Observable<DataSample []>;

 constructor(private store: Store<AppState>) {
  this.newSample = store.select('addSampleData');
}


  ngOnInit() {
  }

}
