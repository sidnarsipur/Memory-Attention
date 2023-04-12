import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Riddle } from './trivia.model';
import { Answer } from '../trivia/answer.model';
import { GameService } from '../../shared/game.service';
import { MenuController } from '@ionic/angular';
import { EventemitterService } from '../../shared/eventemitter.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-matrix-reasoning',
  templateUrl: './matrix-reasoning.page.html',
  styleUrls: ['./matrix-reasoning.page.scss'],
})
export class MatrixReasoningPage implements OnInit {
  gameno: number = 9;
  toGet = 0;
  threshold = 200;
  gameHasBegun: boolean = false;
  startButtonIsDisabled = false;
  question: string;
  src: string;
  answer: string;
  level = 1;
  index: number;
  passed = 0;
  num_choices: number;
  picked = false;
  score = 0;
  maxLevel = 10
  multiplier = 20;
  wrongs = 0;
  photoaddress = "../../assets/matrix-reasoning/"
  currentItem: any;
  answerArray: Answer[] = []
  gameOn = false;
  questionNo: number;
  subscription = new Subscription();
  database = new Subscription()
  @Input('excerciseSet') excerciseSet = false;
  @Input('levels') levels;

  constructor(
    private router: Router,
    private menu: MenuController,
    private gameService: GameService,
    private eventemitter: EventemitterService,
    private alertCtrl: AlertController) {}

  ngOnInit() { //Runs on component initilization
    
    this.subscription = this.eventemitter.gameStateSubj.subscribe(value =>{ //Subscribe game state from event emitter
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

      this.database = this.eventemitter.databaseemitter.subscribe(value => { //Subscribe database from event emitter
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

    }}
  
  shuffle(array) { // Shuffle Array
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }    
    return array;
    } 

  onStart(){ //Start game function
    
    this.toGet = this.threshold - this.score
    this.alertCtrl.create({ //Game beginning alert
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

  createGame(){ //Create a new game
    
   this.gameService.matrixreasoning()

   this.questionNo = Math.floor(Math.random() * ((this.level*10) - 1 - ((this.level*10) - 9))) + ((this.level*10) - 9);

   this.database = this.eventemitter.databaseemitter.subscribe(value => {
    if(value.path){
    if (this.passed == 0){
      this.passed++
      this.question = 'L' + this.level + 'Q' + this.questionNo
      this.currentItem = 'L' + this.level + 'Q' + (this.questionNo - (this.level-1)*10) + ".jpg"
      console.log(this.question)
      this.answer = (value.value[this.level]['Q' + this.questionNo]['Answer'])
      console.log(this.answer)
      this.num_choices = (value.value[this.level]['Q' + this.questionNo]['Num_Choices'])

      for(let i = 1; i <= this.num_choices; i++){
        let x = i.toString()
        this.answerArray.push(new Answer(x, 'dark', false))
      }
    }
  }})
  }

  pick(index: number){ //Change button color when picked 
    if (this.picked != true){
    this.picked = true;
    this.answerArray[index].color = "light"
    this.index = index;
  
    for(let x = 0; x<this.num_choices; x++){
      if(x!=index){
        this.answerArray[x].disabled = true
      }
    }
  
    }
    else {
      this.picked = false;
      this.answerArray[index].color = "dark"
  
      for(let x = 0; x<this.num_choices; x++){ 
        this.answerArray[x].disabled = false
    }
  }}

  checker(){ //Check if answer is correct and transition between questions
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
  
    if(this.answerArray[this.index].value == this.answer){ //Check if answer is correct
      this.score+=this.multiplier
      this.toGet = this.threshold - this.score
      let timer = this.gameService.clearTimer()
      this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-this.multiplier , this.level-1)
  
      this.alertCtrl.create({ //Correct answer alert
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
      
      this.alertCtrl.create({ //Wrong answer alert
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

  levelCheck(){ //Transition between levels
    
    if(this.score >= this.threshold){
      if(this.level >= this.maxLevel){
        this.alertCtrl.create({ //Game complete alert 
          header: 'GAME COMPLETE!!',
          message: 'We hope you enjoyed playing Matrix Reasoning. The Game is over. Exiting will reset the game',
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
        
      let timer = this.gameService.clearTimer()
      
      this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-this.multiplier , this.level-1)
      
      this.alertCtrl.create({ //New level alert
      header: 'You have completed the level!',
      message: "",
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

  reset(){ //Reset pick
  this.picked = false
  this.answerArray = []
  this.answer = ""
  //this.round = 0
  this.questionNo = 0
  this.passed = 0
  }

  onRestart(){ //Restart Game
    this.alertCtrl.create({
      header: 'Are you sure you want to restart this level?',
      buttons: [{
        text: 'Restart',
        role: 'Continue',
        handler: () => {
          this.reset()
          this.score = 0
          this.wrongs = 0
          let timer = this.gameService.clearTimer()
          this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer,this.wrongs ,this.score-10 , this.level-1)
          this.createGame()
    
      }}]}).then(alert=> alert.present())
  }

  onResume(){ //Resume game
    this.menu.close('pause')
  }

  onQuit(){
    this.gameOn = false;
    this.router.navigate(['/home'])
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

  ionViewDidLeave() {
    this.subscription.unsubscribe()
  }

}
