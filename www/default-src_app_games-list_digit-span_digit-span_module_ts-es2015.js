(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_digit-span_digit-span_module_ts"],{

/***/ 3641:
/*!********************************************************************!*\
  !*** ./src/app/games-list/digit-span/digit-span-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitSpanPageRoutingModule": function() { return /* binding */ DigitSpanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _digit_span_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digit-span.page */ 75137);




const routes = [
    {
        path: '',
        component: _digit_span_page__WEBPACK_IMPORTED_MODULE_0__.DigitSpanPage
    }
];
let DigitSpanPageRoutingModule = class DigitSpanPageRoutingModule {
};
DigitSpanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DigitSpanPageRoutingModule);



/***/ }),

/***/ 64842:
/*!************************************************************!*\
  !*** ./src/app/games-list/digit-span/digit-span.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitSpanPageModule": function() { return /* binding */ DigitSpanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _digit_span_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digit-span-routing.module */ 3641);
/* harmony import */ var _digit_span_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digit-span.page */ 75137);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);








let DigitSpanPageModule = class DigitSpanPageModule {
};
DigitSpanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _digit_span_routing_module__WEBPACK_IMPORTED_MODULE_0__.DigitSpanPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_digit_span_page__WEBPACK_IMPORTED_MODULE_1__.DigitSpanPage],
        exports: [_digit_span_page__WEBPACK_IMPORTED_MODULE_1__.DigitSpanPage],
    })
], DigitSpanPageModule);



/***/ }),

/***/ 75137:
/*!**********************************************************!*\
  !*** ./src/app/games-list/digit-span/digit-span.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitSpanPage": function() { return /* binding */ DigitSpanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_digit_span_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./digit-span.page.html */ 72464);
/* harmony import */ var _digit_span_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digit-span.page.scss */ 28731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/game.service */ 5162);
/* harmony import */ var _digit_span_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digit-span.service */ 4880);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 17238);











