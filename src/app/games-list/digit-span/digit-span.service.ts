import { Injectable, EventEmitter } from '@angular/core';
import { GameService } from '../../shared/game.service';

@Injectable({
  providedIn: 'root'
})
export class DigitSpanService {
  numbersArray: number[] = [];
  level: number = 1;
  levelExp: number = 1;
  currentNumber: number;
  paused: boolean = false;
  pausedi: number;
  score: number = 0
  i: number;
  alertmessage: string = "";

  animate = new EventEmitter<string>(); 
  CurrentNumber = new EventEmitter<string>();
  form = new EventEmitter<string>();

  constructor(private gameService: GameService) { }

  // deals with level and score when the answer is submitted
  submitAnswer(answer) {
    // if (+answer === +this.numbersArray.join("")) { 
    //   this.checkLevel()
    //   return true;
    // }
    // else {
    //   this.levelExp = 1
    //   return false;
    // }
    let prevlevel = [this.level].slice(0, 1)
    let answerarray = answer.split("")
    let wrongs = 0
    let i = 0
    console.log(answerarray, answer)
    for (let item of this.numbersArray) {
      if (JSON.stringify(item) !== answerarray[i]) {
        wrongs++
      }
      i++
    }
    let currentscore = this.gameService.getScore(this.numbersArray.length, wrongs)
    this.score = this.score + currentscore
    if (this.score >= this.gameService.scoringconstant) {
      this.level++
      this.score = 0
    }

    if (wrongs > 0) {
      this.alertmessage = "The correct answer was " + this.numbersArray.join("") + ". "
    }
    else {
      this.alertmessage = "Correct! "
    }
    return {wrongs: wrongs, prevscore: currentscore, prevlevel: prevlevel[0]}
  }

  // checkWrongs(wrongcount) {
  //   if (wrongcount === 2) {
  //     return this.level
  //   } else {
  //     this.generateNumbers();
  //   }
  // }

  // clears the levels
  clearLevels() {
    this.level = 1
    this.levelExp = 1
    this.numbersArray = []
  }

  // creates the random numbers
  generateNumbers() {
    this.numbersArray = []
    for (let i = 0; i < this.level + 2; i++) {
      this.numbersArray.push(this.randomNumber())
      if (this.numbersArray[i] === this.numbersArray[i - 1]) {
        this.numbersArray.splice(i)
        i--
      }
    }
    this.form.emit('disappear')
    this.i = 0
    this.runSeries()
  }

  // runs the game it has the info for when to animate, measures for pause, and what happens when the numbers are done
  runSeries() {
    if (this.paused !== true) {
      if (this.i < this.level + 2) {
      // this.animate.emit('fade')
      this.currentNumber = this.numbersArray[this.i]
      this.CurrentNumber.emit(JSON.stringify(this.currentNumber))
      // this.animate.emit('brighten')
      // this.animate.emit('fade')
      setTimeout(() => {
        this.i++  
        this.runSeries()
        return        
      }, 2000)
    } else {
      // this.animate.emit('fade')
      setTimeout(() => {
        this.form.emit('reappear')
      }, 600)
    }
    }
  }

  // creates a random number from 1-9
  randomNumber() {
    let randomnum = Math.floor(Math.random() * 9)
    return randomnum
  }

  // pauses the game
  pause() {
    this.paused = true;
  }

  // unpauses the game
  unpause() {
    this.paused = false;
    this.runSeries()
  }
}

