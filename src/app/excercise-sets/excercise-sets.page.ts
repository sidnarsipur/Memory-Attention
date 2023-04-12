import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Subscription } from 'rxjs';
import { EventemitterService } from '../shared/eventemitter.service';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-excercise-sets',
  templateUrl: './excercise-sets.page.html',
  styleUrls: ['./excercise-sets.page.scss'],
})
export class ExcerciseSetsPage implements OnInit {
  set: number;
  hiddenArray = [true, true, true, true, true, true, true, true, true, true]
  currentIndex = 0
  levels = []
  subscription: Subscription;
  memorizedSubscription: Subscription;
  level = 1
  score = 0
  choices = []
  answers = []
  spclVar;
  aggregatescore = 0
  finalishidden = true
  startScreen = true
  setsHaveStarted = false;


  constructor(
    private activatedroute: ActivatedRoute,
    private gameService: GameService,
    private eventEmitter: EventemitterService
    ) { }

  ngOnInit() {
    // if (localStorage.getItem('setsStarted')) {
    //   this.setsHaveStarted = true
    // } else {
    //   localStorage.setItem('setsStarted', 'exists')
    // }

    // This emitter just gets the choices and correct answers from word to images to transmit to the choosing component.
    this.memorizedSubscription = this.eventEmitter.memorizedItems.subscribe(value => {
      this.choices = value.choices
      this.answers = value.correct
    })

    // This subscription obtans the data about the particular excercise set from the game service and then it adjusts the excercise set based on that
    this.activatedroute.params.subscribe(value => {
      this.set = this.gameService.excerciseSetsDescription[this.gameService.excerciseSets[value.number - 1].type - 1].gameIndexes
      this.levels = this.gameService.excerciseSets[value.number - 1].level
      console.log(this.set)
      let currindex = this.set[this.currentIndex]
      let currnum;
      if (currindex.number) {
        currnum = currindex.number
        this.spclVar = currindex.spclVar
      } else {
        currnum = currindex
      }
      this.hiddenArray[currnum] = false
    })

    // This subscription proceeds to the next game after a game is finished running and it also gets the score and adds it to the total
    this.subscription = this.eventEmitter.RoundFinished.subscribe(value => {
      if (value) {
        if (value.score) {
          this.aggregatescore = this.aggregatescore + value.score
        }
        let currnum = this.set[this.currentIndex]
        if (currnum.number) {
          this.hiddenArray[currnum.number] = true
        } else {
          this.hiddenArray[currnum] = true
        }
        this.currentIndex++
        currnum = this.set[this.currentIndex]
        if (this.hiddenArray[currnum]) {
          if (currnum.number) {
            this.hiddenArray[currnum.number] = false
          } else {
            this.hiddenArray[currnum] = false
          }
        } else {
          this.finalishidden = false
          console.log(this.aggregatescore)
        }
        console.log(this.choices, this.currentIndex, this.set[this.currentIndex], this.hiddenArray)
      }

    })
  }


  // Unsrubscribes from any ongoing subscriptions at the end
  ionViewDidLeave() {
    this.memorizedSubscription.unsubscribe()
    this.subscription.unsubscribe()
  }
}