let DigitSpanPage = class DigitSpanPage {
    constructor(router, menu, animationCtrl, gameService, digitSpanService, eventemitter, alertCtrl) {
        this.router = router;
        this.menu = menu;
        this.animationCtrl = animationCtrl;
        this.gameService = gameService;
        this.digitSpanService = digitSpanService;
        this.eventemitter = eventemitter;
        this.alertCtrl = alertCtrl;
        this.excerciseMode = false;
        this.numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.gameHasBegun = false;
        this.paused = false;
        this.answer = '';
        this.wrongcount = 0;
        this.wrong = false;
        this.lost = false;
        this.currentIndex = 0;
        this.formIsHidden = false;
        this.correct = false;
        this.gameno = 0;
        this.startButtonIsDisabled = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.isFaded = 'faded';
    }
    ngOnInit() {
        // Setup for game getting information from gameservice
        this.gamename = this.gameService.getGames()[0].name;
        this.gameService.getLevelScore(this.gameno, this.excerciseMode);
        console.log(this.excerciseMode);
        // gets any pre-existing level and score information from database
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            console.log(value);
            if (value.level) {
                this.digitSpanService.level = value.level;
            }
            if (value.score) {
                this.digitSpanService.score = value.score;
            }
            if (this.excerciseMode === true) {
                this.digitSpanService.level = this.levels[0];
                this.digitSpanService.score = 0;
            }
        });
        // call from the service to animate the number
        this.digitSpanService.animate.subscribe(value => {
            if (value === 'brighten') {
                // this.brighten()
                // setTimeout(() => {
                // this.isFaded = 'bright'
                // console.log('bright') 
                setTimeout(() => {
                    this.isFaded = 'faded';
                }, 100);
                // }, 150)
            }
            if (value === 'fade') {
                setTimeout(() => {
                    this.isFaded = 'bright';
                }, 1000);
            }
        });
        // for the menu functions from the start component
        this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
            console.log(value);
            switch (value) {
                case 'start':
                    this.onStart();
                    break;
                case 'restart':
                    this.startButtonIsDisabled = true;
                    this.onEndGame();
                    setTimeout(() => {
                        this.onRestart();
                    }, 700);
                    break;
                case 'resume':
                    this.onResume();
                    break;
                case 'quit':
                    this.onQuit();
                    break;
                case 'pause':
                    this.onPause();
                    break;
                case 'stop':
                    this.onEndGame();
                    break;
            }
        });
        // emitter that controls when the form with the selecting numbers is displayed or not
        this.digitSpanService.form.subscribe(value => {
            if (value === 'disappear') {
                this.formIsHidden = true;
            }
            if (value === 'reappear') {
                this.formIsHidden = false;
                this.wrong = false;
                this.correct = false;
            }
        });
        // Gets the number from the service
        this.digitSpanService.CurrentNumber.subscribe(value => {
            this.currNum = JSON.parse(value);
            setTimeout(() => {
                this.isFaded = 'bright';
            }, 100);
            setTimeout(() => {
                this.isFaded = 'faded';
            }, 1000);
        });
    }
    // just returns level and score from the service
    getLevelandScore() {
        return [this.digitSpanService.level, this.digitSpanService.score];
    }
    // starts the game when the button is clicked
    onStart() {
        console.log("digitspanstart");
        this.presentAlert();
    }
    // takes the answer and places the next number that is input to the end
    addNum(number) {
        this.answer = this.answer + JSON.stringify(number);
    }
    // pauses the game (idk if this works)
    onPause() {
        this.paused = true;
        this.digitSpanService.pause();
    }
    // disables the submit button if no answer is there
    disableSubmit() {
        if (this.answer === '') {
            return true;
        }
        else {
            return false;
        }
    }
    // removes a number from the answer
    onDelete() {
        this.answer = this.answer.slice(0, this.answer.length - 1);
        //delete
    }
    // resets the answer
    onReset() {
        this.answer = '';
    }
    // starts the game and shows the popup
    presentAlert() {
        let scoreneeded = this.gameService.scoringconstant - this.digitSpanService.score;
        this.alertCtrl.create({
            header: 'Level: ' + this.getLevelandScore()[0],
            message: this.digitSpanService.alertmessage + 'You need ' + scoreneeded + ' points to go to the next level.',
            buttons: [{
                    text: 'Continue',
                    role: 'Continue',
                    handler: () => {
                        this.digitSpanService.generateNumbers();
                        this.gameHasBegun = true;
                        this.gameService.startTimer();
                    }
                }]
        }).then(alert => alert.present());
    }
    // other type of animation
    // fade(finalopacity: string, startopacity) {
    //   const fade = this.animationCtrl.create()
    //   .addElement(this.currentNum.nativeElement)
    //   .duration(600)
    //   .iterations(1)
    //   .fromTo('opacity', startopacity, finalopacity);
    //   fade.play()
    // }
    // brighten() {
    //   const brighten = this.animationCtrl.create()
    //   .addElement(this.currentNum.nativeElement)
    //   .duration(900)
    //   .iterations(1)
    //   .fromTo('opacity', '0.05', '1');
    //   brighten.play()
    // }
    // generates a random number from 1-9 (legacy)
    // randomNumber() {
    //   let randomnum = Math.floor(Math.random() * 9)
    //   return randomnum
    // }
    // the timer is stopped and the level and score are figured out when the answer is submitted
    onSubmitAnswer() {
        let timer = this.gameService.timer;
        let submitanswer = this.digitSpanService.submitAnswer(this.answer);
        this.gameService.clearTimer();
        if (this.excerciseMode === true) {
            this.digitSpanService.level = this.digitSpanService.level + 1;
            if (this.digitSpanService.level > this.levels[1]) {
                this.eventemitter.onRoundFinished({ continue: true, score: this.digitSpanService.score });
            }
            else {
                this.presentAlert();
            }
        }
        else {
            this.gameService.storeLevelScore(this.gameno, this.digitSpanService.score, this.digitSpanService.level, this.excerciseMode, timer / 1000, submitanswer.wrongs, submitanswer.prevscore, submitanswer.prevlevel);
            this.presentAlert();
        }
        console.log(this.answer);
        this.answer = '';
        // if (submitReturned === true) {
        // this.correct = true;
        // this.wrongcount = 0
        // this.wrong = false
        // } 
        // if (submitReturned === false) {
        //   this.correct = false
        //   this.wrongcount++;
        //   this.wrong = true;
        //   let endgame = this.digitSpanService.checkWrongs(this.wrongcount)
        //   if (endgame) {
        //     console.log(endgame)
        //     this.lost = true
        //     this.numbersRemembered = endgame - 1
        //     this.onEndGame()
        //   }
        // }
    }
    // ends the game
    onEndGame() {
        this.gameHasBegun = false;
        this.correct = false;
        this.wrong = false;
        this.wrongcount = 0;
        this.digitSpanService.clearLevels();
    }
    // quits to the home
    onQuit() {
        this.gameHasBegun = false;
        this.digitSpanService.unpause();
        this.paused = false;
        console.log('quit');
        this.onEndGame();
        this.router.navigate(['/home']);
    }
    // restarts the game
    onRestart() {
        setTimeout(() => {
            this.onStart();
            this.startButtonIsDisabled = false;
        }, 300);
    }
    // maybe the function is to be added???
    getColor() {
    }
    // resumes the game
    onResume() {
        this.paused = false;
        this.digitSpanService.unpause();
    }
    // closes the menu in other words it unpauses the game (legacy)
    // onMenuClosed() {
    //     this.paused = false;
    //     this.digitSpanService.unpause();
    // }
    // unsubscribes from subscriptions when the component is destroyed
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.database.unsubscribe();
        // this.eventemitter.gameState.unsubscribe()
        // this.digitSpanService.animate.unsubscribe()
        // this.digitSpanService.form.unsubscribe()
        // this.digitSpanService.CurrentNumber.unsubscribe()
    }
    // unsubscribes when the user leaves the screen
    ionViewDidLeave() {
        this.subscription.unsubscribe();
        this.database.unsubscribe();
    }
};
DigitSpanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AnimationController },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _digit_span_service__WEBPACK_IMPORTED_MODULE_3__.DigitSpanService },
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__.EventemitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
DigitSpanPage.propDecorators = {
    currentNum: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['currentNumber', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef, static: true },] }],
    excerciseMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['excerciseSet',] }],
    levels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['levels',] }]
};
DigitSpanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-digit-span',
        template: _raw_loader_digit_span_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('cardFade', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('bright', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('* => faded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(900)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('* => bright', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(500)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('faded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ opacity: 0 }))
            ])
        ],
        styles: [_digit_span_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DigitSpanPage);



