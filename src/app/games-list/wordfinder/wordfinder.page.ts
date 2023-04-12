import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventemitterService } from '../../shared/eventemitter.service';
import { Subscription } from 'rxjs';
import { ItemReorderEventDetail } from '@ionic/core'
import randomwords from 'random-words'
// import { readFile } from 'fs-extra'
import { dictionary } from './dictionary'
import { Clipboard } from '@angular/cdk/clipboard';
import { DataService } from 'src/app/shared/data.service';
import { GameService } from 'src/app/shared/game.service';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-wordfinder',
  templateUrl: './wordfinder.page.html',
  styleUrls: ['./wordfinder.page.scss'],
})
export class WordfinderPage implements OnInit, OnDestroy {
  gameHasBegun = false;
  gameno = 8
  q1 = [];
  q2 = [];
  subscription = new Subscription();
  datasubscription = new Subscription();
  word = ["sunday", "lagoon", "fairly", "salmon"]
  wordarray = []
  wording = ""
  wordGot = false; 
  playGame = false;
  ii = 0;
  storing = ""
  x = [];
  currentWordList = []
  coun = 0;
  disabledarray = [];
  minWords = 0;
  level = 1;
  splits;
  datapath = "Wordfinder/words"
  level1 = []
  level2 = []
  level3 = []
  level4 = []
  level5 = []
  correct = []
  incorrect = []
  repeatStop = [];
  scoring = 0;
  newLev = false;
  nevers = false
  isTen = false;
  scoringCap = this.gameService.getScoringConstant();
  correctEmpty = false;
  incorrectEmpty = false;
  prevScore;
  numNeeded;
  prevLevel;
  timer;
  //@Input('excerciseSet') excerciseMode = false;
 
  constructor(
    private eventemitter: EventemitterService,
    private thedictionary: dictionary,
    private alertCtrl: AlertController,
    private clipboard: Clipboard, 
    private gameService: GameService) {
    for (var i = 0; i < 5; i++) {
      this.q1.push("1. <" + i + ">");
      this.q2.push("2. <" + i + ">");
    }
  }

  // need to integrate with excercise sets
  // this method brings all saved data relating to the specific user from the database along with the words for the game
  ngOnInit() {
    //this.getDictionary()
    //this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
      switch (value) {
        case 'start':
          this.onStart()
          break
          case 'restart':
            break
          case 'resume':
            break
          case 'quit':
            break
          case 'pause':
            break
          case 'stop':
            break
      }
    })
    this.gameService.gameinfoget(this.datapath)

    this.gameService.getLevelScore(this.gameno, false)
    this.datasubscription = this.eventemitter.databaseemitter.subscribe(value => {
      if (value.level) {
        this.level = value.level
        this.prevLevel = this.level
        console.log(this.prevLevel + " ------- prevLevel --------")
      }
      if (value.score) {
        this.scoring = value.score
        this.prevScore = this.scoring
        console.log(this.prevScore + " ------- prevScore --------")
      }
      if (value.path === this.datapath) {
        console.log("datapath: ", value.path, this.datapath, value.level, value.score, value.value)
        
        console.log(value.value + " / / // /  /")
        for (let item of value.value) {
          this["level" + item.level.number] = item.level.words
          console.log("database connection works for words")
        }
        console.log(this.level1)
        console.log(this.level2)
        console.log(this.level3)
      }
    })

  }

  copySomething(string) {
    const pending = this.clipboard.beginCopy(string);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
        console.log("attempted")
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }


  // getDictionary() {
  //   // let dictionary = readFile('./dictionary.txt', 'utf8', (err, data) => {
  //   //   console.log(err, data)
  //   // })
  //   // this.copySomething(this.thedictionary.sortA())
  //   //this.thedictionary.checkIfWord('galoon')
  //   // let dictionary = document.getElementById("dictionary").innerText
  //   // console.log(dictionary)
  //   // for (let item of dictionary.split(" ")) {
  //   //   if (item.length > 10) {
  //   //     console.log(item)
  //   //   }
  //   // }
  //   // localStorage.setItem('dictionary', document.getElementById("dictionary").innerText)
  // }

  findPermutations(string) {
    if (string.length < 2 ){
      return [string]
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
      permutationsArray.push(remainingChars)
  
      for (let permutation of this.findPermutations(remainingChars)){
        let charmutation = char + permutation
          permutationsArray.push(charmutation) 
      }
    }
    return permutationsArray
  }


