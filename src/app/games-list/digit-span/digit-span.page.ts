import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, AnimationController, AlertController } from '@ionic/angular';
import { GameService } from '../../shared/game.service';
import { DigitSpanService } from './digit-span.service';
import { EventemitterService } from '../../shared/eventemitter.service';
import { Subscription } from 'rxjs';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-digit-span',
  templateUrl: './digit-span.page.html',
  styleUrls: ['./digit-span.page.scss'],
  animations: [
    trigger('cardFade', [
      state('bright', style({opacity: 1})),
      transition('* => faded', [animate(900)]),
      transition('* => bright', [animate(500)]),
      state('faded', style({opacity: 0}))
    ])
  ]
})


export class DigitSpanPage implements OnInit, OnDestroy {
  @ViewChild('currentNumber', { read: ElementRef, static: true}) currentNum: ElementRef;
  @Input('excerciseSet') excerciseMode = false;
  @Input('levels') levels;
  numarray = [1,2,3,4,5,6,7,8,9]
  gameHasBegun = false;
  paused = false;
  answer: string = '';
  wrongcount: number = 0;
  wrong = false;
  lost = false;
  currentIndex: number = 0;
  formIsHidden: boolean = false;
  numbersRemembered: number;
  gamename: string;
  correct = false;
  currNum: string;
  gameno = 0;
  startButtonIsDisabled = false;
  subscription = new Subscription();
  database = new Subscription();
  isFaded: string = 'faded';

