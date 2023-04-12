import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventemitterService } from '../../shared/eventemitter.service';
import { Levels } from './levels'
import { Level } from './level'
import { GameService } from 'src/app/shared/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.page.html',
  styleUrls: ['./traffic-light.page.scss'],
})
export class TrafficLightPage implements OnInit, OnDestroy {
  gameno = 3
  gameHasBegun = false
  path = "../../assets/traffic-light/"
  colors = ['Green', 'Yellow', 'Red']
  isHidden = false
  possibilities = []
  timer = 0
  current: string;
  red = "#BB1E10"
  yellow = "#FAD201"
  green = "#33A532"
  grey = "#8E9291"
  currentRed = this.grey
  currentYellow = this.grey
  currentGreen = this.grey
  clicked = false;
  round = 1
  interval = 3000
  totallength = 120000
  wrong = 0
  correct = 0
  subscription = new Subscription()
  timerfunc;
  level = 1;
  score = 0;
  colorneeded: any;
  levels: Level[] = Levels
  countdowntimer: any = 4
  instructions = this.levels[this.level - 1].instructions
  countdownTimerIsHidden: boolean = true;
  possibilitiesnumber: number;
  instructionsAreHidden: boolean = true
  doubleupmode = false
  possibilitiesall: String[];
  index: number = 0;
  database = new Subscription()
  startButtonIsDisabled = false
  countdown
  @Input('excerciseSet') excerciseMode = false;
  @Input('levels') exlevels;

