import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../api/courses.service';
import { Courses } from '../courses';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  courses;

  test: 'test';

  constructor(private _coursesService: CoursesService) { }

  ngOnInit() {
    this._coursesService.getCourses()
    .subscribe(data => this.courses = data);
  }


  log() {
    console.log(this.courses);
  }
}
