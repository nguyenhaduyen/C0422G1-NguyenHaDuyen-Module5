import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './component/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginFormComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
