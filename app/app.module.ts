import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {SearchPipe} from './search-pipe';
import {orderByPipe} from './orderByPipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SearchPipe,
    orderByPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
