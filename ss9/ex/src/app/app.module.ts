import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoUpdateComponent } from './component/todo-update/todo-update.component';
import { TodoCreateComponent } from './component/todo-create/todo-create.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoUpdateComponent,
    TodoCreateComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
