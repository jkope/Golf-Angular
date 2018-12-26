import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../api/courses.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  courses: any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }



}
