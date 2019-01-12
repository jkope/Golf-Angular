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
  coursePars: number[];
  courseOut: number;
  courseIn: number;
  courseTotal: number;

  constructor (
    private _coursesService: CoursesService,
    private _gameService: GameService,
    private _scoringService: ScoringService
    ) {  }


  ngOnInit() {
    this._gameService.getGameObs().subscribe(game => this.game = game);
    this.setCousreArray();
    this.course = this._coursesService.course;
    this.t = this._coursesService.teeId - 1;
    this.players = this.game.players;
    this.courseOut = this._scoringService.totalOfScore(this.coursePars);
    console.log(this.coursePars);
    }

  setCousreArray(): void {
    this.course.holes[this.t].par.forEach( x => {
      this.coursePars.push(x);
    });
  }

}
