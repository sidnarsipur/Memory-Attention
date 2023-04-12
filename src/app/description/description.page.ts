import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
  currentGame: string;
  desc: string;
  catchphrase: string;
  imgURL: string;


  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router) { 
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.currentGame = params.game
      }
    )
    for (let game of this.gameService.getGames()) {
      if (game.name === this.currentGame) {
        this.desc = game.description
        this.catchphrase = game.catchphrase
        this.imgURL = game.thumbnailURL
      }
    }
  }
  onClickChip() {
    this.router.navigate(['/' + this.currentGame.split(" ").join("")])
  }
}
