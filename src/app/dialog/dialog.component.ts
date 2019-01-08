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
  public teeId: number;

  constructor(private _coursesService: CoursesService) { }

  ngOnInit() {
    this._coursesService.getCourses()
    .subscribe((data: {courses: Courses[]} ) => this.courses = data.courses);
  }

  getCourseData(id: number) {
    this.teeId = null;
    this._coursesService.setCourseDetail(id);
    this._coursesService.getCourseDetail()
    .subscribe((data: {data: Course}) => this.course = data.data);
  }

  setTeeId(id: number) {
    this.teeId = id;
  }
}
