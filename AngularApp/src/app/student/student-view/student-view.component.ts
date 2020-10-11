import { Component, OnInit } from '@angular/core';
import  { PdfViewerComponent  }  from  'ng2-pdf-viewer';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  pdfSource:string =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(public pdfViewerComponet:PdfViewerComponent) { }

  ngOnInit(): void {
  }

}
