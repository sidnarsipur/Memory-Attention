import { Component, OnInit, Input } from '@angular/core';
import { StroopService } from './stroop-service.service';
import { answerButton } from './answerButton.model'
import { level } from './level.model'
import { AlertController } from '@ionic/angular';
import { EventemitterService } from '../../shared/eventemitter.service'
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { GameService } from '../../shared/game.service';

@Component({
  selector: 'app-stroop-game',
  templateUrl: './stroop-game.page.html',
  styleUrls: ['./stroop-game.page.scss'],
})
export class StroopGamePage implements OnInit {
  database = new Subscription()
  levelArray: level[] = [];
  buttonArray: answerButton[] = [];
  valueArray: string[] ;
  buttonValue: string ;
  colorArray: string[];
  buttonColor: string ;
  question: string ;
  answer: string ;
  currentLevel = 1;
  colorAnswerCount = 0;
  wordAnswerCount = 0;
  levelAnswerCount: number = 0;
  correctCount = 0;
  startSeen = true ;
  roundScore: number = 0;
  toGet: number ;
  cardSeen = false;
  message: string;
  levelDone: boolean ;
  loopCount: number = 0;
  gameno = 7
  startButtonIsDisabled = false
  subscription = new Subscription();
  wrongs = 0;
  currentIndex = 0;
  timeVar;
  gameOn = false;
  constant = 0;
  @Input('excerciseSet') excerciseMode = false;
  @Input('levels') levels;

  ngOnInit() {

    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      if (value.level){
        this.currentLevel = value.level}
      if (value.score){
        this.levelArray[this.currentLevel-1].totalScore = value.score
      }
    })

    this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    this.data.sendlevel.subscribe(level => this.levelArray = level) 
    
   this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
          console.log(value)
          switch (value) {
            case 'start':
              this.onStart()
              break
            case 'restart':
              this.onRestart()
              break
            case 'resume':
              this.onResume()
              break
            case 'quit':
              this.quitGame()
              break
            case 'pause':
              this.onPause()
          }
      })
      
      if (this.excerciseMode) {
        this.currentLevel = this.levels[0]
        this.levelArray[this.currentLevel-1].totalScore = 0
        }
      }

  onStart() {
    this.toGet = this.levelArray[this.currentLevel-1].scoreReq - this.levelArray[this.currentLevel-1].totalScore;
    this.message = "You need" + ' ' + this.toGet + ' ' +  "points to clear the level"

    console.log("stroopstart")
    this.alertCtrl.create({
      header: 'Level: ' + this.currentLevel,
      message: this.message,
      buttons: [{
        text: 'Continue',
        role: 'Continue',
        handler: () => {
          this.createLevel()
      }}]}).then(alert=> alert.present())
  }

  shuffle(array:Array<string>) { // Common shuffle algorithm used online
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }    
  return array;
  } 

  createSecondPool(value:number, arr:string[]){ // For ratios in all questions
    let final: string[] = [] ;

    for(let count = 0; count<arr.length; count++){
      for (let i=1; i<=value; i++){
        final.push(arr[count])
      } 
    }
   return this.shuffle(final) ;
  }

  remove(arr: string[], string:String){
    let final: string[] = arr;

    for(let i = 0; i < final.length; i++){
      if (final[i] == string){
        final.splice(i,1)
      }
    }
    return final
  }

  createPool(arr: string[],answer:string, index: number){ // For ratios in all questions
    let final: string[] = [] ;

    let correctPush = Math.round((this.levelArray[index].ratio / 100) * this.levelArray[index].elementCount)
    let wrongPush = Math.round(((100 - this.levelArray[index].ratio) / 100) * this.levelArray[index].elementCount)

    for(let i = 0; i<=correctPush; i++){
      final.push(answer)
    }

    for(let i = 0; i<=wrongPush / arr.length; i++){
      for (let c = 0; c<arr.length; c++){
        final.push(arr[c])
      }
    }
   return this.shuffle(final) ;
  }

  booleanPool(trueValue: number, falseValue: number){ // For ratios in the box-type questions
    let arr: string[] = [];

    for(let i = 0; i<trueValue; i++){
      arr.push('outline')
    }

    for(let j = 0; j<falseValue; j++){
      arr.push('clear')
    }
    return this.shuffle(arr)
  }

  createLevel(){

      if(this.message == "Game Complete"){
        this.quitGame()
      }

      console.log(this.levelArray[this.currentLevel-1])
      this.startSeen = false;
      this.gameOn = true;

      if(this.levelArray[this.currentLevel-1].type == 1){
        this.createTypeOne();
      }

      if(this.levelArray[this.currentLevel-1].type == 2){
        this.createTypeTwo();
      }}

