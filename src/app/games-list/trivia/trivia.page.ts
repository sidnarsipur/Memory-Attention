import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riddle } from './trivia.model';
import { Answer } from './answer.model';
import { GameService } from '../../shared/game.service';
import { MenuController } from '@ionic/angular';
import { EventemitterService } from '../../shared/eventemitter.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-riddles',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class RiddlesPage implements OnInit {
  typeArray: string[] = ["Arithmetic","GK","Similarity","Vocabulary"]
  riddleArray = []
  answerArray: Answer[] = []
  question: string;
  choices: string[] = [];
  answer: string;
  picked: boolean = false;
  index: number;
  threshold = 200; //Number of points to cross a level
  multiplier = 10; //Number of points each question is worth
  level: number = 1;
  lvl: number;
  maxLevel = 10;
  database = new Subscription()
  gameHasBegun = false;
  gameno: number = 1
  toGet: number;
  wrongs: number = 0;
  score = 0;
  passed = 0;
  gameOn = false;
  startButtonIsDisabled = false;
  subscription = new Subscription();
  @Input('excerciseSet') excerciseSet = false;
  @Input('levels') levels;

  constructor(
    private router: Router,
    private menu: MenuController,
    private gameService: GameService,
    private eventemitter: EventemitterService,
    private alertCtrl: AlertController) {}

  ngOnInit() {
    this.subscription = this.eventemitter.gameStateSubj.subscribe(value =>{
      switch(value){
        case 'start':
          this.onStart()
          console.log('start')
          break
        case 'restart':
          this.onRestart()
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
      }}) 

      this.database = this.eventemitter.databaseemitter.subscribe(value => {
        if (value.level){
          this.level = value.level}
        if (value.score){
          this.score = value.score
        }
      })

   this.gameService.getLevelScore(this.gameno, this.excerciseSet)

   if (this.excerciseSet) {
    this.level = this.levels[0]
    this.score = 0
    }
}

  shuffle(array) { // Common shuffle algorithm used online
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }    
  return array;
  } 

  onStart(){
    this.toGet = this.threshold - this.score
    this.alertCtrl.create({
      header: 'Level: ' + this.level,
      message: 'You need' + ' ' + this.toGet +  ' points to go to the next level',
      buttons: [{
        text: 'Continue',
        role: 'Continue',
        handler: () => {
          this.gameHasBegun = true
          this.gameOn = true
          this.createGame()
      }}]}).then(alert=> alert.present())
  }

  getLevel(no: number){
    if(no % 4 == 0){
      return 3;
    }
    if(no % 4 == 3){
      return 2;
    }
    if(no % 4 == 2){
      return 1;
    }
    if(no % 4 == 1){
      return 0;
    }
  }

  createGame(){
    //let currentLevel = this.level
   // this.lvl = Math.floor(currentLevel /= 100);
    //console.log("The level is", this.lvl)
   // this.round = this.level % 100

   this.lvl = Math.floor(Math.random() * 34) + 1; //Need to add type-based ranges if required

   this.gameService.trivia()

    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      if(value.path){
      if (this.passed == 0){
        this.passed++
        console.log(this.typeArray[this.getLevel(this.level)])
        this.question = (value.value[this.typeArray[this.getLevel(this.level)]]['Q'+ this.lvl]['Question'])
        this.answer = (value.value[this.typeArray[this.getLevel(this.level)]]['Q'+ this.lvl]['Choices']['C1'])
        for(let i = 1; i < 5; i++){
            this.choices.push(value.value[this.typeArray[this.getLevel(this.level)]]['Q'+ this.lvl]['Choices']['C'+ i])
            }
            this.riddleArray.push(new Riddle(this.question, this.choices, this.answer))
            this.createAnswers()
      }
    }})
  }
 
 createAnswers(){
   this.shuffle((this.riddleArray[0].answers))
   for(let x = 0; x < 4; x++){
    this.answerArray.push(new Answer(this.riddleArray[0].answers[x], 'dark', false))
   }
 }

 pick(index: number){
  console.log("Button is picked")
  if (this.picked != true){
  this.picked = true;
  this.answerArray[index].color = "light"
  this.index = index;

  for(let x = 0; x<4; x++){
    if(x!=index){
      this.answerArray[x].disabled = true
    }
  }

  }
  else {
    this.picked = false;
    this.answerArray[index].color = "dark"

    for(let x = 0; x<4; x++){ 
      this.answerArray[x].disabled = false
  }
}}

