import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private gameRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.gameRef = this.db.object<any>(`game`);
  }

  getGameObs(): Observable<any> {
    return this.gameRef.valueChanges();
  }


  saveGame(g) {
    this.gameRef.set(g);
  }



}
