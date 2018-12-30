import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})


export class AddPlayersComponent implements OnInit {
  @Input() public teeId: number;

  constructor() { }

  ngOnInit() {
  }

}
