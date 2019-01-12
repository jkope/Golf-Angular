import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../api/courses.service';
import { Courses } from '../courses';
import { Course } from '../course';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Game } from '../game';
import { GameService } from '../api/game.service';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  courses: Courses[];
  course: Course;
  public teeId: number;
  game: any;

  constructor(private _coursesService: CoursesService, private _gameService: GameService) {
    this._gameService.getGameObs().subscribe(game => this.game = game);
  }



  ngOnInit() {
    console.log(this.game);
    this._coursesService.getCourses()
    .subscribe((data: {courses: Courses[]} ) => this.courses = data.courses);

  }

  getCourseData(id: number) {
    this.game.teeId = null;
    this.game.courseId = id;
    this._gameService.saveGame(this.game);
    this._coursesService.getCourseDetail(id)
    .subscribe((data: {data: Course}) => this.course = data.data);
    this._coursesService.setCourse();
  }

  setTeeId(id: number) {
    this.game.teeId = id;
    this._gameService.saveGame(this.game);
    this._coursesService.setTeeId(id);
    this.teeId = id;
    console.log(this.course);
  }
}
