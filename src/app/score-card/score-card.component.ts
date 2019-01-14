import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../api/courses.service';
import { DialogComponent } from '../dialog/dialog.component';
import { GameService } from '../api/game.service';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { ScoringService } from './scoring.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  course: any;
  game: any;
  players: any;
  t: number;
  coursePars: any[] = [];
  courseOut: number;
  courseIn: number;
  courseTotal: number;

  constructor (
    private _coursesService: CoursesService,
    private _gameService: GameService,
    private _scoringService: ScoringService
    ) {
    // this._gameService.getGameObs().subscribe(game => this.game = game);
  }


  ngOnInit() {
    this._gameService.getGameObs().subscribe(game => this.game = game);
    this.setCourseScores();
    // this.course = this.game.course;
    // this.t = this.game.teeId;
    this.players = this.game.players;
    console.log(this.coursePars);
    }

  setCourseScores(): void {
    this.game.course.holes.forEach( hole => {
      this.coursePars.push(hole.teeBoxes[this.game.teeId].par);
      this.courseIn = this._scoringService.calculateInScore(0, this.coursePars);
      this.courseOut = this._scoringService.calculateOutScore(0, this.coursePars);
      this.courseTotal = this._scoringService.totalOfScore(0, this.coursePars);
    });
  }

  log() {
    console.log(this.game.teeId);
    console.log(this.t);

    console.log(this.coursePars);
  }
}
