import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../player';

@Pipe({
  name: 'nameChecker'
})
export class NameCheckerPipe implements PipeTransform {
change: string;
  transform(value: string, players: Player[]): any {
    const valuecap = value.toLowerCase();
    if (players.filter( x => x.name === valuecap).length > 0) {
    this.change = valuecap + Math.floor(Math.random() * 100);
    } else {
      this.change = valuecap;
    }
    return this.change;
  }

}
