import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { EventemitterService } from '../eventemitter.service';
import { GameService } from '../game.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  @Input('gameHasBegun') gameHasBegun: boolean;
  // @Input('lost') lost: boolean;
  // @Input('remembered') remembered: boolean;
  @Input('gameno') gameno: number;
  @Input('startButtonIsDisabled') startButtonIsDisabled: boolean = false;

  // completed: string[];
  gamedesc: string[];
  gameimgurl: string;


  constructor(
    private eventemitter: EventemitterService,
    private gameservice: GameService) { }

  ngOnInit() {
    // this.gamedesc = this.gameservice.gamesArray[this.gameno].description.split("\n")
    // this.gameimgurl = this.gameservice.gamesArray[this.gameno].thumbnailURL
    // this.completed = this.gameservice.gamesArray[this.gameno].completed
  }
  
  onStart() {
    this.eventemitter.onGameState('start')
  }

}
