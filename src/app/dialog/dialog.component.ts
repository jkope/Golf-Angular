import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../api/courses.service';
import { Courses } from '../courses';
import { Course } from '../course';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  courses: Courses[];
  course: Course;
  test: 'test';
  teeId: number;

  constructor(private _coursesService: CoursesService) { }

  ngOnInit() {
    this._coursesService.getCourses()
    .subscribe((data: {courses: Courses[]} ) => this.courses = data.courses);
  }


  log() {
    console.log(this.teeId);
  }

  getCourseData(id: number) {
    this._coursesService.getCourseDetail(id)
    .subscribe((data: {data: Course}) => this.course = data.data);
  }

  setTeeId(id: number) {  // not getting a number back but just the 'tee.teeTypeId'
    this.teeId = id;
  }
}