  constructor(
    private eventemitter: EventemitterService,
    private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
    // gets preexisting level and score data from database
    this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      if(value.level) {
        this.level = value.level
      }
      if (value.score) {
        this.score = value.score
      }
    })

    // controls the menu functions
    this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
      switch (value) {
        case 'start':
          this.onStart()
          break
        case 'restart':
          this.startButtonIsDisabled = true
          this.onEndGame()
          setTimeout(() => {
            this.onStart()
            this.startButtonIsDisabled = false
          }, 300)
          break
        case 'quit':
          this.onEndGame()
          this.router.navigate(['/home'])
      }
    })

    // what to do if it is an exercise set
    if (this.excerciseMode) {
      this.level = this.exlevels[0]
      this.score = 0
    }

  }

  // ends the game
  onEndGame() {
    this.gameHasBegun = false
    clearInterval(this.timerfunc)
    clearInterval(this.countdown)
  }

  // based on level, it determines the ratio of reds to greens to yellow
  determineRatio() {
    if (this.doubleupmode === true) {
      let colors = this.colors.slice(0, this.colors.length);
      console.log(colors)
      this.colorneeded = [colors.splice(Math.round(Math.random()*(colors.length - 1)), 1)[0], colors.splice(Math.round(Math.random()*(colors.length - 1)), 1)[0]]
      colors = this.colors
      console.log(this.colorneeded)
      switch (this.colorneeded.join(" ")) {
        case "Green Yellow":
          return this.levels[this.level - 1].ratio
          break
        case "Yellow Green":
          return this.levels[this.level - 1].ratio
          break
        case "Green Red":
          return [this.levels[this.level - 1].ratio[2] , this.levels[this.level - 1].ratio[0], this.levels[this.level - 1].ratio[1]]
          break
        case "Red Green":
          return [this.levels[this.level - 1].ratio[2] , this.levels[this.level - 1].ratio[0], this.levels[this.level - 1].ratio[1]]
          break
        case "Red Yellow":
          return [this.levels[this.level - 1].ratio[1], this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0]]
          break
        case "Yellow Red":
          return [this.levels[this.level - 1].ratio[1], this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0]]
          break
      }
    } else {
      this.colorneeded = this.colors[Math.round(Math.random()*(this.colors.length - 1))]
      let dominantcolor = this.colorneeded
      switch (dominantcolor) {
        case "Green":
          return this.levels[this.level - 1].ratio
          break
        case "Yellow":
          return [this.levels[this.level - 1].ratio[2] , this.levels[this.level - 1].ratio[0], this.levels[this.level - 1].ratio[1]]
          break
        case "Red":
          return [this.levels[this.level - 1].ratio[1], this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0]]
          break
      }
    }

  }

  // creates the random array of colors
  generateColors() {
    let ratios = this.determineRatio()
    console.log(this.colorneeded, ratios)
    let greenratio = ratios[0]
    let yellowratio = ratios[1]
    let redratio = ratios[2]
    let totalratio: number = greenratio + yellowratio + redratio
    let possibilitiesarr = []
    let possibilities: number = Math.ceil(this.totallength/this.interval)
    if (this.doubleupmode) {
      possibilities = Math.ceil(this.totallength/(2*this.interval))
    }
    console.log(possibilities)
    let length = possibilities
    this.possibilitiesnumber = possibilities
    //gets total number of reds yellows and greens    
    let yellowpossibilities = Math.floor(possibilities*(yellowratio/totalratio))
    let greenpossibilities = Math.floor(possibilities*(greenratio/totalratio))
    let redpossibilities = Math.floor(possibilities*(redratio/totalratio))
    //randomly assigns leftovers to red green or yellow
    let leftovers = possibilities - (yellowpossibilities + greenpossibilities + redpossibilities) 
    if (leftovers > 0) {
      for (let i = 0; i < leftovers; i++) {
        let randnum = Math.round(Math.random()*2)
        switch (randnum) {
          case 0:
            greenpossibilities++
            break
          case 1:
            yellowpossibilities++
            break
          case 2: 
            redpossibilities++
        }
      }
    }
    console.log(yellowpossibilities, greenpossibilities, redpossibilities)
    let greenyellow;
    let greenred;
    let redyellow;
    if (this.doubleupmode === true) {
      greenyellow = Math.round(greenpossibilities/2)
      greenred = Math.round(yellowpossibilities/2)
      redyellow = Math.round(redpossibilities/2)
    }
    //randomly asigns red, green and yellow to different positions in an array
    for (let i = 0; i < length; i++) {
      let current: any = ""
      let randnum = Math.round(Math.random()*(possibilities-1))
      if (randnum < greenpossibilities) {
        if (this.doubleupmode === true) {
          let randnum = Math.round(Math.random()*greenpossibilities) + 1
          if (randnum > greenyellow) {
            current = ["Yellow", "Green"]
          } else {
            current = ["Green", "Yellow"]
            greenyellow--
          }
        } else {
          current = "Green"
        }
        greenpossibilities--
      } else if (randnum < yellowpossibilities + greenpossibilities) {
        if (this.doubleupmode === true) {
          let randnum = Math.round(Math.random()*greenpossibilities) + 1
          if (randnum > greenred) {
            current = ["Red", "Green"]
          } else {
            current = ["Green", "Red"]
            greenred--
          }
        } else {
          current = "Yellow"
        }
        yellowpossibilities--
      } else if (randnum < possibilities) {
        if (this.doubleupmode === true) {
          let randnum = Math.round(Math.random()*greenpossibilities)
          if (randnum > redyellow) {
            current = ["Red", "Yellow"]
          } else {
            current = ["Yellow", "Red"]
            redyellow--
          }
        } else {
        current = "Red"
        }
        redpossibilities--
      }
      possibilities--
      if (this.doubleupmode) {
        for (let item of current) {
          possibilitiesarr.push(item)
        }
        this.possibilitiesall = possibilitiesarr.slice(0, possibilitiesarr.length)
      } else {
        possibilitiesarr.push(current)
      }      
    }
    console.log(possibilitiesarr)
    this.possibilities = possibilitiesarr
  }

  // creates a random color
  getRandomColor() {
    console.log(this.possibilities)
    this.index++
    this.current = this.possibilities.splice(0, 1)[0]

    switch (this.current) {
      case 'Green' :
        this.currentGreen = this.green
        break
      case 'Yellow':
        this.currentYellow = this.yellow
        break
      case 'Red': 
        this.currentRed = this.red
        break
    }

  }

  // starts the game and controls the intervals that lights are displayed
  onStart() {
    if (this.levels[this.level - 1].mode === "double-up") {
      this.doubleupmode = true

    } else {
      this.doubleupmode = false
    }
    this.interval = this.levels[this.level - 1].interval
    this.totallength = this.levels[this.level - 1].totallength
    this.generateColors() 
    this.gameHasBegun = true
    this.countdownTimerIsHidden = false
    this.instructionsAreHidden = false
    this.countdown = setInterval(() => {
      if (this.instructionsAreHidden === false) {
        this.instructionsAreHidden = true
      }
      this.countdowntimer--
      if (this.countdowntimer === 0) {
        this.countdowntimer = "Go!"
      }
    }, 1000)
    setTimeout(() => {
      clearInterval(this.countdown)
      this.countdownTimerIsHidden = true

      this.timerfunc = setInterval(() => {
        this.timer = this.timer + this.interval
        console.log(this.timer)
        if (this.timer > this.totallength) {
          clearInterval(this.timerfunc)
          console.log(this.correct, this.wrong)
          this.endRound()
        }
        this.getRandomColor()
        setTimeout(() => {
          this.resetMatch()
        },this.interval/2)
      }, this.interval)
    }, 4900)

  }

  // checks if the light is clicked when its supposed to or is clicked when its not suppossed to be clicked and records that
  checkIfClicked() {
    if (this.clicked === false) {
      if (this.doubleupmode === true) {
        let array = [this.possibilitiesall[this.index - 2], this.current]
        console.log(array, this.colorneeded)
        if (array[0] === this.colorneeded[0] && array[1] === this.colorneeded[1]) {
          console.log('incorrect, not clicked')
          this.wrong++
        }
      } else {
        if (this.current === this.colorneeded) {
          console.log('incorrect, not clicked')
          this.wrong++
        }
      }
    }
  }

  // ends the round and figures out the score and the levels
  endRound() {
    //score and levels here
    this.index = 0
    this.timer = 0
    this.countdowntimer = 4
    let currentscore = this.gameService.getScore(this.possibilitiesnumber, Math.round(this.wrong*1.5))
    this.score = this.score + currentscore
    if (this.excerciseMode) {

      if (this.level === this.exlevels[1]) {
        this.eventemitter.onRoundFinished({continue: true, score: this.score})
      }
      this.level++
    } else {


      let prevlevel = [this.level].slice(0,1)
      console.log(this.score)
      if (this.score > this.gameService.scoringconstant) {
        this.level++
        this.score = 0
      }
      this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseMode, 120, this.wrong, currentscore, prevlevel[0])
    }
    this.onStart()
  }

  // resets the game to begin the next round
  resetMatch() {
    this.round++
    console.log(this.round)
    this.checkIfClicked()
    this.current = ""
    this.resetColor()
    this.clicked = false
  }

  // turns all colors back to grey
  resetColor() {
    this.currentGreen = this.grey
    this.currentRed = this.grey
    this.currentYellow = this.grey
  }

  // what happens when something is clicked
  onTap(color: string) {
    if (this.clicked === false) {
    if (this.doubleupmode === true) {
      switch (color) {
        case this.colorneeded[1]:
          if (color === this.current) {
            let previous = this.possibilitiesall[this.index - 2]
            if (previous === this.colorneeded[0]) {
              this.correct++
              console.log('correct')
            } else {
              this.wrong++
            }
          } else {
            this.wrong++
          }
          break
        case "":
          console.log('greyclicked')
          break
        default:
          console.log('incorrect', this.current)
          this.wrong++
      }
    } else {
      switch (color) {
        case this.colorneeded:
          if (color === this.current) {
            console.log('correct')
            this.correct++
          } else {
            this.wrong++
          }
          this.current = ""
          break
        case "":
          console.log('greyclicked')
          break
        default:
          console.log('incorrect', this.current)
          this.wrong++
      }
    }
    this.resetColor()
    }
    this.clicked = true
  }

  // unsubscribes and clears the timer when the component is left
  ionViewDidLeave() {
    this.subscription.unsubscribe()
    clearInterval(this.timerfunc)
  }

  // unsubscribes and clears the timer when the component is destroyed
  ngOnDestroy() {
    this.subscription.unsubscribe()
    clearInterval(this.timerfunc)
  }
}
