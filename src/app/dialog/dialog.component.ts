import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../api/courses.service';
import { Courses } from '../courses';
import { Course } from '../course';
import { GameService } from '../api/game.service';
import { NameCheckerPipe } from './name-checker.pipe';
import { Player } from '../player';




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  courses: Courses[];
  course: Course;
  game: any;
  newName = '';


  constructor(
    private _coursesService: CoursesService,
    private _gameService: GameService,
    private nameChecker: NameCheckerPipe,
    ) { }


  ngOnInit() {
    this._gameService.getGameObs().subscribe(game => {
      this.game = game;
      this.setCourse(this.game.courseId);
    });
    this._coursesService.getCourses()
    .subscribe((data: {courses: Courses[]} ) => {
      this.courses = data.courses;
    });
  }

  setCourse (id: number) {
    this.game.teeId = 0;
    this.game.courseId = id;
    this._coursesService.getCourseDetail(id)
    .subscribe((data: {data: Course}) => this.game.course = data.data);
  }

  setTeeId(id: number) {
    this.game.teeId = id;
  }

  addPlayer() {
    // tslint:disable-next-line:no-unused-expression
    this.game.players ? '' : this.game.players = [];
    const checkedName = this.nameChecker.transform(this.newName, this.game.players);
    const player: Player = {
      name: checkedName,
      scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    this.game.players.push(player);
    this.newName = '';
  }

  removePlayer(index) {
    this.game.players.splice(index, 1);
  }

  updateGame() {
    this._gameService.saveGame(this.game);
  }

  newGame() {
    this.game.players = [];
    this.game.courseId = '18300';
    this.game.teeId = '0';
    this.updateGame();
  }

}
