import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GameService } from '../api/game.service';


@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})


export class AddPlayersComponent implements OnInit {
  game: any;
  newName = '';

  constructor(private _gameService: GameService ) {  }

  ngOnInit() {
    this._gameService.getGameObs().subscribe(game => this.game = game);
  }

  addPlayer(playerName: string) {
    // tslint:disable-next-line:no-unused-expression
    this.game.players ? '' : this.game.players = [];
    const player = {name: playerName,
                    scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
    this.game.players.push(player);
    this._gameService.saveGame(this.game);
    this.newName = '';
    console.log(this.game);

  }

  removePlayer(index) {
    this.game.players.splice(index, 1);
    this._gameService.saveGame(this.game);
  }

  updatePlayer() {
    this._gameService.saveGame(this.game);

  }

}