checker(){
  if (this.excerciseSet === true) {
    this.toGet = null
    if (this.level > this.levels[1]) {
      this.level++
      this.reset()
      this.createGame()
    }
  } else {
    //this.toGet = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1]
  }

  if(this.answerArray[this.index].value == this.riddleArray[0].correct){
    this.score+=this.multiplier
    this.toGet = this.threshold - this.score
    let timer = this.gameService.clearTimer()
    this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-this.multiplier , this.level-1)

    this.alertCtrl.create({
      header: 'Correct!',
      message: 'Your Score is' + ' ' + this.score + " points. You need " + this.toGet + " points to finish the level",
      buttons: [{
        text: 'Next Question',
        role: 'Continue',
        handler: () => {
          this.reset()
          console.log("Next Question")
          this.levelCheck()
      }}]}).then(alert=> alert.present())}
    
  else{
    this.toGet = this.threshold - this.score
    this.alertCtrl.create({
      header: 'Wrong Answer',
      message: 'You need' + ' ' + this.toGet +  ' points to go to the next level',
      buttons: [{
        text: 'Next Question',
        role: 'Continue',
        handler: () => {
          this.reset()
          this.wrongs++
          let timer = this.gameService.clearTimer()
          this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-this.multiplier , this.level-1)
          console.log("Next Question")
          this.levelCheck()
      }}]}).then(alert=> alert.present())
  }
    }

levelCheck(){
  if(this.score >= this.threshold){
    if(this.level >= this.maxLevel){
      this.alertCtrl.create({
        header: 'GAME COMPLETE!!',
        message: 'We hope you enjoyed playing Trivia. The Game is over. Exiting will reset the game',
        buttons: [{
          text: 'Next Question',
          role: 'Continue',
          handler: () => {
            this.level = 1;
            this.score = 0;
            let timer = this.gameService.clearTimer()
            this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-this.multiplier , this.level-1)
            this.onQuit()
            console.log("Game Over")
      
        }}]}).then(alert=> alert.present())
    }
    else{
    this.level++
    this.score = 0
    this.wrongs = 0
    console.log("new type")
    let timer = this.gameService.clearTimer()
    this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-this.multiplier , this.level-1)
     this.alertCtrl.create({
    header: 'You have completed the level!',
    message: 'We are switching to the ' +  this.typeArray[this.lvl+1] + ' type of questions. Best of luck!',
    buttons: [{
      text: 'Next Question',
      role: 'Continue',
      handler: () => {
        console.log("Next Level/Type")
  
    }}]}).then(alert=> alert.present())
  }}
  else{
  }
  this.createGame()
}
  
reset(){
  this.riddleArray = []
  this.picked = false
  this.answerArray = []
  this.choices = []
  this.answer = ""
  //this.round = 0
  this.lvl = 0
  this.passed = 0
}


  onQuit() {
    this.gameOn = false;
    this.router.navigate(['/home'])
  }

  onRevealHint() {
    
  }

  onRestart(){
    this.reset()
    this.score = 0
    this.wrongs = 0
    let timer = this.gameService.clearTimer()
    this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-10 , this.level-1)
    this.createGame()
  }

  onResume() {
    this.menu.close('pause')
  }

  onPause(){
    console.log("paused")

    this.alertCtrl.create({
      header: 'Game is Paused',
      message: 'Hope your liking it!',
      buttons: [{
        text: 'Resume Game',
        role: 'Continue',
        handler: () => {
          console.log("Game Resumed")
    
      }}]}).then(alert=> alert.present())
  }

  ngOnDestroy() {
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe()
  }
}