/***/ }),

/***/ 4880:
/*!*************************************************************!*\
  !*** ./src/app/games-list/digit-span/digit-span.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitSpanService": function() { return /* binding */ DigitSpanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/game.service */ 5162);



let DigitSpanService = class DigitSpanService {
    constructor(gameService) {
        this.gameService = gameService;
        this.numbersArray = [];
        this.level = 1;
        this.levelExp = 1;
        this.paused = false;
        this.score = 0;
        this.alertmessage = "";
        this.animate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.CurrentNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.form = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
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
        let prevlevel = [this.level].slice(0, 1);
        let answerarray = answer.split("");
        let wrongs = 0;
        let i = 0;
        console.log(answerarray, answer);
        for (let item of this.numbersArray) {
            if (JSON.stringify(item) !== answerarray[i]) {
                wrongs++;
            }
            i++;
        }
        let currentscore = this.gameService.getScore(this.numbersArray.length, wrongs);
        this.score = this.score + currentscore;
        if (this.score >= this.gameService.scoringconstant) {
            this.level++;
            this.score = 0;
        }
        if (wrongs > 0) {
            this.alertmessage = "The correct answer was " + this.numbersArray.join("") + ". ";
        }
        else {
            this.alertmessage = "Correct! ";
        }
        return { wrongs: wrongs, prevscore: currentscore, prevlevel: prevlevel[0] };
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
        this.level = 1;
        this.levelExp = 1;
        this.numbersArray = [];
    }
    // creates the random numbers
    generateNumbers() {
        this.numbersArray = [];
        for (let i = 0; i < this.level + 2; i++) {
            this.numbersArray.push(this.randomNumber());
            if (this.numbersArray[i] === this.numbersArray[i - 1]) {
                this.numbersArray.splice(i);
                i--;
            }
        }
        this.form.emit('disappear');
        this.i = 0;
        this.runSeries();
    }
    // runs the game it has the info for when to animate, measures for pause, and what happens when the numbers are done
    runSeries() {
        if (this.paused !== true) {
            if (this.i < this.level + 2) {
                // this.animate.emit('fade')
                this.currentNumber = this.numbersArray[this.i];
                this.CurrentNumber.emit(JSON.stringify(this.currentNumber));
                // this.animate.emit('brighten')
                // this.animate.emit('fade')
                setTimeout(() => {
                    this.i++;
                    this.runSeries();
                    return;
                }, 2000);
            }
            else {
                // this.animate.emit('fade')
                setTimeout(() => {
                    this.form.emit('reappear');
                }, 600);
            }
        }
    }
    // creates a random number from 1-9
    randomNumber() {
        let randomnum = Math.floor(Math.random() * 9);
        return randomnum;
    }
    // pauses the game
    pause() {
        this.paused = true;
    }
    // unpauses the game
    unpause() {
        this.paused = false;
        this.runSeries();
    }
};
DigitSpanService.ctorParameters = () => [
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService }
];
DigitSpanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DigitSpanService);



