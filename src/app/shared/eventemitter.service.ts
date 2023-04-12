import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventemitterService {
  animate = new EventEmitter<string>();
  // CurrentCardRoute = new EventEmitter<string>();
  form = new EventEmitter<string>();
  // gameState = new EventEmitter<string>();
  CurrentCardRoute = new Subject<string>();
  gameStateSubj = new Subject<string>();
  RoundFinished = new Subject<any>();
  memorizedItems = new Subject<any>();
  databaseemitter = new Subject<any>();
  loading = new Subject<boolean>();

  constructor() { }
  // has the different subjects and event emitters that are used in the app

  onAnimate(string: string) {
    this.animate.emit(string)
  }

  onCurrentCardRoute(string: string) {
    this.CurrentCardRoute.next(string)
  }

  onForm(string: string) {
    this.form.emit(string)
  }

  onGameState(string: string) {
    // this.gameState.emit(string)
    this.gameStateSubj.next(string)
  }

  onRoundFinished(any) {
    this.RoundFinished.next(any)
  }

  onMemorizedItems(array: any) {
    this.memorizedItems.next(array)
  }

  onDatabase(object) {
    this.databaseemitter.next(object)
  }

  onLoading(boolean: boolean) {
    this.loading.next(boolean)
  }

}
