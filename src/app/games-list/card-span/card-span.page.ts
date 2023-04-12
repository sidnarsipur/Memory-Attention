import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CardSpanService } from './card-span.service';
import { AlertController, AnimationController } from '@ionic/angular';
import { Card } from './card.model';
import { EventemitterService } from '../../shared/eventemitter.service';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { GameService } from '../../shared/game.service';

@Component({
  selector: 'app-card-span',
  templateUrl: './card-span.page.html',
  styleUrls: ['./card-span.page.scss'],
  animations: [
    trigger('cardFade', [
      state('bright', style({opacity: 1})),
      transition('* => faded', [animate(900)]),
      transition('* => bright', [animate(500)]),
      state('faded', style({opacity: 0}))
    ])
  ]
})
export class CardSpanPage implements OnInit, OnDestroy {
@ViewChild('currentNumber', { read: ElementRef, static: true}) currentCardView: ElementRef;
@Input('excerciseSet') excerciseMode = false;
@Input('levels') levels;
opacity: string;
gamename: string;
gameHasBegun = false;
cardsRemembered: number = 0;
cardRoute: string;
correct: boolean = false;
wrong: boolean = false;
formIsHidden: boolean = true;
formSuites: string[] = ["club", "heart", "diamond", "spade"]
selectedCard: string;
cardsArray: Card[];
suiteIsSelected = false;
currentCard: number;
answerCards: Card[] = [];
cardCount: number = 0;
lost: boolean = false;
chipsAreDisabled = false
submitIsTrue = false
cardCountIsHidden = false;
gameno = 2;
startButtonIsDisabled = false;
isFaded: string = 'faded';
subscription = new Subscription();
cardSubscription = new Subscription();
database = new Subscription();

  constructor(
    private router: Router, 
    private cardService: CardSpanService,
    private animationCtrl: AnimationController,
    private eventemitter: EventemitterService,
    private alertCtrl: AlertController,
    private gameService: GameService
    // private renderer: Renderer2
  ) { }

