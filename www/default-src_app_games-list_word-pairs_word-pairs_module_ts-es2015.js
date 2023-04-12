(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_word-pairs_word-pairs_module_ts"],{

/***/ 65653:
/*!********************************************************************!*\
  !*** ./src/app/games-list/word-pairs/word-pairs-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordPairsPageRoutingModule": function() { return /* binding */ WordPairsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _word_pairs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-pairs.page */ 31308);




const routes = [
    {
        path: '',
        component: _word_pairs_page__WEBPACK_IMPORTED_MODULE_0__.WordPairsPage
    }
];
let WordPairsPageRoutingModule = class WordPairsPageRoutingModule {
};
WordPairsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WordPairsPageRoutingModule);



/***/ }),

/***/ 37321:
/*!************************************************************!*\
  !*** ./src/app/games-list/word-pairs/word-pairs.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordPairsPageModule": function() { return /* binding */ WordPairsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _word_pairs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word-pairs-routing.module */ 65653);
/* harmony import */ var _word_pairs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-pairs.page */ 31308);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);








let WordPairsPageModule = class WordPairsPageModule {
};
WordPairsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _word_pairs_routing_module__WEBPACK_IMPORTED_MODULE_0__.WordPairsPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_word_pairs_page__WEBPACK_IMPORTED_MODULE_1__.WordPairsPage],
        exports: [_word_pairs_page__WEBPACK_IMPORTED_MODULE_1__.WordPairsPage],
    })
], WordPairsPageModule);



/***/ }),

/***/ 31308:
/*!**********************************************************!*\
  !*** ./src/app/games-list/word-pairs/word-pairs.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordPairsPage": function() { return /* binding */ WordPairsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_word_pairs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./word-pairs.page.html */ 20239);
/* harmony import */ var _word_pairs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word-pairs.page.scss */ 51912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/game.service */ 5162);










