import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from '../app/perfect-scrollbar/Redux/Reducers/simple.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { PerfectScrollbarModule} from './perfect-scrollbar/perfect-scrollbar.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
    StoreModule.forRoot({
      addSampleData: simpleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
