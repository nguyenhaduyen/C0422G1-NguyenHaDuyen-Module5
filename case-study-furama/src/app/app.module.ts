import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ServiceListComponent } from './component/service/service-list/service-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ServiceUpdateComponent } from './component/service/service-update/service-update.component';
import { ServiceAddComponent } from './component/service/service-add/service-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServiceUpdateComponent,
    ServiceAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
