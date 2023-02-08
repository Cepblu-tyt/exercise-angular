import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../shared/models/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  @Input() studentName: string = '';
  @Input() students: Student[] = [];

  ngOnInit(): void {
  }

}
