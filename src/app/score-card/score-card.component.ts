import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../api/courses.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input() public teeId: number;

  course: Course;
  players = [
    { name: 'Jake'},
    { name: 'Vera'},
    { name: 'Harry'}
  ];
  t = 0;

  constructor(private _coursesService: CoursesService) {  }

  getCourseData() {
    this._coursesService.getCourseDetail()
      .subscribe((data: { data: Course }) => this.course = (data.data));
  }

  ngOnInit() {
    this.getCourseData();
  }

}