  constructor(
    private router: Router,
    private menu: MenuController,
    private animationCtrl: AnimationController,
    private gameService: GameService,
    private digitSpanService: DigitSpanService,
    private eventemitter: EventemitterService,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    // Setup for game getting information from gameservice
    this.gamename = this.gameService.getGames()[0].name
    this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    console.log(this.excerciseMode)

    // gets any pre-existing level and score information from database
    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      console.log(value)
      if (value.level) {
        this.digitSpanService.level = value.level
      }
      if (value.score) {
        this.digitSpanService.score = value.score
      }
      if (this.excerciseMode === true) {
        this.digitSpanService.level = this.levels[0]
        this.digitSpanService.score = 0
      }
    })

    // call from the service to animate the number
    this.digitSpanService.animate.subscribe(value => {
      if (value === 'brighten') {
        // this.brighten()
        // setTimeout(() => {
          // this.isFaded = 'bright'
          // console.log('bright') 
          setTimeout(() => {
            this.isFaded = 'faded'
          }, 100)   
    
        // }, 150)
      }
      if (value === 'fade') {
        setTimeout(() => {
          this.isFaded = 'bright'
        }, 1000)
      }
    })

    // for the menu functions from the start component
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

    // emitter that controls when the form with the selecting numbers is displayed or not
    this.digitSpanService.form.subscribe(value => {
      if (value === 'disappear') {
        this.formIsHidden = true
      }
      if (value === 'reappear') {
        this.formIsHidden = false
        this.wrong = false
        this.correct = false
      }
    })

    // Gets the number from the service
    this.digitSpanService.CurrentNumber.subscribe(value => {
      this.currNum = JSON.parse(value)
      setTimeout(() => {
        this.isFaded = 'bright'
      }, 100)   
      setTimeout(() => {
        this.isFaded = 'faded'
      }, 1000)
    })

  }

  // just returns level and score from the service
  getLevelandScore() {
    return [this.digitSpanService.level, this.digitSpanService.score]
  }

  // starts the game when the button is clicked
  onStart() {
    console.log("digitspanstart")
    this.presentAlert()
  }

  // takes the answer and places the next number that is input to the end
  addNum(number: number) {
    this.answer = this.answer + JSON.stringify(number)
  }

  // pauses the game (idk if this works)
  onPause() {
    this.paused = true;
    this.digitSpanService.pause();
  }
  
  // disables the submit button if no answer is there
  disableSubmit() {
    if(this.answer === '') {
      return true
    } else {
      return false
    }
  }

  // removes a number from the answer
  onDelete() {
    this.answer = this.answer.slice(0, this.answer.length - 1)
    //delete
  }

  // resets the answer
  onReset() {
    this.answer = ''
  }

  // starts the game and shows the popup
  presentAlert() {
    let scoreneeded = this.gameService.scoringconstant - this.digitSpanService.score
    this.alertCtrl.create({
      header: 'Level: ' + this.getLevelandScore()[0],
      message: this.digitSpanService.alertmessage + 'You need ' + scoreneeded + ' points to go to the next level.',
      buttons: [{
        text: 'Continue',
        role: 'Continue',
        handler: () => {
          this.digitSpanService.generateNumbers()
          this.gameHasBegun = true;
          this.gameService.startTimer()
      }}]}).then(alert=> alert.present())
  }

  // other type of animation
  // fade(finalopacity: string, startopacity) {
  //   const fade = this.animationCtrl.create()
  //   .addElement(this.currentNum.nativeElement)
  //   .duration(600)
  //   .iterations(1)
  //   .fromTo('opacity', startopacity, finalopacity);
  //   fade.play()
  // }

  // brighten() {
  //   const brighten = this.animationCtrl.create()
  //   .addElement(this.currentNum.nativeElement)
  //   .duration(900)
  //   .iterations(1)
  //   .fromTo('opacity', '0.05', '1');
  //   brighten.play()
  // }

  // generates a random number from 1-9 (legacy)
  // randomNumber() {
  //   let randomnum = Math.floor(Math.random() * 9)
  //   return randomnum
  // }

  // the timer is stopped and the level and score are figured out when the answer is submitted
  onSubmitAnswer() {
    let timer = this.gameService.timer
    let submitanswer = this.digitSpanService.submitAnswer(this.answer)
    this.gameService.clearTimer()
    if (this.excerciseMode === true) {
      this.digitSpanService.level = this.digitSpanService.level + 1
      if (this.digitSpanService.level > this.levels[1]) {
        this.eventemitter.onRoundFinished({continue: true, score: this.digitSpanService.score})
      }
      else {
        this.presentAlert()
      }
    } else {

      this.gameService.storeLevelScore(this.gameno, this.digitSpanService.score, this.digitSpanService.level, this.excerciseMode, timer/1000, submitanswer.wrongs, submitanswer.prevscore, submitanswer.prevlevel)
      this.presentAlert()
    }
    console.log(this.answer)
    this.answer = ''
    // if (submitReturned === true) {
      // this.correct = true;
      // this.wrongcount = 0
      // this.wrong = false
    // } 
    // if (submitReturned === false) {
    //   this.correct = false
    //   this.wrongcount++;
    //   this.wrong = true;
    //   let endgame = this.digitSpanService.checkWrongs(this.wrongcount)
    //   if (endgame) {
    //     console.log(endgame)
    //     this.lost = true
    //     this.numbersRemembered = endgame - 1
    //     this.onEndGame()
    //   }
    // }
  }

  // ends the game
  onEndGame() {
    this.gameHasBegun = false;
    this.correct = false
    this.wrong = false;
    this.wrongcount = 0;
    this.digitSpanService.clearLevels()
  }

  // quits to the home
  onQuit() {
    this.gameHasBegun = false;
    this.digitSpanService.unpause();
    this.paused = false;
    console.log('quit')
    this.onEndGame();
    this.router.navigate(['/home']);
  }

  // restarts the game
  onRestart() {
    setTimeout(() => {
      this.onStart()
      this.startButtonIsDisabled = false
    }, 300)
  }

  // maybe the function is to be added???
  getColor() {
    
  }

  // resumes the game
  onResume() {
    this.paused = false
    this.digitSpanService.unpause();
  }

  // closes the menu in other words it unpauses the game (legacy)
  // onMenuClosed() {
  //     this.paused = false;
  //     this.digitSpanService.unpause();
  // }

  // unsubscribes from subscriptions when the component is destroyed
  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.database.unsubscribe()
    // this.eventemitter.gameState.unsubscribe()
    // this.digitSpanService.animate.unsubscribe()
    // this.digitSpanService.form.unsubscribe()
    // this.digitSpanService.CurrentNumber.unsubscribe()
  }

  // unsubscribes when the user leaves the screen
  ionViewDidLeave() {
    this.subscription.unsubscribe()
    this.database.unsubscribe()
  }
}
