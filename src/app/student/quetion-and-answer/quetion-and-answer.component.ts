import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/sharedstudent/student.service';
import { NgForm }  from '@angular/forms';
import { Router } from "@angular/router";
import { Grade } from "src/app/sharedstudent/grade.model";
import { DataSource} from './dataSource';
import { Subject } from 'src/app/sharedstudent/subject.model';
import { Unit } from 'src/app/sharedstudent/unit.model';

@Component({
  selector: 'app-quetion-and-answer',
  templateUrl: './quetion-and-answer.component.html',
  styleUrls: ['./quetion-and-answer.component.scss'],
  providers: [DataSource]
})
export class QuetionAndAnswerComponent implements OnInit {
  grades:Grade[];
  subjects:Subject[];
  units:Unit[];

  constructor(public studentService:StudentService,public dataSource:DataSource) { 
    this.grades = this.dataSource.getGrade();
    this.subjects = this.dataSource.getSubject();
    this.units = this.dataSource.getUnit();
    }

  ngOnInit(): void {
  }

}
