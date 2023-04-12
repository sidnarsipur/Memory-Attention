import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  gamesArray: Game[] = [];
  chipIsClicked = false;
  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
    // this.gamesArray = this.gameService.getGames()
    // console.log(this.gamesArray)
    let navpath = localStorage.getItem('navpath')
    if (navpath) {
      this.router.navigate(['/home/' + navpath])
    } else {
      this.router.navigate(['/home/main'])
    }

  }

  ionTabsWillChange() {
    console.log('change')
  }

  // onClickCard(gamename: string) {
    
  //   if (!this.chipIsClicked) {
  //     this.router.navigate(['/description/' + gamename])
  //   } else {
  //     this.chipIsClicked = false
  //   }
  // }

  // onClickChip(gamename: string) {
  //   let spacelessgamename = gamename.split(" ").join("")
  //   // removes spaces from gamename so the path is proper
  //   this.chipIsClicked = true
  //   this.router.navigate(['/' + spacelessgamename])
  // }

}