createTypeOne(){ // Creates question of word type

  console.log(this.constant)

  if (this.loopCount >= this.levelArray[this.currentLevel-1].wordPool.length){
    this.loopCount = 0 }
  this.answer = (this.levelArray[this.currentLevel-1].wordPool[this.loopCount])
  this.loopCount++

  this.valueArray = this.createPool(this.levelArray[this.currentLevel-1].wordPool, this.answer, this.currentLevel-1)
  this.colorArray = this.createSecondPool(this.levelArray[this.currentLevel-1].elementCount, this.levelArray[this.currentLevel-1].colorPool)

  for(let i=0; i<=this.levelArray[this.currentLevel-1].elementCount; i++){
        
    this.buttonValue = this.valueArray[i]
    this.buttonColor = this.colorArray[i]
    
    if(this.buttonColor == null){
      this.buttonColor = this.levelArray[this.currentLevel-1].colorPool[0]
      console.log("ehgiwhpegh")
    }

    this.question = 'Select the words that say' + ' ' + this.answer 

    this.buttonArray.push(new answerButton (this.buttonValue, false, this.buttonColor, 'clear', true))     

    if(this.buttonValue == this.answer){ 
      this.levelAnswerCount++
 }}
this.switchColor(0, 'normal')
this.gameService.startTimer()
}

switchColor(i: number, state: string){

      this.currentIndex = i;
      if (i < this.buttonArray.length){
      this.buttonArray[i].disable = false
    
      this.timeVar = setTimeout(() => {

      this.buttonArray[i].disable = true
      
      if (this.buttonArray[i].clicked == false && this.buttonArray[i].value == this.answer){
        if(i == this.buttonArray.length -1){
          console.log("CHECK CHECK CHECK")
           this.checkAnswer(i, this.buttonArray[i].color, this.buttonArray[i].value, this.buttonArray[i].box)
        }
        this.wrongs++
        this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
        this.levelArray[this.currentLevel-1].totalScore = this.roundScore + this.constant
        this.switchColor(i+1, 'normal')
      }

      if (this.buttonArray[i].clicked == false && this.buttonArray[i].value != this.answer){
        this.switchColor(i+1, 'normal')
      }

      console.log("Changed" + this.buttonArray[i])
    }, 3000)  
  }}

switchColorTwo(i: number, state: string){

  this.currentIndex = i;
  if (i < this.buttonArray.length){

  this.buttonArray[i].disable = false
  
  this.timeVar = setTimeout(() => {

  this.buttonArray[i].disable = true
  
  if (this.buttonArray[i].clicked == false && this.buttonArray[i].color == this.answer){
     if(i == this.buttonArray.length -1){
        console.log("CHECK CHECK CHECK")
         this.checkAnswer(i, this.buttonArray[i].color, this.buttonArray[i].value, this.buttonArray[i].box)
      }
    this.wrongs++
    this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
    this.levelArray[this.currentLevel-1].totalScore = this.roundScore + this.constant
    this.switchColorTwo(i+1, 'normal')
  }

  if (this.buttonArray[i].clicked == false && this.buttonArray[i].color != this.answer){
    this.switchColorTwo(i+1, 'normal')
  }
  this.buttonArray[i].color = "white"
  console.log("Changed" + this.buttonArray[i])
}, 3000)  
}}

