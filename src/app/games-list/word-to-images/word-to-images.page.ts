import { Component, NgModule, OnInit, OnDestroy, Input } from '@angular/core';
// import { AppComponent } from '../app.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import {trigger, state, style, animate, transition} from '@angular/animations'
import { EventemitterService } from '../../shared/eventemitter.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/shared/game.service';
// import { AngularDelegate } from '@ionic/angular';
// import { Injectable, EventEmitter } from '@angular/core';
// import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-word-to-images',
  templateUrl: './word-to-images.page.html',
  styleUrls: ['./word-to-images.page.scss'],
  animations: [
    trigger('anime', [
      state('bright', style({opacity: 1})),
      transition('* => faded', [animate(500)]),
      transition('* => bright', [animate(500)]),
      state('faded', style({opacity: 0}))
    ])
  ]
})
export class WordToImagesPage implements OnInit, OnDestroy {
  @Input('excerciseSet') excerciseMode = false;
  @Input('spclVar') spclVar;
  @Input('levels') levels;
  ImagePath: string; 
  currentArray: string[];
  choosingArray: any[] = [];
  animals: any[] = [];
  fullanimal: any[] = ["bird","bear","snake","frog","deer","dolphin","tiger", "lion", "cat", "leopard", "dog", "turtle"];
  animalImage: any[] = ["https://ibb.co/3rhRHMq"];
  emptyArr: any[] = [];
  gameHasBegun = false;
  formsIsHidden = false; 
  realGameStart = false;
  winScreen = false;
  loseScreen  = false;
  memorize = "memorize these words";
  checked: boolean = false;
  chosenArray = [];
  isDisabled: boolean = false;
  areSelected: any = false;
  i: any = 0;
  copyArray: any[] = [];
  spliced12: any[] = ["a", "b","c"];
  counter: 0;
  value_1:any;
  value_2:any;
  value_3:any;
  value_4:any;
  value_5:any;
  level = 1;
  aniList: string[] = [];
  aniList1: string[] = [];
  aniList2: string[] = [];
  randImage: any[];
  anime: string = "faded";
  currentItem: any;
  imgToWord: boolean = true;
  randy: number = 0;
  image_first: boolean = true;
  image_last: boolean = true;
  toggle = true;
  status = 'Enable'; 
  answer1: string = "";
  extraArray: string[] = [];
  indexAnim: number= 0;
  currWord: any;
  wordArray: any[] = [];
  arr: any[] = [];
  asdf:any[] = [];
  scoring:number = 0;
  timeconstant = 2000;
  prevLevel;
  prevScore;
  // arrgs = [
  //   { name: "birds",val: 'birds',vals: '0.jpg', isChecked: false },
  //   { name: "bear",val: 'bear',vals: '1.jpg', isChecked: false },
  //   { name: "cow",val: 'cow',vals: '2.jpg', isChecked: false },
  //   { name: "frog",val: 'frog',vals: '3.jpg', isChecked: false },
  //   { name: "deer",val: 'deer',vals: '4.jpg', isChecked: false },
  //   { name: "dolphin",val: 'dolphin',vals: '5.jpg', isChecked: false },
  //   { name: "tiger",val: 'tiger',vals: '6.jpg', isChecked: false },
  //   { name: "lion",val: 'lion',vals: '7.jpg', isChecked: false }, 
  //   { name: "cat",val: 'cat',vals: '8.jpg', isChecked: false },
  //   { name: "leopard",val: 'leopard',vals: '9.jpg', isChecked: false },
  //   { name: "dog",val: 'dog',vals: '10.jpg', isChecked: false },
  //   { name: "turtle",val: 'turtle',vals: '11.jpg', isChecked: false }
  // ];
  photoaddress = "../assets/word-to-images/"
  gameno = 6
  subscription = new Subscription();
  database = new Subscription();
  numberChecked = 0
  gameIsPlayed = false
  ctr = 0
  scoringCap = this.gameService.getScoringConstant();
  datapath = "WordtoImages/words"
  tests1 = []
  jpe = ".jpeg"
  categoryname = "Animals"
  categoriesandpaths;
  // paths = "gs://memoryattention-1.appspot.com/WordToImages/Animals/Ant.jpeg"

  constructor(
    private eventemitter: EventemitterService, 
    private router: Router,
    private gameService: GameService) { }