let WordPairsPage = class WordPairsPage {
    /*{ name: "Salt --- Pepperzz",val: 'Salt',vals: 'Pepper', checked: false },
    { name: "Jelly --- Peanut Butterzz",val: 'Jelly',vals: 'Peanut Butter', checked: false },
    { name: "Batman --- Robinzz",val: 'Batman',vals: 'Robin', checked: false},
    { name: "Macaroni --- Cheesezz",val: 'Macaroni',vals: 'Cheese', checked: false },
    { name: "King --- Queenzz",val: 'King',vals: 'Queen', checked: false },
    { name: "Cat --- Mousezz",val: 'Cat',vals: 'Mouse', checked: false },
    { name: "Bread --- Butterzz",val: 'Bread',vals: 'Butter', checked: false },
    { name: "Milk --- Cookieszz",val: 'Milk',vals: 'Cookies', checked: false},
    { name: "Fork --- Knifezz",val: 'Fork',vals: 'Knife', checked: false },
    { name: "Biscuits --- Gravyzz",val: 'Biscuits',vals: 'Gravy', checked: false },
    { name: "Hammer --- Nailzz",val: 'Hammer',vals: 'Nail',checked: false },
    { name: "Fish --- Chipszz",val: 'Fish',vals: 'Chips', checked: false}*/
    constructor(eventemitter, gameService, alertCtrl, router) {
        this.eventemitter = eventemitter;
        this.gameService = gameService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.gameno = 5;
        this.gameHasBegun = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.corrArr = [];
        this.allArr = [];
        this.animals = [];
        this.gameWillBegin = true;
        this.formsIsHidden = false;
        this.str = "";
        this.anime = "faded";
        this.level = 1;
        this.scoring = 0;
        this.dis = false;
        this.tryStopClick = [];
        this.winScreen = false;
        this.loseScreen = false;
        this.inputForAnswer = false;
        this.holder = 0;
        //xqc: any[] = [];
        this.xqc = "";
        this.variation = false;
        this.randyVar = 0;
        this.doneWithWordPairs = false;
        this.wordsShow = false;
        this.scoringCap = this.gameService.getScoringConstant();
        this.datapath = "Word_Pair/words";
        this.datasubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.level1 = [];
        this.compatibleBase = [];
        this.compatibleName = [];
        this.val1 = "";
        this.wrongs = 0;
        this.roundChecker = 0;
        this.incompatibleBase = [];
        this.currentWordPair = 0;
        this.numOfWordPairs = 0;
        this.compatibility = 0;
        this.stopDouble = [];
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.gotWrong = false;
        this.gotRight = false;
        /*compatiblezz = [
          {pair1: 'Salt', pair2: 'Pepper', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
          {pair1: 'Salt111', pair2: 'Pepper111', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
          {pair1: 'Salt2222', pair2: 'Pepper2222', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
          {pair1: 'Salt333', pair2: 'Pepper333', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
          {pair1: 'Salt44', pair2: 'Pepper44', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
          {pair1: 'Salt555', pair2: 'Pepper555', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
          {pair1: 'Salt6666', pair2: 'Pepper6666', option1: 'chilli', option2: 'mustard', option3: 'cumin'},
      
      
        ];*/
        this.excerciseMode = false;
        // getWordPairs(numOfPairs, type)
        // {
        // array1
        //     for (int i=0; i < numOfPairs; i++)
        //       array1[i] = compatible[i];
        //   return array of 
        // }
        this.incompatible = [];
        //   { name: "Salt --- Pepper",val: 'Salt',vals: 'Pepper', checked: false },
        //   { name: "Jelly --- Peanut Butter",val: 'Jelly',vals: 'Peanut Butter', checked: false },
        //   { name: "Batman --- Robin",val: 'Batman',vals: 'Robin', checked: false},
        //   { name: "Macaroni --- Cheese",val: 'Macaroni',vals: 'Cheese', checked: false },
        //   { name: "King --- Queen",val: 'King',vals: 'Queen', checked: false },
        //   { name: "Cat --- Mouse",val: 'Cat',vals: 'Mouse', checked: false },
        //   { name: "Bread --- Butter",val: 'Bread',vals: 'Butter', checked: false },
        //   { name: "Milk --- Cookies",val: 'Milk',vals: 'Cookies', checked: false}, 
        //   { name: "Fork --- Knife",val: 'Fork',vals: 'Knife', checked: false },
        //   { name: "Biscuits --- Gravy",val: 'Biscuits',vals: 'Gravy', checked: false },
        //   { name: "Hammer --- Nail",val: 'Hammer',vals: 'Nail',checked: false },
        //   { name: "Fish --- Chips",val: 'Fish',vals: 'Chips', checked: false}
        // ];
        this.compatible = [];
    }
    ngOnInit() {
        this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
            switch (value) {
                case 'start':
                    this.randStart();
                    break;
                case 'restart':
                    break;
                case 'resume':
                    break;
                case 'quit':
                    break;
                case 'pause':
                    break;
                // case 'stop':
                //   break
            }
        });
        this.gameService.gameinfoget(this.datapath);
        this.gameService.getLevelScore(this.gameno, false);
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            console.log(value);
            console.log("value level and score    " + value.level + "        " + value.score);
            if (value.level) {
                this.level = value.level;
                this.prevLevel = this.level;
                console.log(this.prevLevel + " ------- prevLevel --------");
            }
            if (value.score) {
                this.scoring = value.score;
                this.prevScore = this.scoring;
                console.log(this.prevScore + " ------- prevScore --------");
            }
            if (value.path === this.datapath) {
                console.log("path is good");
                if (value.value.Compat1) {
                    console.log(this.datapath + "  <-- datapath");
                    console.log(value.Compat1 + "  <--- console.loging the comp1");
                    //this.compatibleBase = Object.keys(value.value.Compatible).map(key =>  value.value.Compatible[key])
                    this.compatibleBase = Object.values(value.value.Compat1);
                    console.log(this.compatibleBase, " compatBAse works and runs properly");
                    for (let index = 0; index < this.compatibleBase.length; index++) {
                        let name;
                        let val;
                        // this.val1 = this.compatibleBase[index].toString();
                        this.val1 = this.compatibleBase[index].toString();
                        name = this.val1.substr(0, this.val1.indexOf(":"));
                        val = this.val1.substring(this.val1.indexOf(":") + 1);
                        this.compatible.push({ name: name, val: val });
                        console.log(this.compatible);
                    }
                }
                if (value.value.Incompat1) {
                    console.log(value.value.Incompat1);
                    //this.compatibleBase = Object.keys(value.value.Compatible).map(key =>  value.value.Compatible[key])
                    this.incompatibleBase = Object.values(value.value.Incompat1);
                    for (let index = 0; index < this.incompatibleBase.length; index++) {
                        let name;
                        let val;
                        this.val1 = this.incompatibleBase[index].toString();
                        name = this.val1.substr(0, this.val1.indexOf(":"));
                        val = this.val1.substring(this.val1.indexOf(":") + 1);
                        this.incompatible.push({ name: name, val: val });
                    }
                    console.log(this.incompatible);
                }
            }
            console.log("ending the script");
        });
        //this.gameService.gameinfoget(this.datapath)
        // this.datasubscription = this.eventemitter.databaseemitter.subscribe(value => {
        //   console.log(value.value.Compatible)
        //   //this.compatibleBase = Object.keys(value.value.Compatible).map(key =>  value.value.Compatible[key])
        //   this.compatibleBase = Object.values(value.value.Compatible)
        //   console.log(this.compatibleBase)
        //   this.compatibleName = Object.values(value.name.Compatible)
        //   console.log(this.compatibleName + "  [ [ [[ [] ][ ][")
        //   //this.compatibleBase.push(value.value.Compatible)
        //   console.log(this.compatibleBase)
        // })
        this.val1 = "";
        //this.xqc = ""
        console.log(this.xqc + "     whoooooo");
        // this.datasubscription = this.eventemitter.databaseemitter.subscribe(pairsList => {
        //   console.log(pairsList.value.Comp1)
        //   //this.compatibleBase = Object.keys(value.value.Compatible).map(key =>  value.value.Compatible[key])
        //   this.compatibleBase = Object.values(pairsList.value.Comp1)
        //   for (let index = 0; index < this.compatibleBase.length; index++) {
        //     let name: string;
        //     let val: string;
        //     this.val1 = this.compatibleBase[index].toString();
        //     name = this.val1.substr(0, this.val1.indexOf(":"));
        //     val = this.val1.substring(this.val1.indexOf(":")+1)
        //     this.compatible.push({name: name, val: val})
        //   }
        //   console.log(this.compatible);
        // })
        //   this.datasubscription = this.eventemitter.databaseemitter.subscribe(pairsLists => {
        //     console.log(pairsLists.value.Incomp1)
        //     //this.compatibleBase = Object.keys(value.value.Compatible).map(key =>  value.value.Compatible[key])
        //     this.incompatibleBase = Object.values(pairsLists.value.Incomp1)
        //     for (let index = 0; index < this.incompatibleBase.length; index++) {
        //       let name: string;
        //       let val: string;
        //       this.val1 = this.incompatibleBase[index].toString();
        //       name = this.val1.substr(0, this.val1.indexOf(":"));
        //       val = this.val1.substring(this.val1.indexOf(":")+1)
        //       this.incompatible.push({name: name, val: val})
        //     }
        //     console.log(this.incompatible);
        //   })
        //console.log(this.compatibleBase)
        //this.compatibleBase.push(value.value.Compatible)
        // Set<String> set = new HashSet<String>();
        // Iterator i = dataSnapshot.getChildren().iterator();
        // while (i.hasNext()) {
        //     set.add(((DataSnapshot) i.next()).getKey());
        // }
        // key = (((DataSnapshot) i.next()).getKey());
        //         value = ((dataSnapshot).child(key).getValue().toString());
        //         set.add(key+" "+value);
        // this.datasubscription = this.eventemitter.databaseemitter.subscribe(value => {
        //   console.log(value.value.Incompatible)
        //   this.incompatible === value.value.Incompatible
        //   console.log(this.incompatible.values)
        // })
        if (this.excerciseMode === true) {
            this.level = this.levels[0];
            this.scoring = 0;
        }
    }
    randStart() {
        this.gameService.startTimer();
        let randy = Math.floor(Math.random() * (2));
        console.log(randy + "    start of the randStart");
        if (this.scoring >= this.scoringCap) {
            this.scoring = 0;
            this.prevLevel = this.level;
            this.level++;
        }
        this.compatibility = this.level % 2;
        if (this.excerciseMode === true) {
            this.compatibility = this.spclVar;
        }
        console.log(this.compatibility + " <--- compatibility");
        //this.compatibility = 0
        if (this.compatibility == 0) {
            console.log(" GOING INTO INCOMPATIABLE  ", this.level);
            this.onButtonClick(this.incompatible);
        }
        else if (this.compatibility == 1) {
            console.log(" GOING INTO COMPATIABLE   ", this.level);
            this.onButtonClick(this.compatible);
        }
        // if(randy === 3)
        // {
        //   this.onButtonClick(this.compatiblezz)
        // }
    }
    onButtonClick(arrChoose) {
        this.xqc = "";
        this.randyVar = Math.floor(Math.random() * (2));
        //this.randyVar = 0
        console.log("randyVar is " + this.randyVar);
        if (this.randyVar === 1) {
            this.variation = false;
        }
        else {
            this.variation = true;
        }
        if (2 % 2 === 0) {
            console.log("aggagaghddhdfuufufufu");
        }
        if (1 % 2 === 0) {
            console.log("TIRED YYAYAYYAAA");
        }
        if (this.scoring >= this.scoringCap) {
            this.scoring = 0;
            this.prevLevel = this.level;
            this.level++;
        }
        //   if(this.scoring < this.scoringCap)//&& this.scoring > 0
        // {
        //   this.winScreen = false;
        //   this.loseScreen = false;
        //   this.gameHasBegun = true;
        //   this.formsIsHidden = false;
        //   console.log("allarr length " + this.allArr.length)
        //   if(this.randyVar === 1)
        //   {
        //     for (let index = 0; index < this.allArr.length; index++) {
        //       const element = this.allArr[index].name;
        //       console.log("element " + element + " index  " + index)
        //       console.log("str " + this.str, "  978908789008790")
        //       if(this.str === element)
        //       {
        //         this.allArr.splice(index, 1);
        //         console.log(" WORK???? YES " + this.allArr.length)
        //         // if(this.allArr.length !== 0)
        //         //   {
        //         // this.xqc = this.allArr[index].name + " --- " + this.allArr[index].val
        //         //   }
        //       }
        //     }
        //     if(this.allArr.length !== 0)
        //     {
        //     let randy1 = Math.floor(Math.random() * (this.allArr.length));
        //     this.str = "";
        //     this.str = this.allArr[randy1].val
        //     console.log("str "+this.str)
        //    }
        //   }
        //     else{
        //     for (let index = 0; index < this.allArr.length; index++) {
        //       const element = this.allArr[index].val;
        //       console.log("element " + element + " index  " + index)
        //       console.log("str " + this.str, "  978908789008790")
        //       if(this.str === element)
        //       {
        //         this.allArr.splice(index, 1);
        //         console.log(" WORK???? YES " + this.allArr.length)
        //         // if(this.allArr.length !== 0)
        //         //  {
        //         // this.xqc = this.allArr[index].name + " --- " + this.allArr[index].val
        //         //  }
        //       }
        //     }
        //     if(this.allArr.length !== 0)
        //     {
        //     let randy1 = Math.floor(Math.random() * (this.allArr.length));
        //     this.str = "";
        //     this.str = this.allArr[randy1].name
        //     console.log("str "+this.str)
        //     }
        //   }
        //   if(this.level === 1 || this.level === 2)
        //   {
        //     if(this.allArr.length === 0)
        //     {
        //       this.levelsMaker(arrChoose, 3, 3, 5000);
        //     }
        //     else{
        //   this.runSeriesWord(0)
        //   setTimeout(() => {
        //     this.formsIsHidden = true;
        //     this.inputForAnswer = true;
        //   }, 0);//5000 not 0
        //   }
        //   }
        //   if(this.level === 3 || this.level === 4)
        //   {
        //     if(this.allArr.length === 0)
        //     {
        //       this.levelsMaker(arrChoose, 4, 4, 7000);
        //     }
        //     else{
        //       this.runSeriesWord2(0)
        //   setTimeout(() => {
        //     this.formsIsHidden = true;
        //     this.inputForAnswer = true;
        //   }, 0);//7000 not 0
        //     }
        //   }
        //   if(this.level === 5 || this.level === 6)
        //   {
        //     if(this.allArr.length === 0)
        //     {
        //       this.levelsMaker(arrChoose, 5, 5, 9000);
        //     }
        //     else{
        //   this.runSeriesWord3(0)
        //   setTimeout(() => {
        //     this.formsIsHidden = true;
        //     this.inputForAnswer = true;
        //   }, 0);//9000 not 0
        //   }
        //   }
        //   if(this.level === 7 || this.level === 8)
        //   {
        //     if(this.allArr.length === 0)
        //     {
        //       this.levelsMaker(arrChoose, 6, 6, 11000);
        //     }
        //     else{
        //     this.runSeriesWord4(0)
        //     setTimeout(() => {
        //     this.formsIsHidden = true;
        //     this.inputForAnswer = true;
        //   }, 0);//11000 not 0
        //  }
        //   }
        //   if(this.level === 9 || this.level === 10)
        //     {
        //       if(this.allArr.length === 0)
        //      {
        //       this.levelsMaker(arrChoose, 7, 7, 13000);
        //       }
        //       else{
        //         this.runSeriesWord4(0)
        //         setTimeout(() => {
        //         this.formsIsHidden = true;
        //         this.inputForAnswer = true;
        //       }, 0);//13000 not 0
        //       }
        //     }
        //  }
        //  else{}
        this.winScreen = false;
        this.loseScreen = false;
        this.gameHasBegun = true;
        this.formsIsHidden = false;
        this.randImage = [];
        this.corrArr = [];
        this.str = "";
        this.choosingArray = [];
        this.allArr = [];
        this.animals = [];
        this.tryStopClick = [];
        this.numOfWordPairs = 0;
        //this.xqc = "";
        let timetoshow;
        switch (this.level) {
            case 1:
            case 2:
                this.numOfWordPairs = 3;
                timetoshow = 5000;
                break;
            case 3:
            case 4:
                this.numOfWordPairs = 4;
                timetoshow = 7000;
                break;
            case 5:
            case 6:
                this.numOfWordPairs = 5;
                timetoshow = 9000;
                break;
            case 7:
            case 8:
                this.numOfWordPairs = 6;
                timetoshow = 11000;
                break;
            case 9:
            case 10:
                this.numOfWordPairs = 7;
                timetoshow = 13000;
                break;
        }
        // if issue could come regarding amount of words shown check this line of code
        this.levelsMaker(arrChoose, this.numOfWordPairs, this.numOfWordPairs + 1, timetoshow);
        // if(this.level === 1 || this.level === 2)
        // {
        //       this.numOfWordPairs = 3;
        //     }
        //     else if(this.level === 3 || this.level === 4)
        //     {
        //       this.levelsMaker(arrChoose, 4, 4, 7000);
        //     }
        //     else if(this.level === 5 || this.level === 6)
        //     {
        //       this.levelsMaker(arrChoose, 5, 5, 9000);
        //     }
        //     else if(this.level === 7 || this.level === 8)
        //     {
        //       this.levelsMaker(arrChoose, 6, 6, 11000);
        //     }
        //     if(this.level === 9 || this.level === 10)
        //     {
        //       this.levelsMaker(arrChoose, 7, 7, 13000);
        //     }
        //     if(this.level > 10)
        //     {
        //       this.doneWithWordPairs = true;
        //     }
        //     this.levelsMaker(arrChoose, 3, 3, 5000);
    }
    createValues(numberofvalues, totalposs) {
        let possibilities = [];
        let values = [];
        for (let i = 0; i < totalposs; i++) {
            possibilities.push(i);
        }
        for (let i = 0; i < numberofvalues; i++) {
            let value = Math.floor(Math.random() * possibilities.length);
            values.push(possibilities[value]);
            possibilities.splice(value, 1);
        }
        console.log(values);
        return values;
    }
    levelsMaker(arrChoosed, amountOfMemorizedWords, amountOfPossibilities, timeHidden) {
        this.wordsShow = true;
        this.randImage = [];
        this.corrArr = [];
        this.str = "";
        this.choosingArray = [];
        this.allArr = [];
        this.animals = [];
        this.tryStopClick = [];
        this.xqc = "";
        let displayImg = this.createValues(amountOfPossibilities, arrChoosed.length);
        this.corrArr = this.createValues(amountOfMemorizedWords, amountOfPossibilities);
        for (let item of this.corrArr) {
            this.allArr.push(arrChoosed[displayImg[item]]);
        }
        for (let i = 0; i < displayImg.length; i++) {
            displayImg[i] = arrChoosed[displayImg[i]];
        }
        this.randImage = this.allArr;
        this.choosingArray = displayImg;
        for (let i = 0; i < this.allArr.length; i++) {
            this.animals.push(this.allArr[i].name + " --- " + this.allArr[i].val);
        }
        console.log("Animals is " + this.animals);
        console.log(this.randImage);
        let randy = Math.floor(Math.random() * ((amountOfMemorizedWords)));
        console.log(amountOfMemorizedWords, "  lololoololoolo     ", randy);
        if (this.randyVar === 1) //Prints the word the look for when needs to look for its pair
         {
            this.str = this.allArr[randy].name;
            for (let index = 0; index < this.allArr.length; index++) {
                const element = this.allArr[index].val;
                console.log("element " + element + " index  " + index, " woowoewoppwpwpwpqppqpq");
                console.log("str " + this.str);
                if (this.str === element) {
                    //this.xqc = this.allArr[index].name + " --- " + this.allArr[index].val
                    console.log(" Wooooooooo YES " + this.allArr.length);
                }
            }
        }
        else {
            this.str = this.allArr[randy].val;
            for (let index = 0; index < this.allArr.length; index++) {
                const element = this.allArr[index].name;
                console.log("element " + element + " index  " + index);
                console.log("str " + this.str);
                if (this.str === element) {
                    //this.xqc = this.allArr[index].name + " --- " + this.allArr[index].val
                    console.log(" Wooooooooo YES " + this.allArr.length);
                }
            }
        }
        // this.xqc = this.allArr[randy].name + " --- " + this.allArr[randy].val
        console.log("str is " + this.str);
        this.runSeriesWord(0);
        setTimeout(() => {
            this.wordsShow = false;
            this.formsIsHidden = true;
            this.inputForAnswer = true;
        }, timeHidden);
    }
    runSeriesWord(i) {
        this.seriesRun(i, this.animals, 1900);
    }
    runSeriesWord2(i) {
        this.seriesRun(i, this.animals, 1900);
    }
    runSeriesWord3(i) {
        this.seriesRun(i, this.animals, 1900);
    }
    runSeriesWord4(i) {
        this.seriesRun(i, this.animals, 1900);
    }
    seriesRunzz(i, array, time) {
        if (i < array.length) {
            console.log(i);
            this.currentItem = array[i].pair1, array[i].pair2;
            console.log(this.currentItem);
            setTimeout(() => {
                this.anime = "brighten";
            }, 100);
            setTimeout(() => {
                this.anime = "faded";
            }, 1000);
            setTimeout(() => {
                i++;
                this.seriesRunzz(i, array, time);
            }, time);
        }
    }
    seriesRun(i, array, time) {
        if (i < array.length) {
            console.log(i);
            this.currentItem = array[i];
            console.log(this.currentItem);
            setTimeout(() => {
                this.anime = "brighten";
            }, 100);
            setTimeout(() => {
                this.anime = "faded";
            }, 1000);
            setTimeout(() => {
                i++;
                this.seriesRun(i, array, time);
            }, time);
        }
    }
    radioGroupChange(event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    }
    radioSelect(event) {
        console.log("radioSelect ", event.detail);
        this.selectedRadioItem = event.detail;
    }
    inputOff() {
        this.inputForAnswer = false;
    }
    sign() {
        this.inputOff();
        // you need to integrate scoring with this
        if (this.tryStopClick.length > 2) {
            this.tryStopClick.splice(0, this.tryStopClick.length - 2);
        }
        if (this.tryStopClick.length > 0 && this.tryStopClick.length === 1) {
            this.tryStopClick.splice(0, this.tryStopClick.length - 1);
        }
        console.log(this.tryStopClick);
        this.currentWordPair++;
        console.log(this.tryStopClick[this.tryStopClick.length - 1], "    look here");
        if (this.str === this.tryStopClick[this.tryStopClick.length - 1]) {
            // this.winScreen = true;
            // this.inputForAnswer = false;
            // if (this.excerciseMode === true) {
            //   if (this.level === this.levels[1]) {
            //     this.eventemitter.onRoundFinished({continue: true, score: this.scoring})
            //   }
            //   this.level++
        }
        else {
            this.wrongs++;
        }
        console.log(this.currentWordPair, "    cur word pair");
        console.log(this.numOfWordPairs, "    num ofß word pair");
        console.log(this.wrongs, "Wrong");
        console.log(this.gameService.getScore(this.numOfWordPairs, this.wrongs) + " < -------- --- --- -- --");
        // else{
        //   this.loseScreen = true;
        //   this.inputForAnswer = false;
        // }
        if (this.currentWordPair === this.numOfWordPairs) {
            let right = this.numOfWordPairs - this.wrongs;
            console.log("did OT");
            this.prevScore = this.scoring;
            this.scoring = this.gameService.getScore(this.numOfWordPairs, this.wrongs) + this.scoring;
            let pointsneeded = this.scoringCap - this.scoring;
            const alert = this.alertCtrl.create({
                header: 'Level: ' + this.level,
                message: 'Correct: ' + right + '<br/>' + 'Incorrect: ' + this.wrongs + '<br/>' + 'You need ' + pointsneeded + ' points to go to the next level',
                buttons: [{
                        text: 'Continue',
                        role: 'Continue',
                        handler: () => {
                            this.randStart();
                        }
                    }]
            }).then(alert => alert.present());
            this.prevLevel = this.level;
            this.timer = this.gameService.clearTimer();
            console.log(this.timer, " <------- Timer");
            this.gameService.storeLevelScore(this.gameno, this.gameService.getScore(this.numOfWordPairs, this.wrongs), this.level, this.excerciseMode, this.timer / 1000, this.wrongs, this.prevScore, this.prevLevel);
            this.wrongs = 0;
            this.currentWordPair = 0;
        }
        else {
            this.sameRound();
        }
    }
    sameRound() {
        let remain = [];
        console.log("the Else was run");
        this.gameHasBegun = true;
        this.formsIsHidden = true;
        this.inputForAnswer = true;
        console.log("allarr length " + this.allArr.length);
        if (this.randyVar === 1) {
            console.log("The randyVar is equal to one");
            console.log(this.str, "    before");
            for (let index = 0; index < this.allArr.length; index++) {
                // const element = this.allArr[index];
                console.log(this.allArr[index].val, " <---- before val before name ------>    ", this.allArr[index].name);
                if (this.allArr[index].val !== this.str && this.allArr[index].name !== this.str) {
                    remain.push(this.allArr[index]);
                    console.log("The if is satisfied");
                }
                else {
                    console.log("Found");
                    console.log(this.str);
                    console.log(this.allArr[index]);
                }
                console.log("----> ", remain);
            }
            this.allArr = [];
            this.allArr = remain;
            console.log(this.allArr + "   <------ this is all arr");
            if (this.allArr.length > 0) {
                let randy = Math.floor(Math.random() * ((this.allArr.length)));
                this.str = this.allArr[randy].val;
                console.log(this.str + " <------ is the str after the else");
            }
            this.variation = true; // was true
            for (let index = 0; index < this.allArr.length; index++) {
                const element = this.allArr[index].name;
                console.log("element " + element + " index  " + index);
                console.log("str " + this.str, "  978908789008790");
                console.log(remain, "   <----- remain");
                console.log(" the whole array " + this.allArr[index].name);
            }
            console.log("its broken ");
        }
        else {
            console.log(this.str, "    before");
            for (let index = 0; index < this.allArr.length; index++) {
                // const element = this.allArr[index];
                console.log(this.allArr[index].val, " <---- before val before name ------>    ", this.allArr[index].name);
                if (this.allArr[index].val !== this.str && this.allArr[index].name !== this.str) {
                    remain.push(this.allArr[index]);
                    console.log("The if is satisfied");
                }
                else {
                    console.log("Found");
                    console.log(this.str);
                    console.log(this.allArr[index]);
                }
                console.log("----> ", remain);
            }
            this.allArr = [];
            this.allArr = remain;
            console.log(this.allArr + "   <------ this is all arr");
            if (this.allArr.length > 0) {
                let randy = Math.floor(Math.random() * ((this.allArr.length)));
                this.str = this.allArr[randy].name;
                console.log(this.str + " <------ is the str after the else");
            }
            this.variation = false;
            for (let index = 0; index < this.allArr.length; index++) {
                const element = this.allArr[index].val;
                console.log("element " + element + " index  " + index);
                console.log("str " + this.str, "  978908789008790");
                console.log(remain, "   <----- remain");
                console.log(" the whole array " + this.allArr[index].val);
            }
            console.log("its broken ");
        }
        for (let index = 0; index < this.allArr.length; index++) {
            const element = this.allArr[index];
            console.log("array NAME is --------> " + this.allArr[index].name);
            console.log("array VAL is --------> " + this.allArr[index].val);
        }
        // let arrChoose;
        // if(this.compatibility === 0)
        // {
        //   arrChoose = this.incompatible
        // }
        // else if(this.compatibility === 1)
        // {
        //   arrChoose = this.compatible
        // }
        //   let timetoshow;
        // switch (this.level) {
        //   case 1:
        //   case 2: this.numOfWordPairs = 3;
        //           timetoshow = 5000;
        //           break;
        //   case 3:
        //   case 4: this.numOfWordPairs = 4;
        //           timetoshow = 7000;
        //           break;
        //   case 5:
        //   case 6:this.numOfWordPairs = 5;
        //           timetoshow = 9000;
        //           break;
        //   case 7:
        //   case 8:this.numOfWordPairs = 6;
        //          timetoshow = 11000;
        //          break;
        //   case 9:
        //   case 10:this.numOfWordPairs = 7;
        //           timetoshow = 13000;
        //            break;
        // }
        // this.levelsMaker(arrChoose, this.numOfWordPairs, this.numOfWordPairs+1, timetoshow);
    }
    clearTryStopClick() {
        this.tryStopClick = [];
        this.tryStopClick.length = 0;
        this.tryStopClick.splice(0, this.tryStopClick.length);
        this.tryStopClick.splice(0);
        console.log("the length of try stop click " + this.tryStopClick.length);
    }
    aTest(i) {
        console.log(this.choosingArray[i].name);
        this.tryStopClick.push(this.choosingArray[i].name);
        this.stopDouble.push(this.choosingArray[i].name);
    }
    aTestVar(i) {
        console.log(this.choosingArray[i].val);
        this.tryStopClick.push(this.choosingArray[i].val);
        this.stopDouble.push(this.choosingArray[i].val);
    }
    getName(i) {
        if (this.choosingArray[i].checked === true) {
            return 'radio-button-on-outline';
        }
        if (this.choosingArray[i].checked === false) {
            return 'radio-button-off-outline';
        }
    }
    goAnOtherPage() {
        this.router.navigate(['/home/main']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.database.unsubscribe();
    }
    ionViewDidLeave() {
        this.subscription.unsubscribe();
        this.database.unsubscribe();
    }
};
WordPairsPage.ctorParameters = () => [
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService },
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
WordPairsPage.propDecorators = {
    excerciseMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['excerciseSet',] }],
    spclVar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['spclVar',] }],
    levels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['levels',] }]
};
WordPairsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-word-pairs',
        template: _raw_loader_word_pairs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('anime', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('bright', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => faded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)(500)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => bright', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)(500)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('faded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 0 }))
            ])
        ],
        styles: [_word_pairs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WordPairsPage);



