import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { EventemitterService } from '../eventemitter.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input('gameHasBegun') gameHasBegun: boolean;
  @Input('gamenumber') gamenumber: string;
  gamename: string;
  isPaused = false;

  constructor(
    private gameService: GameService,
    private eventEmitter: EventemitterService,
    private menu: MenuController,
    private router: Router) { }

  ngOnInit() {
    this.gamename = this.gameService.gamesArray[+this.gamenumber].name
    console.log(this.gamename)
  }

  onCloseMenu(string?: string) {
    this.menu.close("pause")
    if (string) {
      this.eventEmitter.onGameState(string)
      // if (string === 'quit') {
      //   this.router.navigate(['/home'])
      // }
    }
  }

  onPause() {
    let pauseresume = ''
    if (this.isPaused === false) {
      pauseresume = 'pause'
    }
    if (this.isPaused === true) {
      pauseresume = 'resume'
    }
    this.eventEmitter.onGameState(pauseresume)
    this.isPaused = !this.isPaused
  }

  onStart() {
    this.eventEmitter.onGameState('restart')
  }

}
