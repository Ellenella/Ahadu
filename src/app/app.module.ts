import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import  { PdfViewerModule,PdfViewerComponent  }  from  'ng2-pdf-viewer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { QuetionAndAnswerComponent } from './student/quetion-and-answer/quetion-and-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentViewComponent,
    QuetionAndAnswerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule
    
  ],
  providers: [PdfViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