createTypeTwo(){ // Creates question of color type
  

  if (this.loopCount >= this.levelArray[this.currentLevel-1].wordPool.length){
    this.loopCount = 0 }
  this.answer = (this.levelArray[this.currentLevel-1].colorPool[this.loopCount])
  this.loopCount++

  this.valueArray = this.createSecondPool(this.levelArray[this.currentLevel-1].elementCount, this.levelArray[this.currentLevel-1].wordPool)
  this.colorArray = this.createPool(this.levelArray[this.currentLevel-1].colorPool, this.answer, this.currentLevel-1)

  for(let i=0; i<=this.levelArray[this.currentLevel-1].elementCount; i++){
        
    this.buttonValue = this.data.random(this.valueArray)
    this.buttonColor = this.data.random(this.colorArray)

    this.question = 'Select the words colored' + ' ' + this.answer

    this.buttonArray.push(new answerButton (this.buttonValue, false, this.buttonColor, 'clear', true))     
    
    if(this.buttonColor == this.answer){ 
      this.levelAnswerCount++
      
  }}
  this.switchColorTwo(0, 'normal')
}


checkAnswer(index, colorValue: string, wordValue: string, boxValue: string){ //Main answer checking function

  clearTimeout(this.timeVar)

  if (this.excerciseMode === true) {
    this.toGet = null
    if (this.currentLevel > this.levels[1]) {
      this.nextRound()
    }
  } else {
    //this.toGet = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1]
  }

  if (this.levelArray[this.currentLevel-1].type == 1){
    if (wordValue == this.answer){
      this.roundScore= this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
      this.levelArray[this.currentLevel-1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs) + this.constant
      this.correctCount++ 
      console.log("Index is " + index)
      //this.buttonArray[index].value="Correct!"
      this.buttonArray[index].color="Black"
      setTimeout(() => {
        //this.buttonArray[index].value=" "
        //this.buttonArray[index].color="White"
      }, 500)
      this.buttonArray[index].disable = true
      this.switchColor(index+1, 'normal')

    }
    else{
      this.wrongs++ ;
      this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
      this.levelArray[this.currentLevel-1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs) + this.constant
      //this.buttonArray[index].value="Wrong!"
      this.buttonArray[index].color="Black"
      setTimeout(() => {
        //this.buttonArray[index].value=" "
        //this.buttonArray[index].color="White"
      }, 500)
      this.buttonArray[index].disable = true
      this.switchColor(index+1, 'normal')
    }
  }

  if (this.levelArray[this.currentLevel-1].type == 2){
  
    if (colorValue == this.answer){
      this.roundScore= this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
      this.levelArray[this.currentLevel-1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs) + this.constant
        this.correctCount++ ;
        console.log("Index is " + index)
        //this.buttonArray[index].value="Correct!"
        this.buttonArray[index].color="Black"
          setTimeout(() => {
       // this.buttonArray[index].value=" "
       // this.buttonArray[index].color="White"
       }, 500)
       this.buttonArray[index].disable = true
      this.switchColorTwo(index+1, 'normal')

    }
    else{
      
      this.wrongs++ ;
      this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
      this.levelArray[this.currentLevel-1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel-1].elementCount, this.wrongs)
     // this.buttonArray[index].value="Wrong!"
      this.buttonArray[index].color="Black"
      setTimeout(() => {
        //this.buttonArray[index].value=" "
       // this.buttonArray[index].color="White"
      }, 500)
      this.buttonArray[index].disable = true
      this.switchColorTwo(index+1, 'normal')
    }
  } 

  if(this.excerciseMode === false && this.correctCount == this.levelAnswerCount && this.levelArray[this.currentLevel-1].totalScore >= this.levelArray[this.currentLevel-1].scoreReq){ 
    if(this.currentLevel >= 10){
      this.message="Game Complete"
      console.log("Game Complete testest")
      this.quitGame()   
      this.resetGame()
    }
    console.log("LEVEL DONE DONE DONE")
    this.levelDone = true;
    setTimeout(() => {
      this.nextLevel() 
    }, 200) 
    this.message = "Level Complete"

  }
  else if (this.correctCount == this.levelAnswerCount){
    
    let timer = this.gameService.clearTimer()
    this.constant+= this.roundScore 
    console.log("ROUND DONE DONE DONE")
    this.gameService.storeLevelScore(this.gameno, this.levelArray[this.currentLevel-1].totalScore, this.currentLevel, this.excerciseMode, timer, this.wrongs, this.constant, this.currentLevel)
    //this.nextRound()
    //this.cardSeen = true;
    this.levelDone = false;
    setTimeout(() => {
      this.nextRound()
    }, 200)  
  }

  if(this.excerciseMode === true){
    this.currentLevel++ 
    if (this.levels[1] > this.currentLevel){
      this.eventemitter.onRoundFinished({continue: true, score: this.levelArray[this.currentLevel-2].totalScore + this.levelArray[this.currentLevel-1].totalScore})
    }
  }

 this.buttonArray[index].color = "white"
  
  this.toGet = this.levelArray[this.currentLevel-1].scoreReq - this.levelArray[this.currentLevel-1].totalScore;
  console.log("Button Color, Value, Fill is" + ' ' + colorValue, wordValue, boxValue)
  console.log("Round Score is" + ' ' + this.roundScore)
  console.log("Total Score is" + ' ' + this.levelArray[this.currentLevel-1].totalScore)

  //this.eventemitter.onSendScore(this.levelArray[this.currentLevel-1].totalScore)
}

