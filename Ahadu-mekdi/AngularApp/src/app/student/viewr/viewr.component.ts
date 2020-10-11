import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-viewr',
  templateUrl: './viewr.component.html',
  styleUrls: ['./viewr.component.css']
})
export class ViewrComponent implements OnInit {

  pdfSource:string =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
