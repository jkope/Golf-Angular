import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '../courses';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseUrl: 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.courseUrl);
  }

}