card(){ // End of round card

  //this.cardSeen=true
  this.message = "You need" + ' ' + this.toGet + ' ' +  "points to clear the level"

  this.question = '';
  this.buttonArray = [];

  let i = 0

  for (i; i<this.buttonArray.length; i++){
    this.buttonArray[i].clicked=true
  }

  this.onStart()
}

newRound(){ // This is for the menu when restart is clicked so the current round score is erased but the score of the previous rounds remain
  this.valueArray = [];
  this.colorArray = [];
  this.buttonArray = [];
  this.valueArray = []
  this.buttonValue = '';
  this.colorArray = [];
  this.buttonColor = '';
  this.question = '';
  this.answer = '';
  this.colorAnswerCount = 0;
  this.currentIndex = 0;
  this.wordAnswerCount = 0;
  this.levelAnswerCount = 0;
  this.correctCount = 0;
  this.cardSeen=false

  this.levelArray[this.currentLevel-1].totalScore = this.levelArray[this.currentLevel-1].totalScore - this.roundScore
  //this.eventemitter.onSendScore(this.levelArray[this.currentLevel-1].totalScore)
  console.log('New score is' + ' '  + this.levelArray[this.currentLevel-1].totalScore)
  
  //this.createLevel()
  this.onStart()
}

getId(){ // To change level bluriness when card animation plays
  if (this.cardSeen==true){
    return 'roundBlur'
  }
  else {
    return 'round'
  }
}

nextRound(){ // To move on to the next round

  if (this.levelDone == true){
    this.nextLevel()
  }

   const cardPopup = this.animationCtrl.create()
  .addElement(document.querySelector('.card'))
  .duration(250)
  .iterations(1)
  .fromTo('opacity', '1', '0')
  .fromTo('top', '45%', '90%');
  cardPopup.play()

  this.valueArray = [];
  this.colorArray = [];
  this.buttonArray = [];
  this.valueArray = []
  this.buttonValue = '';
  this.colorArray = [];
  this.buttonColor = '';
  this.question = '';
  this.currentIndex = 0;
  this.answer = '';
  this.wrongs = 0
  this.colorAnswerCount = 0;
  this.wordAnswerCount = 0;
  this.levelAnswerCount = 0;
  this.correctCount = 0;
  this.roundScore = 0;
  this.cardSeen=false


  
  //this.createLevel()
  this.onStart()
}