/***/ }),

/***/ 51912:
/*!************************************************************!*\
  !*** ./src/app/games-list/word-pairs/word-pairs.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle {\n  height: 200px;\n  width: 400px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -200px;\n}\n\n.middleRed {\n  height: 200px;\n  width: 400px;\n  border-color: #52f721;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -200px;\n}\n\n.shadow {\n  font-family: \"Lato-Light\";\n  font-weight: \"Bold\";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n\n.shadow-answers {\n  font-family: \"Lato-Light\";\n  font-weight: \"Bold\";\n  font-size: 25px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmQtcGFpcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFHQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUVBLDJDQUFBO0VBQ0osbUJBQUE7RUFDQSwwQkFBQTtBQUpBOztBQU9BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNKLG1CQUFBO0VBQ0EsMEJBQUE7QUFKQSIsImZpbGUiOiJ3b3JkLXBhaXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbn1cblxuLm1pZGRsZVJlZCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoODIsIDI0NywgMzMpO1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbn1cblxuLnNoYWRvd3tcbiAgICBmb250LWZhbWlseTogJ0xhdG8tTGlnaHQnO1xuICAgIGZvbnQtd2VpZ2h0OiAnQm9sZCc7XG4gICAgXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbmJvcmRlci1yYWRpdXM6IDIwcHg7XG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnNoYWRvdy1hbnN3ZXJze1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0by1MaWdodCc7XG4gICAgZm9udC13ZWlnaHQ6ICdCb2xkJztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbmJvcmRlci1yYWRpdXM6IDIwcHg7XG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 20239:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/word-pairs/word-pairs.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"level\" [(score)]=\"scoring\"></app-score>\n\n<ion-content scroll-Y=\"true\">\n    <div *ngIf=\"gameHasBegun && !formsIsHidden && wordsShow\" class = \"middle\">\n        <ion-row > \n          <ion-col [@anime]=\"anime\" class=\"ion-text-center\"> \n            <ion-label> <h1>{{currentItem}}</h1></ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- <div  *ngIf=\"formsIsHidden && inputForAnswer\" class = \"ion-text-center\">\n        <ion-grid style=\"flex: 1; position: sticky;\">\n          <ion-row>\n            <ion-col> \n            <img src = \"../assets/word-finder/level_icon.png\">\n             <h6 >Level: {{ level }}</h6> \n          </ion-col>\n          <ion-col>\n            <img src = \"../assets/word-finder/point_icon.png\">\n             <h6 >Points: {{ scoring }}</h6>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div> -->\n      <!-- push changes test -->\n\n      <div *ngIf=\"formsIsHidden && inputForAnswer && !variation \">\n        \n        <ion-row >\n            <ion-col class=\"ion-text-center\">\n                <!-- <h2 >{{str}}</h2> -->\n                <ion-button color = \"light\" style = \"width: 80%\" [disabled] = \"true\" size = \"large\" class = \"shadow\"><ion-text ><h3>{{str}}</h3></ion-text></ion-button>\n            </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngFor=\"let entry of choosingArray;index as i\" size = \"6\" class = \"ion-text-center\">\n          <!-- <ion-list> -->\n            \n              <!-- <ion-item *ngFor=\"let entry of choosingArray;index as i\"> -->\n                <!-- <label  >{{entry.name}}</label> -->\n                <!-- <input slot = \"end\" type=\"radio\" name=\"radAnswer\" (click)=\"aTestVar(i)\" /> -->\n                <!-- <ion-radio slot=\"end\" type=\"radio\" (click)=\"aTestVar(i)\" ></ion-radio>  -->\n                <ion-button color = \"medium\" style = \"width: 80%\" size = \"large\" class = \"shadow-answers\" (click)=\"aTest(i)\" >{{entry.val}}</ion-button> \n\n            <!-- </ion-item> -->\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-button (click)=\"sign()\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n       \n      </div>\n  \n      <div *ngIf=\"formsIsHidden && inputForAnswer && variation\">\n        <ion-row>\n            <ion-col class=\"ion-text-center\">\n                <!-- <h2 style = \"width: 80%\" class=\"shadow\">{{str}}</h2> -->\n                <ion-button color = \"warning\" style = \"width: 80%\" [disabled] = \"false\" size = \"large\" class = \"shadow\"><ion-text ><h3>{{str}}</h3></ion-text></ion-button>\n\n            </ion-col>\n      </ion-row>\n      <ion-row>\n              <ion-col *ngFor=\"let entry of choosingArray;index as i\" size = \"6\" class = \"ion-text-center\">\n                <!-- <ion-list> -->\n                  \n                    <!-- <ion-item *ngFor=\"let entry of choosingArray;index as i\"> -->\n                      <!-- <label  >{{entry.name}}</label> -->\n                      <!-- <input slot = \"end\" type=\"radio\" name=\"radAnswer\" (click)=\"aTestVar(i)\" /> -->\n                      <!-- <ion-radio slot=\"end\" type=\"radio\" (click)=\"aTestVar(i)\" ></ion-radio>  -->\n                      <ion-button color = \"medium\" style = \"width: 80%\" size = \"large\" class = \"shadow-answers\" (click)=\"aTestVar(i)\" >{{entry.name}}</ion-button> \n\n                  <!-- </ion-item> -->\n                </ion-col>\n              </ion-row>\n                  <!-- <ion-radio-group> </ion-radio-group> -->\n                <!-- </ion-list> -->\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-button (click)=\"sign()\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- <div *ngIf=\"winScreen\" class = \"middle\"> \n        <ion-row> \n          <ion-col class=\"ion-text-center\"> \n            <ion-button (click)=\"randStart()\">Next Round</ion-button>  \n          </ion-col> \n        </ion-row>\n      </div> \n\n      <div *ngIf=\"loseScreen\" class = \"middle\"> \n        <ion-row> \n            <ion-col class=\"ion-text-center\"> \n              <ion-button (click)=\"randStart()\">Next Round</ion-button>       \n            </ion-col> \n          </ion-row>\n          <ion-row>\n              <ion-col class=\"ion-text-center\">\n                <label>The correct pair was </label>\n                <p>{{xqc}}</p>\n              </ion-col>\n          </ion-row>\n      </div > -->\n      \n      <div *ngIf = \"doneWithWordPairs\" class = \"middleRed\">\n        <ion-row> \n            <ion-col class=\"ion-text-center\"> \n                <label button (click)=\"goAnOtherPage()\">Go To Home Page </label>    \n            </ion-col> \n          </ion-row>\n      </div>\n      <app-description [(gameno)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-description>\n</ion-content>\n\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n  <app-start [(gameno)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-start>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_games-list_word-pairs_word-pairs_module_ts-es2015.js.map