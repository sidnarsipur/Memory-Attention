import { Injectable, EventEmitter } from '@angular/core';
import { Card } from './card.model';
import { EventemitterService } from '../../shared/eventemitter.service';
import { GameService } from '../../shared/game.service';

@Injectable({
  providedIn: 'root'
})
export class CardSpanService {
  cardRoute: string = "../../assets/cards";
  currentCard: string;
  cardsArrayAnswers: Card[] = [];
  cardsArrayDisplayed: string[] = []
  level: number = 1;
  score: number = 0
  paused: boolean = false;
  cards: string[] = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
  pausedi: number;
  i: number;
  alertmessage: string;
  "♦️"


  constructor(
    private eventemitter: EventemitterService,
    private gameService: GameService) { }

  // creates a random card and returns it
  getRandomCard() {
    let randomSuite = Math.floor(Math.random() * 3)
    let randomNumber = Math.floor(Math.random() * 12)
    let cardSuite: string;
    let cardNumber: string;
    switch (randomSuite) {
      case 0:
        cardSuite = "club"
        break
      case 1:
        cardSuite = "diamond"
        break
      case 2: 
        cardSuite = "heart"
        break
      case 3:
        cardSuite = "spade"
        break
    }
    switch (randomNumber) {
      case 0:
        cardNumber = "A"
        break
      default:
        cardNumber = JSON.stringify(randomNumber + 1)
        break
      case 10:
        cardNumber = "J"
        break
      case 11: 
        cardNumber = "Q"
        break
      case 12:
        cardNumber = "K"
        break
    }
    let cardFinalRoute = this.cardRoute + '/' + cardSuite + '/' + cardNumber + '.jpg'
    this.cardsArrayAnswers.push(new Card('/' + cardSuite + '.png', cardNumber, cardSuite))
    this.cardsArrayDisplayed.push(cardFinalRoute)
  }

  // starts the timer and clears the previous array
  generateCards() {
    this.clearCards()
    for (let i = 0; i < this.level + 2; i++) {
      this.getRandomCard()
      if (this.cardsArrayDisplayed[i] === this.cardsArrayDisplayed[i - 1]) {
        this.cardsArrayAnswers.splice(i)
        this.cardsArrayDisplayed.splice(i)
        i--
      }
    }
    this.i = 0
    this.runSeries()
  }

  // starts the series which generates random cards on an interval and tells the component when to animate and when the length is done then it stops
  runSeries() {
    this.eventemitter.onForm('disappear')  
    if (this.paused !== true) {
      if (this.i <= this.level + 1) {
        this.eventemitter.onCurrentCardRoute(this.cardsArrayDisplayed[this.i]) 
          // this.eventemitter.onAnimate('brighten') 
          // this.eventemitter.onAnimate('fade')  
          setTimeout(() => {
            if (this.i <= this.level) {
              this.i++  
              this.runSeries()  
            } else {
              setTimeout(() => {
                this.eventemitter.onAnimate('fade')
                this.eventemitter.onForm('reappear')
              }, 600)
            }
          }, 2000)
      } 
      // else {

      // }
    }
  }

  // formats the card data and gives it to the component
  getCards(suite) {
    let cardsArray: Card[] = []
    for (let card of this.cards) {
      cardsArray.push(new Card( '/' + suite + '.png', card, suite))
    }
    return cardsArray
  }

  // deals with level and score when submit is clicked
  submitAnswer(cardsArray: Card[], cardCount) {
    if (this.level + 2 === cardCount) {
      let wrongs = 0
      let prevscore = this.score
      let prevlevel = this.level
      for (let i = 0; i < this.cardsArrayAnswers.length; i++) {
        if (this.cardsArrayAnswers[i].name !== cardsArray[i].name || this.cardsArrayAnswers[i].suite !== cardsArray[i].suite) {
          console.log(this.cardsArrayAnswers[i], cardsArray[i])    
          wrongs++   
        } 
      }
      let currentscore = this.gameService.getScore(this.cardsArrayAnswers.length, wrongs)
      this.score = this.score + currentscore
      if (this.score >= this.gameService.scoringconstant) {
        this.level++
        this.score = 0
      }
      if (wrongs === 0) {
        this.alertmessage = "Correct!"
      }
      else {
        let alertstring = '';
        for (let item of this.cardsArrayAnswers) {
          let suite = ''
          switch (item.suite) {
            case "club":
              suite = "♣️"
              break
            case "diamond":
              suite = "♦️"
              break
            case "spade":
              suite = "♠️"
              break
            case "heart":
              suite = "♥️"
              break
          }
          alertstring = alertstring + " " + suite + item.name + ","
        }
        this.alertmessage = "The correct answers were:" + alertstring + "."
      }
      return {beginNewRound: true, wrongs: wrongs, prevscore: currentscore, prevlevel: prevlevel}
  }
}

// deals with submit button being disabled and length of the card count
ChipsSubmit(cardCount) {
  if (cardCount === this.level+ 2) {
    return true
  }
  if (cardCount === this.level + 1){
    return 'cardCount'
  } 
}

// clears the cards array
clearCards() {
  this.cardsArrayAnswers = []
  this.cardsArrayDisplayed = []
}


endGame() {
  this.level = 1
  this.clearCards() 
  this.currentCard = ''
}

// pauses the game
onPause() {
  this.paused = true
}

// resumes the game after a pause
onResume(formIsHidden: boolean) {
  this.paused = false
  if (formIsHidden === true) {
    this.runSeries()
  }

}

// passes level and score to the component
getLevelandScore() {
  return [this.level, this.score]
}

}