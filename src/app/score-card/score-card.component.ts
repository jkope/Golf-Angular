import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CoursesService } from '../api/courses.service';
import { GameService } from '../api/game.service';
import { ScoringService } from './scoring.service';
import { MatSnackBar } from '@angular/material';
import { Player } from '../player';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit, OnDestroy {

  game: any;
  players: Player[];
  t: number;
  coursePars: number[] = [];
  courseYards: number[] = [];
  courseOut: number;
  courseIn: number;
  courseTotal: number;
  message: string;
  yardsTotal: number;


  constructor (
    private _gameService: GameService,
    private _scoringService: ScoringService,
    private snackBar: MatSnackBar
    ) { }


  ngOnInit() {
    this._gameService.getGameObs().subscribe(
      game => {this.game = game;
       this.players = this.game.players;
        this.setCourseScores();
      });
    }

  setCourseScores(): void {
    this.game.course.holes.forEach(hole => {
      this.coursePars.push(hole.teeBoxes[this.game.teeId].par);
    });
    this.game.course.holes.forEach(hole => {
      this.courseYards.push(hole.teeBoxes[this.game.teeId].yards);
    });
    this.courseIn = this._scoringService.calculateInScore(0, this.coursePars);
    this.courseOut = this._scoringService.calculateOutScore(0, this.coursePars);
    this.courseTotal = this._scoringService.totalOfScore(0, this.coursePars);
    this.yardsTotal = this._scoringService.totalOfScore(0, this.courseYards);
    }

  saveGame() {
    this._gameService.saveGame(this.game);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this._gameService.saveGame(this.game);
  }



  completionChecker(scores: number[]) {
    const x = this._scoringService.totalOfScore(this.courseTotal, scores);
    if (!scores.includes(0)) {
      if (x > 0) {
        this.message = `${x} Over par, that\'s alright, better luck next time`;
        this.snack(this.message);
      } else if (x < 0) {
        this.message = `${x} Under par, that\'s great!`;
        this.snack(this.message);
      } else {
        this.message = `${x} over ${x} under. Par for the course, very nice!`;
        this.snack(this.message);
      }
      // tslint:disable-next-line:no-unused-expression
    } else { return false; }
  }

  snack(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }


}