nextLevel(){ // To move on to the next level

  this.question = ' ';

  let i = 0
  for (i; i<this.buttonArray.length; i++){
    this.buttonArray[i].clicked=true
  }

  const cardPopup = this.animationCtrl.create()
  .addElement(document.querySelector('.card'))
  .duration(250)
  .iterations(1)
  .fromTo('opacity', '1', '0')
  .fromTo('top', '45%', '90%');
  cardPopup.play()

  this.valueArray = [];
  this.colorArray = [];
  this.buttonArray = [];
  this.valueArray = []
  this.buttonValue = '';
  this.colorArray = [];
  this.buttonColor = '';
  this.question = '';
  this.answer = '';
  this.loopCount = 0;
  this.currentLevel++ ;
  this.colorAnswerCount = 0;
  this.wordAnswerCount = 0;
  this.levelAnswerCount = 0;
  this.constant = 0
  this.correctCount = 0;
  this.roundScore = 0;
 
  
  this.cardSeen=false

  //this.eventemitter.onSendScore(0)
  console.log('Next level')
  
  let timer = this.gameService.clearTimer()
  console.log("SET SCORE")
  this.gameService.storeLevelScore(this.gameno, this.levelArray[this.currentLevel-1].totalScore, this.currentLevel, this.excerciseMode, timer, this.wrongs, this.constant, this.currentLevel-1)

  //this.createLevel()
  this.onStart()
}

onRestart(){ // If restart in menu is clicked
  clearTimeout(this.timeVar)
  console.log('Game Restarted')

  let i = 0

  for(i; i<this.buttonArray.length;  i++){
    this.buttonArray[i].clicked = false ;
  }

  if(this.levelArray[this.currentLevel-1].type == 1){
    this.switchColor(this.currentIndex, 'normal')
  }

  if(this.levelArray[this.currentLevel-1].type == 2){
    this.switchColorTwo(this.currentIndex, 'normal')
  }

  this.newRound()
}

onResume(){ // If resume in menu is clicked
  
}

onPause(){
  clearTimeout(this.timeVar)
}

quitGame(){ // If quit game in menu is clicked
  this.gameOn = false;
  let timer = this.gameService.clearTimer()
  clearTimeout(this.timeVar)
  this.levelArray[this.currentLevel-1].totalScore = this.levelArray[this.currentLevel-1].totalScore - this.roundScore
  this.gameService.storeLevelScore(this.gameno, this.levelArray[this.currentLevel-1].totalScore, this.currentLevel, this.excerciseMode, timer, this.wrongs, this.constant, this.currentLevel-1)
  this.router.navigate(['/home'])
}

resetGame(){}

endGame(){ 

}

getColor(value: string) { // To get the colors of the buttons
  switch (value){
    case 'Red':
      return '#ff0000'
    case 'Blue':
      return '#0646c7'
    case 'Yellow':
      return '#ebc50c'
    case 'Green':
      return '#19d408'
    case 'Black':
      return '#000000'
    case 'Pink':
      return '#eb0ca8'
    case 'Brown':
      return '#6b2f01'
    case 'White':
      return '#ffffff'

  }}

 getFill(value) { // To get the fill of the buttons 
   switch(value){
     case true:
      return 'outline'
     case false:
      return 'clear'
   }
 }

constructor(
  private data: StroopService, 
  //private menu: MenuController,
  private router: Router,
  private eventemitter: EventemitterService,
  private animationCtrl: AnimationController,
  private gameService: GameService,
  private alertCtrl: AlertController){}

  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe()
  }


}