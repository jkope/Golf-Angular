import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '../courses';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseUrl: 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses');
  }

}
