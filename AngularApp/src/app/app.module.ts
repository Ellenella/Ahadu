import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentregisterComponent } from './student/studentregister/studentregister.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    StudentregisterComponent,
    StudenthomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