  ngOnInit() {
    this.gameService.gameinfoget(this.datapath)
    this.gameService.getLevelScore(this.gameno, this.excerciseMode)
    this.database = this.eventemitter.databaseemitter.subscribe(value => {
      console.log(value)
      console.log("value level and score    " + value.level + "        " + value.score)
      if (!this.excerciseMode) {
        if (value.level) {
          this.level = value.level
          this.prevLevel = this.level
          console.log("Level:" , this.level)
        }
        if (value.score) {
          this.scoring = value.score
          this.prevScore = this.scoring
          console.log("Score:" , this.scoring)
        }
      }
      if (this.excerciseMode) {
        this.level = this.levels[this.spclVar]
        console.log(this.levels, this.level)
      }



      if (value.value) {
        this.categoriesandpaths = value.value
        console.log(this.categoriesandpaths)
        // switch(this.level) {
        //   case 1:
        //     if (value.value.Animals){
        //     console.log(value.value.Animals)
        //     this.tests1 = Object.values(value.value.Animals)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //     }
        //     break;
        //   case 2: 
        //     if(value.value.Clothing){
        //       console.log(value.value.Clothing)
        //       this.tests1 = Object.values(value.value.Clothing)
        //       console.log(this.tests1, " <--------- test if database got stuff")
        //     }
        //     break;
        //   case 3: 
        //     if(value.value.Colors){
        //       console.log(value.value.Colors)
        //       this.tests1 = Object.values(value.value.Colors)
        //       console.log(this.tests1, " <--------- test if database got stuff")
        //     }
        //   break;
        //   case 4: if(value.value.Emotions){
        //     console.log(value.value.Emotions)
        //     this.tests1 = Object.values(value.value.Emotions)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //   }
        //   break;
        //   case 5: if(value.value.Flowers){
        //     console.log(value.value.Flowers)
        //     this.tests1 = Object.values(value.value.Flowers)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //   }
        //   break;
        //   case 6: if(value.value.Fruits){
        //     console.log(value.value.Fruits)
        //     this.tests1 = Object.values(value.value.Fruits)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //   }
        //   break;
        //   case 7: if(value.value.Grocery){
        //     console.log(value.value.Grocery)
        //     this.tests1 = Object.values(value.value.Grocery)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //   }
        //   break;
        //   //Case 8 needs to have an underscore in the database so it will work
        //   case 8: if(value.value.Household_Items){
        //     console.log(value.value.Household_Items)
        //     this.tests1 = Object.values(value.value.Household_Items)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //   }
        //   break;
        //   case 9: if(value.value.Parts_of_Body){
        //     console.log(value.value.Parts_of_Body)
        //     this.tests1 = Object.values(value.value.Parts_of_Body)
        //     console.log(this.tests1, " <--------- test if database got stuff")
        //   }
        //   break;
        // }
      } 
    })
    this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
      console.log(value)
      switch (value) {
        case 'start': 
          this.buttonClick()
          break
        case 'restart':
          break
        case 'resume':
          break
        case 'quit':
          this.router.navigate(['/home'])
          break
        case 'pause':
          break
      //   case 'stop':
      //     this.onEndGame()
      //     break
      }
    })


  }


  enableDisableRule(job) {
    this.toggle = !this.toggle;
    //this.status = this.toggle ? 'Enable ' : 'Disable ';
    this.status = this.toggle ? 'green ' : 'red ';
  }

  testClick()
  {
    console.log("Testing the Click");
  }

  func(a, b) {  
    return 0.64 - Math.random();
  }  

  random_Images(){
    let arr = [];
    while(arr.length < 8){
      let r = Math.floor(Math.random() * 12);
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    return arr;
  }

  changeImgToWord()
  {
    if(this.imgToWord == true)
    {
      this.imgToWord = false;
      console.log("shows words then choose the image");
    }
    else
    {
      this.imgToWord = true;
      console.log("shows images then choose the words");
    }
  }

  randomForImageToWord()
  {
    console.log("this is randy - " + this.randy);
    this.randy = Math.floor(Math.random() * (5-1) + 1);
    if (this.excerciseMode) {
      this.randy = (this.levels[this.spclVar] + 3) % 4 + 1
    }
    console.log("this is randy - " + this.randy);
    switch (this.randy) {
      case 1:
        this.image_first = true;
        this.image_last = false;
        break
      case 2:
        this.image_first = false;
        this.image_last = true;
        break
      case 3:
        this.image_first = false;
        this.image_last = false;
        break
      case 4:
        this.image_first = true;
        this.image_last = true;
        break
    }
    console.log(this.imgToWord+ "    the IMg to word is      this is randy - " + this.randy);

  //   if(this.randy == 1)
  //   {
  //     //this.imgToWord = true;
  //     this.image_first = true;
  //     this.image_last = false;
      
  //   }
  //   else if(this.randy == 2){
  //     //this.imgToWord = false;
  //     this.image_first = false;
  //     this.image_last = true;
      
  //   }
  //   else if(this.randy == 3){
  //     //this.imgToWord = false;
  //     this.image_first = true;
  //     this.image_last = true;
      
  //   }
  //   else {
  //     //this.imgToWord = false;
  //     this.image_first = false;
  //     this.image_last = false;
  //     console.log(this.imgToWord+ "    the IMg to word is      this is randy - " + this.randy);
  //   }
  }

  clearAnimals(){
    this.animals = [];
  }

  clearRandomDisplayWords(){
    this.choosingArray = [];
    this.choosingArray.length = 0;
    this.choosingArray.splice(0,this.choosingArray.length);
  }

  clearaniList(){
    this.aniList = [];
    this.aniList.length = 0;
    this.aniList.splice(0,this.aniList.length);
  }

  buttonClick()
  {
    this.categoryname = ""
    let categories = []
    for (let item in this.categoriesandpaths) {
      categories.push(item)
    }
    console.log(categories)
    this.categoryname = categories[Math.round(Math.random()*categories.length) - 1]
    this.tests1 = this.categoriesandpaths[this.categoryname]
    this.categoryname = this.categoryname.split(" ").join("_")

    console.log(this.tests1)
    this.numberChecked = 0

    this.realGameStart = false;
    
   if(this.ctr > 0)
   {
    // console.log("THE WOOOORD")
    // if(this.level >= 1 && this.level < 2) 
    // {
      console.log("Not a whole number to stay the same");
      this.gameHasBegun = true;
      this.loseScreen = false;
      this.winScreen = false;
      this.formsIsHidden = true;
      this.realGameStart = true;
      if(this.randy === 1 || this.randy === 2 || this.randy === 3|| this.randy === 4)
      {
        this.formsIsHidden = false;
        if(this.randy === 1 || this.randy === 3)
        {
          this.runSeries(0);
        }
        else
        {
          this.runSeriesWord(0)
        }
        setTimeout(() => {
          this.formsIsHidden = true;
          console.log("forms is hidden = false")
        }, this.timeconstant*(this.level + 2));
        
      }
    }
    else {
    console.log("BUSSSSSSSSS")
      this.clearaniList();
      this.clearAnimals();
      this.clearRandomDisplayWords();

      this.animals = [];
      this.animals.length = 0;
      this.animals.splice(0,this.animals.length);
      this.arr = [];
      this.aniList = [];
      this.randImage = [];
      this.gameHasBegun = true;
      this.loseScreen = false;
      this.winScreen = false; 
      this.randomForImageToWord();
      // if(this.level === 1)
      // {
      if (this.level > 1) {
        this.animals = [];
        this.animals.length = 0;
        this.animals.splice(0,this.animals.length);
      }
      this.answerCreation()
      setTimeout(() => {
      console.log(this.aniList + "  <---- anilist array");
      console.log(this.animals + "  <---- animals array");
      
      this.formsIsHidden = true;
      }, this.timeconstant*(this.level + 2));
      this.realGameStart = true;
      console.log(this.arr + "<--- arr array")
    }
  }  

 answerCreation() {
  console.log("level is equal to 1")
  console.log(this.tests1.length + " length")
  console.log(this.tests1 + " tests1")
  let displayimglength = this.level*2 + 4
  if (displayimglength > this.tests1.length) {
    displayimglength = this.tests1.length
  }
  console.log(displayimglength)
  let displayImg:any[] = this.createValues(displayimglength, this.tests1.length);
  this.asdf = this.createValues(this.level + 2, displayimglength);
  // let displayImg:any[] = this.createValues(this.level*2 + 4, this.tests1.length);
  // this.asdf = this.createValues(this.level + 2, this.tests1.length);
  for(let item of this.asdf)
  {
    this.arr.push(this.tests1[displayImg[item]])
    //console.log(this.arr.push(this.arrgs[displayImg[item]]))
  }
  for(let i = 0; i < displayImg.length;i++)
  {
    displayImg[i] = this.tests1[displayImg[i]]
    //console.log(this.arrgs[displayImg[i]])
  }
  for (let index = 0; index < displayImg.length; index++) {
    const element = displayImg[index];
    this.choosingArray.push({name: element, isChecked: false})
    
  }
  this.randImage = this.arr;
  // this.choosingArray = displayImg
  console.log(displayImg, "  displayimg")
  console.log(this.arr + "<-- arr")
  console.log(this.choosingArray )

  console.log("value 1 be " + this.tests1[this.asdf[0]], "  " + this.asdf[0]);
  console.log("value 2 be " + this.tests1[this.asdf[1]], "  " + this.asdf[1]);
  console.log("value 3 be " + this.tests1[this.asdf[2]], "  " + this.asdf[2]);   
  for(let i = 0; i < this.arr.length; i++)
  {
    this.animals.push(this.arr[i])
    //console.log(this.arr[i].name)
  }
  for(let i = 0; i < this.arr.length; i++)
  {
    this.aniList.push(this.arr[i])
    //console.log( this.aniList.push(this.arr[i].name))
  }
  console.log("Animals is "+ this.animals);
  console.log(this.randImage)
  if(this.randy === 1 || this.randy === 3)
  {
    this.runSeries(0);
  }
  else
  {
    this.runSeriesWord(0)
  }
}

  getClass(i) {
    if (this.choosingArray[i].isChecked === true) {
      return false
    } 
    if (this.choosingArray[i].isChecked === false) {
      return true
    }
  }

  onClick(index) {
    if (this.choosingArray[index].isChecked === true) {
      this.choosingArray[index].isChecked = false
      this.numberChecked-- 
    }
    else if (this.numberChecked < this.level + 2 && this.choosingArray[index].isChecked === false) {
      this.numberChecked++
      this.choosingArray[index].isChecked = !this.choosingArray[index].isChecked
    }
  }

  createValues(numberofvalues, totalposs) {
    let possibilities: number[] = []
    let values: number[] = []
    for (let i = 0; i < totalposs; i++) {
      possibilities.push(i)
    }
    for (let i = 0; i < numberofvalues; i++) {
      let value = Math.floor(Math.random()*possibilities.length)
      values.push(possibilities[value])
      possibilities.splice(value, 1)
    }
    console.log(values)
    return values
  }

  runSeries(i) {
    console.log(this.aniList)
    // this.seriesRun(i, this.aniList, 1900 - 400*(this.level - 1))
    this.seriesRun(i, this.aniList, this.timeconstant)
  }

  runSeriesWord(i) {
    // this.seriesRun(i, this.animals, 1900 - 400*(this.level - 1))
    this.seriesRun(i, this.animals, this.timeconstant)
  }

  seriesRun(i, array, time) {
    console.log(this.currentItem)
    if (i < array.length) {
      console.log(i)
      this.currentItem = array[i];
      console.log(this.currentItem)
      setTimeout(() => {
        this.anime = "brighten";
      }, 100);
      setTimeout(() => {
        this.anime = "faded";
      }, 1000)
      setTimeout(() => {
        i++
        this.seriesRun(i, array, time)
      }, time);
    } 
  }

 
  
  
  startGame()
  {
    this.loseScreen = false;
    this.winScreen = false;
    //var s = this.arrgs.sort(this.func); 
    //var szz = this.imgzz.sort(this.func); 
    this.gameHasBegun = true;
    this.currentArray = this.animals;
    this.memorize;

    setTimeout(() => {
     this.currentArray = this.emptyArr;  
     //this.choosingArray = s; 
     console.log(this.choosingArray + "  <---- choosing array");
     //this.randImage = szz;
     this.formsIsHidden = true;
      }, 3000);
    this.realGameStart = true;
    
  }

  countInArray(array, what) 
  {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
  }

  onlyUnique(valuex, index, self) { 
    return self.indexOf(valuex) === index;
  }

  sign()
  {
    this.chosenArray = [];
    this.chosenArray.length = 0;
    this.chosenArray.splice(0,this.chosenArray.length);
    console.log(this.asdf.length + "<-- asdf length ")
    let counter = 0;
    console.log(this.chosenArray.length + " <---length is    counter is---->" + counter)
    for(let i = 0; i<this.choosingArray.length; i++) 
    {
      if(this.choosingArray[i].isChecked === true)
      {
        this.chosenArray.push(this.choosingArray[i])
      }
    } 
  
    console.log(this.chosenArray + " is chosen array")
    // if(this.asdf.length != this.chosenArray.length)
    // {
    //   this.areSelected = false;
    //   console.log("the asdf length is not equal to chosen array length")
    //   console.log("You Lost")
    //   this.formsIsHidden = false;
    //   this.loseScreen = true;
    //   this.level = 1;
    //   this.animals = []
    //   this.aniList = []
    //   this.scoring = 0;
    //   return
    // }
    let wrongs = 0
    wrongs = this.determineWrongs()
    console.log(wrongs)
    let currentscore = 0
    if (!this.excerciseMode) {
      currentscore = this.gameService.getScore(this.level + 2, wrongs)
      this.scoring = this.scoring + currentscore
      console.log("score --->" + this.scoring)
      if(this.scoring >= this.scoringCap)
      {
        this.scoring = 0
        this.level++;
      }
        this.gameService.storeLevelScore(this.gameno, this.scoring, this.level, this.excerciseMode)
    }
    console.log(this.gameService.getScore(this.animals, wrongs) + " < -------- --- --- -- --")

    wrongs = 0
    // for(let i = 0; i < this.chosenArray.length; i++)
    // {
    //   if(this.chosenArray.includes(this.arr[i].name))
    //   {
    //     counter++
    //     console.log(counter)
    //     // console.log(this.chosenArray.length + " <---length is    counter is---->" + counter)
    //     if(counter = this.chosenArray.length)
    //     {
    //       this.areSelected = true;
    //       this.scoring = this.scoring + 33.33333333333333333333333333333333333333333333;
    //     }
    //   }
    //   else if(this.chosenArray.includes(this.animals[i].name))
    //   {
    //     this.areSelected = true;
    //     this.scoring = this.scoring + 33.33333333333333333333333333333333333333333333;
    //     console.log("ANIMALS AND CHOSEN ARRAY WORK");
    //   }
    //   else{
    //     this.areSelected = false;
    //   }
    // }
    


    for(let i = 0; i < this.choosingArray.length; i++)
    {
      this.choosingArray[i].isChecked = false
    }

    // if(this.areSelected)
    // {
    //   console.log("WIIIIIIIIIIIIIIIN")
      this.formsIsHidden = false;
      this.winScreen = true;
      //this.level = this.level + 1;
    //   console.log(this.level + "<----level ");
    // }
    // else{
    //   console.log("LOOOOOOOOSSSSEEEEEE")
    //   this.formsIsHidden = false;
    //   this.loseScreen = true;
      //this.level = 1;
    // }

    if (this.excerciseMode === true) {
      this.ctr++
      console.log(this.ctr)
      if (this.ctr > 0) {
        let choices = []
        if (this.image_last === true) {
          for (let choice of this.choosingArray) {
            choices.push({name: choice.name, val: this.categoryname + '/' + choice.name + ".jpeg"})
          }
        }
        if (this.image_last === false) {
          for (let choice of this.choosingArray) {
            choices.push({name: choice.name, val: choice.name})
          }
        }
        this.eventemitter.onMemorizedItems({correct: this.animals, choices: choices})
        this.eventemitter.onRoundFinished({continue: true})
      }
    }

    // if (this.excerciseMode === true && this.ctr > 2) {
    //   this.eventemitter.onMemorizedItems({correct: this.animals, choices: this.choosingArray})
    //   this.eventemitter.onRoundFinished(true)
    // }


  }

  determineWrongs() {
    let wrongs = 0
    for (let answer of this.animals) {
      wrongs++
      for (let response of this.chosenArray) {
        console.log(answer, response)
        if (answer === response.name) {
          wrongs--
        }
      }
    }
    return wrongs
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.database.unsubscribe()
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe()
    this.database.unsubscribe()
  }
}

