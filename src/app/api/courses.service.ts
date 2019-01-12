import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameService } from './game.service';
import { Course } from '../course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
course: Course;
courseId: number;
teeId: number;

  constructor(private http: HttpClient) {
   }

  getCourses() {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses');
  }

  getCourseDetail(id: number) {
    this.courseId = id;
    return this.http.get(`https://golf-courses-api.herokuapp.com/courses/${id}`);
  }

  setCourse() {
    this.http.get(`https://golf-courses-api.herokuapp.com/courses/${this.courseId}`)
      .subscribe((data: { data: Course }) => this.course = data.data);
  }

  log() {console.log(this.course); }


  setTeeId(id: number) {
    this.teeId = id;
  }

  getTeeId() {
    return this.teeId;
  }

}
