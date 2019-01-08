import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})


export class AddPlayersComponent implements OnInit {
  @Input() public teeId: number;


  form: FormGroup;

  constructor(formBuild: FormBuilder) {
    this.form = formBuild.group({
        name: ['']
    });
  }

  ngOnInit() {
  }

}
