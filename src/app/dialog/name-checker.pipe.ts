import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../player';

@Pipe({
  name: 'nameChecker'
})
export class NameCheckerPipe implements PipeTransform {
change: string;
  transform(value: any, players: Player[]): any {
    if (players.filter( x => x.name === value).length > 0) {
    this.change = value + Math.floor(Math.random() * 100);
    } else {
      this.change = value;
    }
    return this.change;
  }

}