// starts the game and depending on the level sets the minimum number of words for each level
  onStart() {
    this.gameService.startTimer()
    this.correctEmpty = true;
    this.incorrectEmpty = true;
    this.correct = []
    this.incorrect = []
    this.currentWordList = []
    this.newLev = false;
    this.isTen = false;
    this.coun = 0;
    this.currentWordList.length = 0;
    this.wording = ""
    
    switch(this.level)
    {
      case 1: 
      case 2: this.numNeeded = 3;
      break;

      case 3:
      case 4: this.numNeeded = 4;
      break;

      case 5:
      case 6: this.numNeeded = 5;
      break;

      case 7:
      case 8: this.numNeeded = 6;
      break;

      case 9:
      case 10: this.numNeeded = 7;
      break;
    }
    if(this.scoring >= this.scoringCap)
    {
      this.scoring = 0;
      this.level++
    } else {
      console.log("Score is : " + this.scoring)
    }
    this.levelChoose();
    for (let i = 0; i < this.wordarray.length; i++) {
      this.disabledarray.push(false)
    }
    this.gameHasBegun = true
    this.playGame = true;
    this.wordGot = false; 
  }
  // 
  randomPos(word, z, x)
  {
        word = word.toLowerCase()
     this.splits = word.split("")
        let tem = word.split("")[z]
        this.splits[z] = word.split("")[x]
        this.splits[x] = tem
        word = this.splits.join("")
        this.splits = word
   
   console.log(word + " result")
  }
  // Gets a random word for the level
  randTheWord()
  {
    let z1 = Math.floor(Math.random() * (this.level1.length));
    let z2 = Math.floor(Math.random() * (this.level1.length));
    while(z1 == z2)
    {
      z2 = Math.floor(Math.random() * (this.level1.length));
    }
    if(this.level == 1 || this.level == 2)
    {
    this.randomPos(this.level1[this.ii], z1, z2)
    }
    else if(this.level == 3 || this.level == 4)
    {
      this.randomPos(this.level2[this.ii], z1, z2)
    }
    else if(this.level == 5 || this.level == 6)
    {
      this.randomPos(this.level3[this.ii], z1, z2)
    }
    else if(this.level == 7 || this.level == 8)
    {
      this.randomPos(this.level4[this.ii], z1, z2)
    }
    else if(this.level == 9 || this.level == 10)
    {
      this.randomPos(this.level5[this.ii], z1, z2)
    }
    
  }
// chooses the word and splits it into individual letters
  levelChoose()
  {
    if(this.level == 1 || this.level == 2)
    {
      this.ii = Math.floor(Math.random() * (this.level1.length-1));
      console.log(this.ii + " the ii");
      this.wordarray = this.level1[this.ii].split("")
      this.storing = this.level1[this.ii].toLowerCase();
    }
    else if(this.level == 3 || this.level == 4)
    {
      this.ii = Math.floor(Math.random() * (this.level2.length-1));
      console.log(this.ii + " the ii");
    this.wordarray = this.level2[this.ii].split("")
    this.storing = this.level2[this.ii].toLowerCase();
    }
    else if(this.level == 5 || this.level == 6)
    {
      this.ii = Math.floor(Math.random() * (this.level3.length-1));
       console.log(this.ii + " the ii");
    this.wordarray = this.level3[this.ii].split("")
    this.storing = this.level3[this.ii].toLowerCase();
    }
    else if(this.level == 7 || this.level == 8)
    {
      this.ii = Math.floor(Math.random() * (this.level4.length-1));
      console.log(this.ii + " the ii");
    this.wordarray = this.level4[this.ii].split("")
    this.storing = this.level4[this.ii].toLowerCase();
    }
    else if(this.level == 9 || this.level == 10)
    {
      this.ii = Math.floor(Math.random() * (this.level5.length-1));
      console.log(this.ii + " the ii");
    this.wordarray = this.level5[this.ii].split("")
    this.storing = this.level5[this.ii].toLowerCase();
    }
    else if(this.level >= 11)
    {
      console.log("end games is true");
    }
    
  }
  // checks the word inputted my the user
  wordCheck(value, i)
  {
    this.disabledarray[i] = true
    this.wording = this.wording + value;
    this.wording = this.wording.toLowerCase();
    console.log(this.wording + " the word may be forming");
    
  }
// allows the user to input words once the word they are forming meets a length of 3 characters
  resetDisabledArray() {
    for (let i = 0; i < this.disabledarray.length; i++) {
      this.disabledarray[i] = false
    }
    
  }
// if the player inputs the required amount of words for the level it changes the screen and checks if they should go to the next level
  levelCheck(minPoints)
  { 
    if(minPoints == this.minWords)
     {
       this.repeatStop = []
       console.log("U did it Next Level")
       this.minWords = 0;
       this.wordGot = true;
       this.playGame = false
       if(this.scoring >= this.scoringCap)
       {
         this.level++;
         
       }
     }
  
  }
  //Calculates the proper amount of points the player should get for the current round
  points(minPoints)
  {
    console.log("checkingnnnnnnnuuuuytrfdesxcvghjiuytrfedcvbhnjkiytgrfdesxzcv")
    console.log(this.correct.length, "       aggaagagagagagag")
    console.log(minPoints, "       aggaagagagagagag")
    if(this.correct.length == minPoints)
    {
      this.scoring += 50;
    }
    else{
      this.scoring = Math.round(((this.correct.length/minPoints) * 50) + this.scoring)
    }
    if(this.scoring >= this.scoringCap)
    {
      this.newLev = true;
    }
  }
// if the length of a words is less than 3 they cannot submit it as a valid word
  doneDisabled()
  {
    if(this.wording.length < 3)
    {
      return true;
    }
    else{
      return false;
    }
  }
