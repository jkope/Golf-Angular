import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../api/courses.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  course: Course;
  teeId: number;
  t: number;
  players = [
    { name: 'Jake'},
    { name: 'Vera'},
    { name: 'Harry'}
  ];

  constructor(private _coursesService: CoursesService) {  }

  getCourseData() {
    this._coursesService.getCourseDetail()
      .subscribe((data: { data: Course }) => this.course = (data.data));
  }

  getTeeId() {
    this.teeId = this._coursesService.getTeeId();
    this.t = this.teeId - 1;
  }

  ngOnInit() {
    this.getCourseData();
    this.getTeeId();
    console.log(this.teeId);
  }

}
