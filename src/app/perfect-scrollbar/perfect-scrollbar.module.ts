import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarComponent } from './perfect-scrollbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [PerfectScrollbarComponent],
  exports: [PerfectScrollbarComponent]


})
export class PerfectScrollbarModule { }
