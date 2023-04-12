import { Component, Input, OnInit } from '@angular/core';
import { EventemitterService } from 'src/app/shared/eventemitter.service';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-choosing',
  templateUrl: './choosing.component.html',
  styleUrls: ['./choosing.component.scss'],
})
export class ChoosingComponent implements OnInit {
  @Input('choices') choices = []
  @Input('answers') answers = []
  choicesarray = []
  imgmode = false
  numberChecked = 0

  constructor(private gameService: GameService, private eventEmitter: EventemitterService) { }

// This function takes the choices that are given from the excercise sets component and then formats them to
// be displayed as options

  ngOnInit() {
    console.log(this.choices, this.answers)
    for (let choice of this.choices) {
      this.choicesarray.push({name: choice.name, val: choice.val, isChecked: false})
    }
    console.log(this.choices)
    if (this.choicesarray[0].val.includes('.jpeg') === true) {
      this.imgmode = true
    }
  }

  // After the submit button is clicked, this function checks how much is wrong and it determines a score 
  // using the common score formula

  onSubmit() {
    let inputtedanswers = []
    for (let i = 0; i < this.choicesarray.length; i++) {
      if (this.choicesarray[i].isChecked === true) {
        inputtedanswers.push(this.choicesarray[i].name)
      }
    }
    // let incorrect = false
    // if (this.answers.length !== inputtedanswers.length) {
    //   incorrect = true
    // }
    // for (let item of this.answers) {
    //   if (inputtedanswers.includes(item) === false) {
    //     incorrect = true
    //   }
    // }
    let wrongs = 0
    for (let answer of this.answers) {
      wrongs++
      for (let response of inputtedanswers) {
        if (answer === response) {
          wrongs--
        }
      }
    }

    let score = this.gameService.getScore(this.answers.length, wrongs)
    this.eventEmitter.onRoundFinished({continue: true, score: score})
    // if (incorrect === false) {
    //   console.log("WIN")
    // } else {
    //   console.log("INCORRECT", inputtedanswers, this.answers)
    // }
  }

  // When a choice in the html component is clicked, then the checkmark circle is filled up. Which choices are
  // selected are stored in the choicesarray[index].isChecked property and this function alters that property
  // when something is clicked.

  onClick(index) {
    if (this.choicesarray[index].isChecked === true) {
      this.choicesarray[index].isChecked = false
      this.numberChecked-- 
    }
    else if (this.numberChecked < this.answers.length && this.choicesarray[index].isChecked === false) {
      this.numberChecked++
      this.choicesarray[index].isChecked = !this.choicesarray[index].isChecked
    }
  }

  // This function just controls what class is given to the checkmark is the isChecked property is true or false

  getClass(i) {
    if (this.choicesarray[i].isChecked === true) {
      return false
    } 
    if (this.choicesarray[i].isChecked === false) {
      return true
    }
  }

}
