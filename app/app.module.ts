import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// import { BrowserModule }                from '@angular/platform-browser';
// import { ReactiveFormsModule }          from '@angular/forms';
// import { NgModule }                     from '@angular/core';
// import { AppComponent }                 from './app.component';
// // import { DynamicFormComponent }         from './dynamic-form.component';
// // import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
// @NgModule({
//   imports: [ BrowserModule, ReactiveFormsModule ],
//   declarations: [ AppComponent ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule {
//   constructor() {
//   }
// }
