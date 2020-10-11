import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/sharedstudent/subject.model';
import { Grade } from 'src/app/sharedstudent/grade.model';
import { Unit } from 'src/app/sharedstudent/unit.model';

@Component({
  selector: 'app-select-qu-type',
  templateUrl: './select-qu-type.component.html',
  styleUrls: ['./select-qu-type.component.css'],
  
})
export class SelectQuTypeComponent implements OnInit {
  options : any;
 // grades:Grade[];
 // subjects:Subject[];
 // units:Unit[];

  units: Unit[] =[
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7},
    { id: 8},
    { id: 9},
    { id: 10},
    { id: 11},
    { id: 12},

  ]

  grade: Grade[] = [

    { id: 5},
    { id: 6},
    { id: 7},
    { id: 8},
    { id: 9},
    { id: 10},
    { id: 11},
    { id: 12},
    
   

  ]

  subject:  Subject[] = [
      { name: "Amharic"},
      { name: "	Tigrgna "},
      { name: "	oromifa "},
      { name: "	Biology"},
      { name: "	Physics"},
      { name: "Chemistry"},
      { name: "Mathmatics"},
      { name: "History"},
      { name: "Geeze"},
      { name: "Physical Excercise"},
      {name : "It"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
