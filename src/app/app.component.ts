import {Component, OnInit} from '@angular/core';
import {Student} from "./shared/models/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.students = this.fetchStudents();
  }
  title = 'SDA exercise-angular';


  students: Student[] = [];
  fetchStudents(): Student[]{
    let students: Student[]=[];

    students.push(new Student('Vinod','John','35','Student','v.john@gmail.com'));
    students.push(new Student('Marko','Lill','45','Student','m.lill@gmail.com'));


    return students;
  }


}
