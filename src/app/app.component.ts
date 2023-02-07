import {Component, OnInit} from '@angular/core';
import {Student} from "./shared/models/Student";
import {Teacher} from "./shared/models/Teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.students = this.fetchStudents();
    this.teachers = this.fetchTeacher();
  }
  title = 'SDA exercise-angular';


  students: Student[] = [];
  fetchStudents(): Student[]{
    let students: Student[]=[];

    students.push(new Student('Sass','Tamm','35','Student','s.tamm@gmail.com'));
    students.push(new Student('Ivo','Linno','45','Student','i.linno@gmail.com'));


    return students;
  }

  teachers: Teacher[] = [];
  fetchTeacher(): Teacher[]{
    let teachers: Teacher[]=[];

    teachers.push(new Teacher('Vinod','John','35','Teacher','v.john@gmail.com'));
    teachers.push(new Teacher('Niko','Lampi','45','Teacher','n.lampi@gmail.com'));


    return teachers;
  }

  addStudent(){

  };

  addTeacher(){

  };

}
