import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EventemitterService } from '../../shared/eventemitter.service';
import { GameService } from '../../shared/game.service';
import { SortThemService } from './sort-them.service';


@Component({
  selector: 'app-sort-them',
  templateUrl: './sort-them.page.html',
  styleUrls: ['./sort-them.page.scss'],
})
export class SortThemPage implements OnInit, OnDestroy {
  gameHasBegun = false;
  paused = false;
  wrongcount: number = 0;
  lost = false;
  currentIndex: number = 0;
  numbersRemembered: number;
  gameno = 4;
  startButtonIsDisabled = false;
  numberofchips = 20
  array = []
  clickedcards = []
  currentindex = 0 
  wrongselected = []
  height: number;
  width: number;
  top: number[];
  left: number[];
  times: number[] = [];
  timerfunc = setInterval(() => {
    this.timer = this.timer + 1000
  }, 1000)
  timer = 0
  inittime: number;
  pausetimer: number;
  score = 0
  gamewrongs = 0
  instructionsarray = ["Tap the numbers from 1-20", "Tap the letters from A-T", "Tap the letters from a-t", "Tap the letters from earliest to last", "Tap the numbers then letters 1, A, 2, B...", "Tap the lowest number then lowest letter then up to the highest", "Tap the lowest number and increase in multiples", "Tap the lowest number and increase in multiples", "1Aa2Bb...", "12Ab34Bc..." ]
  subscription = new Subscription()
  database = new Subscription()
  gamescore: number;
  level = 1
  @Input('excerciseSet') excerciseMode = false;
  @Input('levels') levels;

  constructor(
    private eventemitter: EventemitterService,
    private platform: Platform,
    private sortThemService: SortThemService,
    private router: Router,
    private alertCtrl: AlertController,
    private gameService: GameService) { }

  ngOnInit() {

    // gets existing level and score from the database
    this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      if (value.level) {
        this.sortThemService.level = value.level
      }
      if (value.score) {
        this.score = value.score
      }
    })

    // based on the size of the device, the size of the buttons changes and this function just gets the height and width of the device
    this.height = +this.platform.height()
    this.width = +this.platform.width()
    console.log(this.height, this.width)

    // emitter to get menu function calls from the start component
    this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
      console.log(value)
      switch (value) {
        case 'start': 
          this.onStart()
          break
        case 'restart':
          this.startButtonIsDisabled = true
          this.onEndGame()
          setTimeout(() => {
            this.startButtonIsDisabled = false
            this.onStart()
          }, 700)
          break
        case 'resume':
          this.onResume()
          break
        case 'quit':
          this.onQuit()
          break
        case 'pause':
          this.onPause()
          break
        case 'stop':
          this.onEndGame()
          break
      }
    })

    if (this.excerciseMode === true) {
      this.sortThemService.level = this.levels[0]
      this.score = 0
    }
  }

  // starts the game and shows the popup
  onStart() {
    let topleft = this.sortThemService.generateCoordinates()
    this.alertCtrl.create({
      header: 'Level: ' + this.sortThemService.getLevel(),
      message: 'You need ' + (this.gameService.scoringconstant - this.score) + ' points to go to the next level',
      buttons: [{
        text: 'Continue',
        role: 'Continue',
        handler: () => {
          this.startRound(topleft)
          this.gameHasBegun = true
      }}]}).then(alert=> alert.present())
  }

  // begins the timer
  startTimer() {
    this.inittime = this.timer
  }

  // figures out the radius of the buttons
  getRadius() {
    return this.sortThemService.getRadiusConstant()
  }

  // fetches the lvel from the service
  getLevel() {
    return [this.sortThemService.level]
  }

  // async presentAlert(message) {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Score:' + this.score,
  //     message: 'You need' + message + 'points to go to the next level',
  //     buttons: ['Continue']
  //   })
  //   await alert.present()
  // }

  // ends the game
  onEndGame() {
    this.gameHasBegun = false
    this.sortThemService.endGame()
    this.score = 0
  }


  // resumes the game
  onResume() {
    this.timer = this.pausetimer
  }

  // quits to the home page
  onQuit() {
    this.onEndGame()
    this.inittime = 0
    this.router.navigate(["/home"])
  }

  // pauses the game timer
  onPause() {
    this.pausetimer = this.timer
  }

  // begins the round with information from the service
  startRound(topleft) {
    this.gamewrongs = 0
    this.top = topleft.top
    this.left = topleft.left
    this.array = topleft.array
    this.startTimer()
    console.log(this.array)
    console.log("top: " + this.top)
    console.log("left: " + this.left)
  }

  // what happens when a button is clicked and the color change and ends game if all answers are selected
  onClickChip(chip, index) {
    let currentcard = this.array[this.currentIndex].text
    console.log(currentcard, chip)
    if (chip === currentcard) {
      console.log(chip, currentcard)
      this.clickedcards.push(chip)   
      this.array[this.currentIndex].color = "success" 
      this.currentIndex++
      if (this.currentIndex === this.numberofchips) {
        this.allAnswersSelected()
      }
    } if (chip != currentcard) {
      this.wrongChipSelected(index, chip)
    }
    console.log(this.currentIndex)
  }

  // stops the timer and ends the game and starts a new round when all the answers are selected
  allAnswersSelected() {
    let endingtime = this.timer
    let prevelevel = [this.sortThemService.level].slice(0, 1)
    this.determineScore()
    this.times.push(endingtime - this.inittime)
    let increaselevel = this.sortThemService.increaseLevel(this.score)
    if (increaselevel === true) {
      console.log(this.times)
      this.gameHasBegun = false
    } else {
      if(this.score >= this.gameService.scoringconstant) {
        this.score = 0
      }
      let topleft = this.sortThemService.generateCoordinates()
      let pointsneeded = null
      if (this.excerciseMode === true) {
        if (this.sortThemService.level === this.levels[1]) {
          this.eventemitter.onRoundFinished({continue: true, score: this.score})
        }
        this.sortThemService.level++
      } else {
        pointsneeded = this.gameService.scoringconstant - this.score
        this.gameService.storeLevelScore(this.gameno, this.score, this.sortThemService.level, this.excerciseMode, (endingtime - this.inittime)/1000, this.gamewrongs, this.gamescore, prevelevel[0])
      }
      const alert = this.alertCtrl.create({
        header: 'Level: ' + this.sortThemService.getLevel(),
        message: 'You need ' + pointsneeded + ' points to go to the next level',
        buttons: [{
          text: 'Continue',
          role: 'Continue',
          handler: () => {
            this.startRound(topleft)
            this.clickedcards = []
            this.currentIndex = 0
        }}]}).then(alert=> alert.present())
    }
  }

  // what happens when a wrong button is selected
  wrongChipSelected(index, chip) {
    this.gamewrongs++
    let currentcolor = this.array[index].color
    this.array[index].color = "danger"  
    this.wrongselected.push(chip) 
    setTimeout(() => {
      this.array[index].color = currentcolor
    }, 300)
  }

  // figures out the score after a round
  determineScore() {
    this.gamescore = this.gameService.getScore(20, this.gamewrongs)
    if (this.gamescore < 0) {
      this.gamescore = 0
    }
    console.log(this.gamescore)
    this.score = this.score + this.gamescore
  }

  // disables a correct chip
  isDisabled(chip) {
    for (let card of this.clickedcards) {
      if (chip === card) {
        return true
      }
    }
    return false
  }

  // unsubscribes when destroyed
  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.database.unsubscribe()
  }

  // unsubscribes when leave
  ionViewDidLeave() {
    this.subscription.unsubscribe()
    this.database.unsubscribe()
  }
}