// has the amount of required words that must be input by the user to get the maximum amount of points per level
  textShow()
  {
    if(this.level == 1 || this.level == 2)
    {
      return 3
    }
    else if(this.level == 3 || this.level == 4)
    {
      return 4
    }
    else if(this.level == 5 || this.level == 6)
    {
      return 5
    }
    else if(this.level == 7 || this.level == 8)
    {
      return 6
    }
    else if(this.level == 9 || this.level == 10)
    {
      return 7
    }
  }
// if they finish a level the number for what level they just beat is stored here and pushed to the html to be displayed
  congratsShow()
  {
    if(this.level == 1)
    {
      return 2;
    }
    else if(this.level == 2 )
    {
      return 2
    }
    else if(this.level == 3 )
    {
      return 3;
    }
    else if(this.level == 4 )
    {
      return 4;
    }
    else if(this.level == 5 )
    {
      return 5;
    }
    else if(this.level == 6 )
    {
      return 6;
    }
    else if(this.level == 7 )
    {
      return 7;
    }
    else if(this.level == 8 )
    {
      return 8;
    }
    else if(this.level == 9 )
    {
      return 9;
    }
    else if(this.level == 10)
    {
      return 10;
    }
    else if(this.level >= 11)
    {
      console.log("is ten is true")
      this.isTen = true;
      return "You are Done!"
    }

  }
  // After the player clicks submit testCLick runs and calculates their score, checks if they should increase a level, and prepares the alert box which will display the correct, and incorrect arrays along with the score
  testClick()
  {
    this.prevLevel = this.level
    console.log("Test click")
    this.resetDisabledArray()
       this.repeatStop = []
       console.log("U did it Next Level")
       this.minWords = 0;
       this.playGame = false
       console.log(this.incorrect.length + "<-------- scoring")
       console.log(this.scoring + "<-------- scoring")
       this.prevScore = this.scoring
    this.scoring = this.gameService.getScore(this.numNeeded, (this.numNeeded - (this.correct.length+this.incorrect.length)) + this.incorrect.length) + this.scoring
    console.log(this.scoringCap + " " + this.scoring)
    let pointsneeded = this.scoringCap - this.scoring;
    if(this.scoring >= this.scoringCap)
       {
         this.prevLevel = this.level
         this.level++;
         
       }
    this.timer = this.gameService.clearTimer()
        console.log(this.timer, " <------- Timer")
    console.log("db: ", this.gameno, this.scoring, this.level, false, this.timer/1000, this.incorrect.length, this.prevScore, this.prevLevel);
    this.gameService.storeLevelScore(this.gameno, this.scoring, this.level, false, this.timer/1000, this.incorrect.length, this.prevScore, this.prevLevel)
    const alert = this.alertCtrl.create({
      header: 'Level: ' + this.level,
      message: 'Correct: ' + this.correct + '<br/>' + 'Incorrect: ' + this.incorrect + '<br/>' + ' You need ' + pointsneeded + ' points to go to the next level',
      buttons: [{
        text: 'Continue',
        role: 'Continue',
        handler: () => {
      }
        }]}).then(alert=> alert.present())
        this.onStart();
        
        
  }
// stops the player from inputting the same word given for the round, checks if the word they input is a real word or not, and increments a counter to keep track of how many words the player has made
  check()
  {
    console.log(this.storing, " lololyyeyyyefyfstarbucks>??>")
    if((this.wording == this.storing)){
      console.log("you cant do that")
    }
    else{
    if (!this.repeatStop.includes(this.wording)) {
      this.repeatStop.push(this.wording)
      if(this.thedictionary.checkIfWord(this.wording))
      {
          console.log("ya that stuff")
          this.minWords++;
          console.log(this.minWords + "   This is minWords")
          this.correct.push(this.wording)
          this.correctEmpty = false;
    }
    else{
      this.incorrect.push(this.wording)
      this.incorrectEmpty = false;
    }
  }
}
    
    this.resetDisabledArray()
    this.currentWordList[this.coun] = this.wording;
    this.coun++;
    console.log(this.currentWordList + " this is temp");
      this.wording = ""
      
  }

  // resets the word the player was forming when they click the Redo button
  redoIt()
  {
    this.wording = "";
    console.log("reset the wording");
    this.resetDisabledArray()
  }
// checks if the timer has run out and if it has it forces the player to the next round and scores the player based off of the words they had input
  timeCheck()
  {
    if(this.gameService.timer === 120000)
    {
      this.wordGot = true;
      this.playGame = false
      this.wording = ""
      this.minWords = 0;
    }
  }
  // does what timeCheck does but also returns the time to the gameService
  getTime()
  {
    if(this.gameService.timer === 120000)
    {
      this.wording = ""
      this.wordGot = true;
      this.playGame = false
      this.minWords = 0;
    }
    return this.gameService.timer;
  }
  completeReorder(event: CustomEvent<ItemReorderEventDetail>) {
    event.detail.complete()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.datasubscription.unsubscribe()
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe()
    this.datasubscription.unsubscribe()
  }
}
