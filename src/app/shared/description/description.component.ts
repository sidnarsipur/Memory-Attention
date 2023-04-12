import { Component, Input, OnInit } from '@angular/core';
import { EventemitterService } from '../eventemitter.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input('gameHasBegun') gameHasBegun: boolean;
  @Input('lost') lost: boolean;
  @Input('remembered') remembered: boolean;
  @Input('gameno') gameno: number;
  @Input('startButtonIsDisabled') startButtonIsDisabled: boolean = false;

  gamedesc: string[];
  gameimgurl: string;
  
  constructor(
    private eventemitter: EventemitterService,
    private gameservice: GameService) { }

  ngOnInit() {
    this.gamedesc = this.gameservice.gamesArray[this.gameno].description.split("\n")
    this.gameimgurl = this.gameservice.gamesArray[this.gameno].thumbnailURL
  }

}
