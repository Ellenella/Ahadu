import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import  {  PdfViewerModule,PdfViewerComponent  }  from  'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentregisterComponent } from './student/studentregister/studentregister.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import {RouterModule } from '@angular/router';
import {appRoutes } from './routes';
import { SelectQuTypeComponent } from './student/select-qu-type/select-qu-type.component';
import { SelectViewResourseComponent } from './student/select-view-resourse/select-view-resourse.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { ViewrComponent } from './student/viewr/viewr.component';
import { ViewquestionComponent } from './student/viewquestion/viewquestion.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    StudentregisterComponent,
    StudenthomeComponent,
    SelectQuTypeComponent,
    SelectViewResourseComponent,
    StudentViewComponent,
    ViewrComponent,
    ViewquestionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [PdfViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
