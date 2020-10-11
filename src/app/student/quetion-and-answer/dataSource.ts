import { Injectable } from '@angular/core';
import { Grade } from "src/app/sharedstudent/grade.model";
import { Subject } from 'src/app/sharedstudent/subject.model';
import { Unit } from 'src/app/sharedstudent/unit.model';


@Injectable()
export class DataSource{
    getGrade(){
        return[
            new Grade(5),
            new Grade(6),
            new Grade(7),
            new Grade(8),
            new Grade(9),
            new Grade(10),
            new Grade(11),
            new Grade(12),
        ];
    }

    getSubject(){
        return[
            new Subject("Biology"),
            new Subject("Chemistry"),
            new Subject("Maths"),
            new Subject("English"),
            new Subject("Geography"),
            new Subject("History"),
            new Subject("Amharic"),
            new Subject("Tigrgna"),
            new Subject("Affan Oromo"),
            new Subject("Geeze"),
            new Subject("Physical Excercise"),
        ];
    }

    getUnit(){
        return[
        new Unit(1),
        new Unit(2),
        new Unit(3),
        new Unit(4),
        new Unit(5),
        new Unit(6),
        new Unit(7),
        new Unit(8),
        new Unit(9),
        new Unit(10),
        new Unit(11),
        new Unit(12),

        ];
        
    }

}