  ngOnInit() {

    // gets a pre-existing level and score if it exists from the database
    let levelscore = this.gameService.getLevelScore(this.gameno,this.excerciseMode)
    this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      if (value.level) {
        this.cardService.level = value.level
      }
      if (value.score) {
        this.cardService.score = value.score
      }
    })

    // gets the call to animate from the service
    this.eventemitter.animate.subscribe(value => {
      if (value === 'brighten') {
        // this.brighten()
        // setTimeout(() => {
          // this.isFaded = 'bright'
          // console.log('bright') 
          setTimeout(() => {
            this.brighten()  
          }, 100)   
    
        // }, 150)
      }
      if (value === 'fade') {
        setTimeout(() => {
          this.fade()
        }, 1000)
      }
    })

    // gets the call to shift to the selecting screen from the service
    this.eventemitter.form.subscribe(value => {
      if (value === 'disappear') {
        this.formIsHidden = true
      }
      if (value === 'reappear') {
        this.formIsHidden = false
        this.gameService.startTimer()
        this.wrong = false
        this.correct = false
      }
    })

    // gets the current card type from the service for example queen of spades
    this.cardSubscription = this.eventemitter.CurrentCardRoute.subscribe(value => {
      console.log(value)
      this.cardRoute = value 
      setTimeout(() => {
        this.fade() 
      }, 300)  
      setTimeout(() => {
        this.brighten()
      }, 1000)
    })

    // gets the different game function calls like start, end game, restart, resume, quit
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
            this.onRestart()
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

    // sets level if it is in excerciseMode (meaning it is part of excercise set)
    if (this.excerciseMode) {
      this.cardService.level = this.levels[0]
      this.cardService.score = 0
    }
  }

  // goes back to home screen
  onQuit() {
    this.gameHasBegun = false;
    this.router.navigate(['/home']);
  }

  // starts the game with the popup
  onStart() {
    console.log("cardspanstart")
    this.alertCtrl.create({
      header: 'Level: ' + this.getLevelandScore()[0],
      message: 'You need ' + (this.gameService.scoringconstant - this.getLevelandScore()[1]) + ' points to go to the next level',
      buttons: [{
        text: 'Continue',
        role: 'Continue',
        handler: () => {
          this.gameHasBegun = true
          this.cardService.generateCards()
          this.lost = false;
          this.cardsRemembered = 0;
          this.cardCountIsHidden = false
      }}]}).then(alert=> alert.present())
  }

  // fade animation
  fade() {
    // this.opacity = 'fade'
    this.isFaded = 'bright'
    // console.log('bright')
    // const fade = this.animationCtrl.create()
    // .addElement(this.currentCardView.nativeElement)
    // .duration(500)
    // .iterations(1)
    // .fromTo('opacity', '1', '0');

    // fade.play()
  }

  // brighten animation
  brighten() {
    this.isFaded = 'faded'
    // console.log('faded')
    // this.opacity = 'bright'
    // const brighten = this.animationCtrl.create()
    // .addElement(this.currentCardView.nativeElement)
    // .duration(900)
    // .iterations(1)
    // .fromTo('opacity', '0', '1');
    // brighten.play()
  }

  // pauses game
  onPause() {
    this.cardService.onPause()
    this.gameService.pauseTimer()
  }

  //resumes game
  onResume() {
    this.cardService.onResume(this.formIsHidden)
    this.gameService.startTimer()
  }

  // when someone selects a suite then it opens up the options for the suite
  onSelectCard(suite) {
    this.selectedCard = suite
    this.suiteIsSelected = true
    this.cardsArray = this.cardService.getCards(suite)
  }

  // when submit is clicked, then the suite near the middle of the screen is reset for the end of the next game
  onResetSuite() {
    this.selectedCard = ''
    this.suiteIsSelected = false
  }

  // legacy code
  // checkIfRow(index, number) {
  //   if (index > number) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // what happens when restart button is clicked
  onRestart() {
    setTimeout(() => {
      this.onStart()
      this.startButtonIsDisabled = false
    }, 300)

  }

  // when the a card is clicked then it is added to the picked cards area
  onChipClicked(suite: string, name: string, imgURL: string) {
    if (this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
      this.answerCards.push(new Card(imgURL, name, suite))
      this.cardCount++
      this.cardCountIsHidden = true
    }
    if (!this.cardService.ChipsSubmit(this.cardCount)) {
      this.answerCards.push(new Card(imgURL, name, suite))
      this.cardCount++
    } 
  }

  // when the submit button is clicked then the data is stored in the data base and the score and excercise mode is checked and based on that the level is increased
  // it also starts a new round
  onSubmit() {
    this.cardRoute = ''
    let timer = this.gameService.clearTimer()
    console.log(timer)
    let formCorrect = this.cardService.submitAnswer(this.answerCards, this.cardCount)
    if (this.excerciseMode !== true) {
      this.gameService.storeLevelScore(this.gameno, this.cardService.score, this.cardService.level, this.excerciseMode, timer/1000, formCorrect.wrongs, formCorrect.prevscore, formCorrect.prevlevel)
    }
    else {
      this.cardService.level++
    }
      this.answerCards = [] 
      this.cardCount = 0
      this.cardsRemembered++
      this.cardCountIsHidden = false
      let scoreneeded;
      if (this.excerciseMode === true) {
        scoreneeded = null
        if (this.cardService.level > this.levels[1]) {
          this.eventemitter.onRoundFinished({continue: true, score: this.cardService.score})
        }
      } else {
        scoreneeded = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1]
      }
      this.alertCtrl.create({
        header: 'Level: ' + this.getLevelandScore()[0],
        message: this.cardService.alertmessage + '\n' + 'You need ' + scoreneeded + ' points to go to the next level',
        buttons: [{
          text: 'Continue',
          role: 'Continue',
          handler: () => {
            this.cardService.generateCards()
        }}]}).then(alert=> alert.present())
      // this.correct = true
  }

  // onPopup() {
  //   this.onPause()
  //   let scoreneeded = 200 - this.cardService.getLevelandScore()[1]
  //   this.alertCtrl.create({
  //     header: 'Level: ' + this.getLevelandScore()[0],
  //     message: 'You need ' + scoreneeded + ' points to go to the next level',
  //     buttons: [{
  //       text: 'Continue',
  //       role: 'Continue',
  //       handler: () => {
  //         this.onResume()
  //     }}]}).then(alert=> alert.present())
  // }

  // the game is ended when the person returns to the home screen
  onEndGame() {
    this.cardService.endGame()
    setTimeout(() => {
      this.answerCards = []
      this.cardCount = 0
      this.formIsHidden = true
      this.gameHasBegun = false
      this.correct = false
      this.wrong = false
      this.suiteIsSelected = false
      this.cardRoute = null
      this.onResetSuite()
    }, 500)

  }

  // returns the color class based on the suite input for the chips
  getColor(suite: string) {
    if (suite === 'club' || suite === 'spade') {
      return 'dark'
    }
    if (suite === 'diamond' || suite === 'heart') {
      return 'danger'
    }
  }

  // when a chip is clicked in the picked chips section then it is deleted from the array
  onDeleteItem(index) {
    this.answerCards.splice(index, 1)
    this.cardCount--
    if (this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
      this.submitIsTrue = false
      this.cardCountIsHidden = false
    }
  }

  // if the number of chips is right then the submit button is enabled or disabled
  submitButton() {
    if (!this.cardService.ChipsSubmit(this.cardCount) || this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
      return true
    } else {
      return false
    }
  }

  getI() {
    return this.cardService.i
  }
  // unsubscribes from subscriptions when the component is destroyed
  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.cardSubscription.unsubscribe()
    // console.log("unsubscribed")
    // this.cardSubscription.unsubscribe()
    // this.eventemitter.form.unsubscribe()
    // this.eventemitter.animate.unsubscribe()
    // this.eventemitter.CurrentCardRoute.unsubscribe()
  }

    // unsubscribes from subscriptions when the component is left 
  ionViewDidLeave() {
    this.subscription.unsubscribe()
    console.log("unsubscribed")
    this.cardSubscription.unsubscribe()
  }

  // gets the level and score from the service 
  getLevelandScore() {
    return this.cardService.getLevelandScore()
  }
}
