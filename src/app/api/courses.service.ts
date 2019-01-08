import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
course: Observable <object>;
teeId: number;
  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses');
  }

  setCourseDetail(id: number) {
    this.course = this.http.get(`https://golf-courses-api.herokuapp.com/courses/${id}`);
  }

  getCourseDetail() {
    return this.course;
  }

  setTeeId(id: number) {
    this.teeId = id;
  }

  getTeeId() {
    return this.teeId;
  }

}
