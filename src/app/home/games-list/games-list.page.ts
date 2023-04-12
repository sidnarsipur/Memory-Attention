import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';
import { Game } from '../../shared/game.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {
  gamesArray: Game[] = [];
  displaynumberarray = [];
  displayarray = []
  currentnumber = -1
  chipIsClicked = false;
  constructor(
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {

    // gets the information of the games from the game service adn formats it so that it is displayed in the componetn

    this.gamesArray = this.gameService.getGames()
    for (let i = 0; i < this.gamesArray.length; i++) {
      if (i !== 0 && i%2 === 0) {
        console.log(i)
        this.currentnumber = this.currentnumber + 2
      }
      this.currentnumber++
      this.displaynumberarray.push({number: this.currentnumber, name: this.gamesArray[i].name, imageURL: this.gamesArray[i].thumbnailURL, img: true})
      this.displaynumberarray.push({number: this.currentnumber + 2, name: this.gamesArray[i].name, imageURL: this.gamesArray[i].thumbnailURL, img: false})
      


    }

    for (let i = 0; i < this.displaynumberarray.length; i++) {
      let item = this.displaynumberarray[i]
      let num = item.number
      // if (num) {
      //   let temp1 = {name: this.displaynumberarray[i].name, img: this.displaynumberarray[i].img}
      //   this.displaynumberarray[i] = this.displaynumberarray[num]
      //   this.displaynumberarray[num] = temp1
      // }
      this.displayarray[num] = {name: item.name, imageURL: item.imageURL, img: item.img}
    }
    // this.displayarray[this.displaynumberarray.length - 1] = this.displayarray[this.displaynumberarray.length]
    // this.displayarray.splice(this.displaynumberarray.length, 1)
    this.displayarray[this.displaynumberarray.length - 1] = {}
    console.log(this.displayarray)
    console.log(this.displaynumberarray)
    localStorage.setItem('navpath', 'games-list')
  }

    // just sets it such that when the path is /home then it goes here

  ionViewDidEnter() {
    localStorage.setItem('navpath', 'games-list')
  }

  // navigates to the game description (legacy)
  // onClickCard(gamename: string) {
    
  //   if (!this.chipIsClicked) {
  //     this.router.navigate(['/description/' + gamename])
  //   } else {
  //     this.chipIsClicked = false
  //   }
  // }

  // when a game is clicked then the path is navigated to
  onClickChip(gamename: string) {
    let spacelessgamename = gamename.split(" ").join("")
    // removes spaces from gamename so the path is proper
    this.chipIsClicked = true
    this.router.navigate(['/' + spacelessgamename])
  }

  // reSize(img: boolean) {
  //   if (img === true) {
  //     return 3
  //   } if (img === false) {
  //     return 3
  //   }
  // }

  // reOffset(img: boolean) {
  //   if (img === true) {
  //     return 2
  //   } if (img === false) {
  //     return 2
  //   }
  // }

}
