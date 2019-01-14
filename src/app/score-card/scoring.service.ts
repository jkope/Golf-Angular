import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {
  out: number[];
  instroke: number[];

  constructor() { }

  calculateScoreofPar(par: number, scores: number[]) {
    return scores.map((score) => (score ? score : 0)).reduce((a, b) => a + b, 0) - par;
  }
  calculateOutScore(par: number, scores: number[]) {
    this.out = scores.slice(0, 9);
    return this.out.map((score) => (score ? score : 0)).reduce((a, b) => a + b, 0) - par;
  }
  calculateInScore(par: number, scores: number[]) {
    this.instroke = scores.slice(9, 18);
    return this.instroke.map((score) => (score ? score : 0)).reduce((a, b) => a + b, 0) - par;
  }
  totalOfScore(par: number, scores: number[]) {
    return scores.map((score) => (score ? score : 0)).reduce((a, b) => a + b, 0) - par;
  }

}