/***/ }),

/***/ 28731:
/*!************************************************************!*\
  !*** ./src/app/games-list/digit-span/digit-span.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-large {\n  font-weight: bold;\n  font-size: 1.5in;\n}\n\n.shadow {\n  font-weight: \"Bold\";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0LXNwYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksbUJBQUE7RUFFQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFESiIsImZpbGUiOiJkaWdpdC1zcGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWxhcmdlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNWluO1xufVxuXG4uc2hhZG93e1xuICAgIC8vIGZvbnQtZmFtaWx5OiAnTGF0by1MaWdodCc7XG4gICAgZm9udC13ZWlnaHQ6ICdCb2xkJztcbiAgICBcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */");

/***/ }),

/***/ 72464:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/digit-span/digit-span.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n\n<app-description [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-description>\n\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"getLevelandScore()[0]\" [(score)]=\"getLevelandScore()[1]\"></app-score>\n\n<!-- This game is mostly done except for menu functions testing and also get color might be added -->\n\n<!-- is needed because UI gets messed up when there is no ion content -->\n<ion-content *ngIf=\"!gameHasBegun && !excerciseMode\"></ion-content>\n\n<ion-content *ngIf=\"gameHasBegun\">\n  <!-- <ion-list *ngIf=\"gameHasBegun && correct || wrong\">\n    <ion-item color=\"danger\" *ngIf=\"wrong\">\n      <ion-label class=\"ion-text-center\">Incorrect Answer!</ion-label>\n    </ion-item>\n    <ion-item color=\"success\" *ngIf=\"correct\" >\n      <ion-label class=\"ion-text-center\" >Good Job! Correct Answer!</ion-label>\n    </ion-item>\n  </ion-list> -->\n  <!-- <form #f (ngSubmit)=\"onSubmitAnswer(); f.reset()\" *ngIf=\"gameHasBegun && !formIsHidden\">\n    <ion-grid>\n      <ion-row>\n        <ion-col> \n        </ion-col>\n      </ion-row>\n      <div class=\"form-group\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label for=\"answer\" position=\"floating\">Type the numbers you saw.</ion-label>\n              <ion-input\n              id=\"answer\"\n              type=\"number\"\n              class=\"form-control\"\n              [(ngModel)]=\"answer\"\n              name=\"answer\"\n              required\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row> \n      </div> \n      <div class=\"form-group\">      \n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" class=\"ion-text-center\" [disabled]=\"disableSubmit()\">Submit</ion-button>\n          </ion-col>\n        </ion-row>\n      </div> \n    </ion-grid>\n  </form> -->\n\n  <!-- This is the selection screen where they can choose what numbers they saw in what order -->\n  <ion-grid *ngIf=\"gameHasBegun && !formIsHidden\" class=\"ion-text-center\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-label><h1>{{ answer }}</h1></ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col size=\"3\" offset=\"0.75\" *ngFor=\"let item of numarray\" >\n        <ion-button color=\"light\" class=\"shadow\" style=\"width: 80%\" size=\"large\" (click)=\"addNum(item)\">{{ item }}</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" offset=\"0.75\" class=\"ion-text-center\">\n        <ion-button color=\"light\" class=\"shadow\" style=\"width: 80%\" size=\"large\" (click)=\"onDelete()\"><ion-icon name=\"backspace-outline\"></ion-icon></ion-button>\n      </ion-col>\n      <ion-col size=\"3\" offset=\"0.75\" class=\"ion-text-center\">\n        <ion-button color=\"light\" class=\"shadow\" style=\"width: 80%\" size=\"large\" (click)=\"addNum(0)\">0</ion-button>\n      </ion-col>\n      <ion-col size=\"3\" offset=\"0.75\" class=\"ion-text-center\">\n        <ion-button color=\"light\" class=\"shadow\" style=\"width: 80%\" size=\"large\" (click)=\"onReset()\"><ion-icon name=\"refresh-outline\"></ion-icon></ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"onSubmitAnswer()\" size=\"large\" type=\"submit\" color=\"warning\" style=\"width: 80%;\" class=\"ion-text-center shadow\" [disabled]=\"disableSubmit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- The animated number -->\n  <div #currentNumber [@cardFade]=\"isFaded\">\n    <ion-label class=\"ion-text-center\" *ngIf=\"gameHasBegun && formIsHidden\">\n      <h1 class=\"text-large\" [style]=\"'color: ' + getColor()\">{{ currNum }}</h1>\n    </ion-label>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n  <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_games-list_digit-span_digit-span_module_ts-es2015.js.map