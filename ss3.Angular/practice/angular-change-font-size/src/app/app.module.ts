import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './component/font-size-editor/font-size-editor.component';
import { PetComponent } from './component/pet/pet.component';
import {FormsModule} from "@angular/forms";
import { BootstraptestComponent } from './component/bootstraptest/bootstraptest.component';
import { CaculatorComponent } from './component/caculator/caculator.component';
import { AngularColorPickerAppComponent } from './component/angular-color-picker-app/angular-color-picker-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    BootstraptestComponent,
    CaculatorComponent,
    AngularColorPickerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
