import { Component, Input, OnInit } from '@angular/core';
import { EventemitterService } from '../eventemitter.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('gameHasBegun') gameHasBegun: boolean;
  @Input('gamenumber') gamenumber: string;
  gamename: string;
  
  constructor(private gameService: GameService,
    private eventEmitter: EventemitterService,) { }

  ngOnInit() {
    this.gamename = this.gameService.gamesArray[+this.gamenumber].name
  }

  onCloseMenu(string?: string) {
    if (string) {
      this.eventEmitter.onGameState(string)
      // if (string === 'quit') {
      //   this.router.navigate(['/home'])
      // }
    }
  }

}
