(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_card-span_card-span_module_ts"],{

/***/ 55352:
/*!******************************************************************!*\
  !*** ./src/app/games-list/card-span/card-span-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSpanPageRoutingModule": function() { return /* binding */ CardSpanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _card_span_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-span.page */ 75782);




const routes = [
    {
        path: '',
        component: _card_span_page__WEBPACK_IMPORTED_MODULE_0__.CardSpanPage
    }
];
let CardSpanPageRoutingModule = class CardSpanPageRoutingModule {
};
CardSpanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CardSpanPageRoutingModule);



/***/ }),

/***/ 84754:
/*!**********************************************************!*\
  !*** ./src/app/games-list/card-span/card-span.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSpanPageModule": function() { return /* binding */ CardSpanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _card_span_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-span-routing.module */ 55352);
/* harmony import */ var _card_span_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-span.page */ 75782);
/* harmony import */ var _card_span_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-span.service */ 82820);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);










let CardSpanPageModule = class CardSpanPageModule {
};
CardSpanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _card_span_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardSpanPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ],
        declarations: [_card_span_page__WEBPACK_IMPORTED_MODULE_1__.CardSpanPage],
        providers: [_card_span_service__WEBPACK_IMPORTED_MODULE_2__.CardSpanService],
        exports: [_card_span_page__WEBPACK_IMPORTED_MODULE_1__.CardSpanPage],
    })
], CardSpanPageModule);



/***/ }),

/***/ 75782:
/*!********************************************************!*\
  !*** ./src/app/games-list/card-span/card-span.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSpanPage": function() { return /* binding */ CardSpanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_card_span_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./card-span.page.html */ 19404);
/* harmony import */ var _card_span_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-span.page.scss */ 16365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _card_span_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-span.service */ 82820);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.model */ 58397);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/game.service */ 5162);












let CardSpanPage = class CardSpanPage {
    constructor(router, cardService, animationCtrl, eventemitter, alertCtrl, gameService
    // private renderer: Renderer2
    ) {
        this.router = router;
        this.cardService = cardService;
        this.animationCtrl = animationCtrl;
        this.eventemitter = eventemitter;
        this.alertCtrl = alertCtrl;
        this.gameService = gameService;
        this.excerciseMode = false;
        this.gameHasBegun = false;
        this.cardsRemembered = 0;
        this.correct = false;
        this.wrong = false;
        this.formIsHidden = true;
        this.formSuites = ["club", "heart", "diamond", "spade"];
        this.suiteIsSelected = false;
        this.answerCards = [];
        this.cardCount = 0;
        this.lost = false;
        this.chipsAreDisabled = false;
        this.submitIsTrue = false;
        this.cardCountIsHidden = false;
        this.gameno = 2;
        this.startButtonIsDisabled = false;
        this.isFaded = 'faded';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.cardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    ngOnInit() {
        // gets a pre-existing level and score if it exists from the database
        let levelscore = this.gameService.getLevelScore(this.gameno, this.excerciseMode);
        this.gameService.getLevelScore(this.gameno, this.excerciseMode);
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            if (value.level) {
                this.cardService.level = value.level;
            }
            if (value.score) {
                this.cardService.score = value.score;
            }
        });
        // gets the call to animate from the service
        this.eventemitter.animate.subscribe(value => {
            if (value === 'brighten') {
                // this.brighten()
                // setTimeout(() => {
                // this.isFaded = 'bright'
                // console.log('bright') 
                setTimeout(() => {
                    this.brighten();
                }, 100);
                // }, 150)
            }
            if (value === 'fade') {
                setTimeout(() => {
                    this.fade();
                }, 1000);
            }
        });
        // gets the call to shift to the selecting screen from the service
        this.eventemitter.form.subscribe(value => {
            if (value === 'disappear') {
                this.formIsHidden = true;
            }
            if (value === 'reappear') {
                this.formIsHidden = false;
                this.gameService.startTimer();
                this.wrong = false;
                this.correct = false;
            }
        });
        // gets the current card type from the service for example queen of spades
        this.cardSubscription = this.eventemitter.CurrentCardRoute.subscribe(value => {
            console.log(value);
            this.cardRoute = value;
            setTimeout(() => {
                this.fade();
            }, 300);
            setTimeout(() => {
                this.brighten();
            }, 1000);
        });
        // gets the different game function calls like start, end game, restart, resume, quit
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
        // sets level if it is in excerciseMode (meaning it is part of excercise set)
        if (this.excerciseMode) {
            this.cardService.level = this.levels[0];
            this.cardService.score = 0;
        }
    }
    // goes back to home screen
    onQuit() {
        this.gameHasBegun = false;
        this.router.navigate(['/home']);
    }
    // starts the game with the popup
    onStart() {
        console.log("cardspanstart");
        this.alertCtrl.create({
            header: 'Level: ' + this.getLevelandScore()[0],
            message: 'You need ' + (this.gameService.scoringconstant - this.getLevelandScore()[1]) + ' points to go to the next level',
            buttons: [{
                    text: 'Continue',
                    role: 'Continue',
                    handler: () => {
                        this.gameHasBegun = true;
                        this.cardService.generateCards();
                        this.lost = false;
                        this.cardsRemembered = 0;
                        this.cardCountIsHidden = false;
                    }
                }]
        }).then(alert => alert.present());
    }
    // fade animation
    fade() {
        // this.opacity = 'fade'
        this.isFaded = 'bright';
        // console.log('bright')
        // const fade = this.animationCtrl.create()
        // .addElement(this.currentCardView.nativeElement)
        // .duration(500)
        // .iterations(1)
        // .fromTo('opacity', '1', '0');
        // fade.play()
    }
    // brighten animation
    brighten() {
        this.isFaded = 'faded';
        // console.log('faded')
        // this.opacity = 'bright'
        // const brighten = this.animationCtrl.create()
        // .addElement(this.currentCardView.nativeElement)
        // .duration(900)
        // .iterations(1)
        // .fromTo('opacity', '0', '1');
        // brighten.play()
    }
    // pauses game
    onPause() {
        this.cardService.onPause();
        this.gameService.pauseTimer();
    }
    //resumes game
    onResume() {
        this.cardService.onResume(this.formIsHidden);
        this.gameService.startTimer();
    }
    // when someone selects a suite then it opens up the options for the suite
    onSelectCard(suite) {
        this.selectedCard = suite;
        this.suiteIsSelected = true;
        this.cardsArray = this.cardService.getCards(suite);
    }
    // when submit is clicked, then the suite near the middle of the screen is reset for the end of the next game
    onResetSuite() {
        this.selectedCard = '';
        this.suiteIsSelected = false;
    }
    // legacy code
    // checkIfRow(index, number) {
    //   if (index > number) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
    // what happens when restart button is clicked
    onRestart() {
        setTimeout(() => {
            this.onStart();
            this.startButtonIsDisabled = false;
        }, 300);
    }
    // when the a card is clicked then it is added to the picked cards area
    onChipClicked(suite, name, imgURL) {
        if (this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
            this.answerCards.push(new _card_model__WEBPACK_IMPORTED_MODULE_3__.Card(imgURL, name, suite));
            this.cardCount++;
            this.cardCountIsHidden = true;
        }
        if (!this.cardService.ChipsSubmit(this.cardCount)) {
            this.answerCards.push(new _card_model__WEBPACK_IMPORTED_MODULE_3__.Card(imgURL, name, suite));
            this.cardCount++;
        }
    }
    // when the submit button is clicked then the data is stored in the data base and the score and excercise mode is checked and based on that the level is increased
    // it also starts a new round
    onSubmit() {
        this.cardRoute = '';
        let timer = this.gameService.clearTimer();
        console.log(timer);
        let formCorrect = this.cardService.submitAnswer(this.answerCards, this.cardCount);
        if (this.excerciseMode !== true) {
            this.gameService.storeLevelScore(this.gameno, this.cardService.score, this.cardService.level, this.excerciseMode, timer / 1000, formCorrect.wrongs, formCorrect.prevscore, formCorrect.prevlevel);
        }
        else {
            this.cardService.level++;
        }
        this.answerCards = [];
        this.cardCount = 0;
        this.cardsRemembered++;
        this.cardCountIsHidden = false;
        let scoreneeded;
        if (this.excerciseMode === true) {
            scoreneeded = null;
            if (this.cardService.level > this.levels[1]) {
                this.eventemitter.onRoundFinished({ continue: true, score: this.cardService.score });
            }
        }
        else {
            scoreneeded = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1];
        }
        this.alertCtrl.create({
            header: 'Level: ' + this.getLevelandScore()[0],
            message: this.cardService.alertmessage + '\n' + 'You need ' + scoreneeded + ' points to go to the next level',
            buttons: [{
                    text: 'Continue',
                    role: 'Continue',
                    handler: () => {
                        this.cardService.generateCards();
                    }
                }]
        }).then(alert => alert.present());
        // this.correct = true
    }
    // onPopup() {
    //   this.onPause()
    //   let scoreneeded = 200 - this.cardService.getLevelandScore()[1]
    //   this.alertCtrl.create({
    //     header: 'Level: ' + this.getLevelandScore()[0],
    //     message: 'You need ' + scoreneeded + ' points to go to the next level',
    //     buttons: [{
    //       text: 'Continue',
    //       role: 'Continue',
    //       handler: () => {
    //         this.onResume()
    //     }}]}).then(alert=> alert.present())
    // }
    // the game is ended when the person returns to the home screen
    onEndGame() {
        this.cardService.endGame();
        setTimeout(() => {
            this.answerCards = [];
            this.cardCount = 0;
            this.formIsHidden = true;
            this.gameHasBegun = false;
            this.correct = false;
            this.wrong = false;
            this.suiteIsSelected = false;
            this.cardRoute = null;
            this.onResetSuite();
        }, 500);
    }
    // returns the color class based on the suite input for the chips
    getColor(suite) {
        if (suite === 'club' || suite === 'spade') {
            return 'dark';
        }
        if (suite === 'diamond' || suite === 'heart') {
            return 'danger';
        }
    }
    // when a chip is clicked in the picked chips section then it is deleted from the array
    onDeleteItem(index) {
        this.answerCards.splice(index, 1);
        this.cardCount--;
        if (this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
            this.submitIsTrue = false;
            this.cardCountIsHidden = false;
        }
    }
    // if the number of chips is right then the submit button is enabled or disabled
    submitButton() {
        if (!this.cardService.ChipsSubmit(this.cardCount) || this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
            return true;
        }
        else {
            return false;
        }
    }
    getI() {
        return this.cardService.i;
    }
    // unsubscribes from subscriptions when the component is destroyed
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.cardSubscription.unsubscribe();
        // console.log("unsubscribed")
        // this.cardSubscription.unsubscribe()
        // this.eventemitter.form.unsubscribe()
        // this.eventemitter.animate.unsubscribe()
        // this.eventemitter.CurrentCardRoute.unsubscribe()
    }
    // unsubscribes from subscriptions when the component is left 
    ionViewDidLeave() {
        this.subscription.unsubscribe();
        console.log("unsubscribed");
        this.cardSubscription.unsubscribe();
    }
    // gets the level and score from the service 
    getLevelandScore() {
        return this.cardService.getLevelandScore();
    }
};
CardSpanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _card_span_service__WEBPACK_IMPORTED_MODULE_2__.CardSpanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AnimationController },
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__.EventemitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService }
];
CardSpanPage.propDecorators = {
    currentCardView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['currentNumber', { read: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef, static: true },] }],
    excerciseMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input, args: ['excerciseSet',] }],
    levels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input, args: ['levels',] }]
};
CardSpanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-card-span',
        template: _raw_loader_card_span_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('cardFade', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('bright', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('* => faded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(900)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('* => bright', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(500)]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('faded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ opacity: 0 }))
            ])
        ],
        styles: [_card_span_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CardSpanPage);



/***/ }),

/***/ 82820:
/*!***********************************************************!*\
  !*** ./src/app/games-list/card-span/card-span.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSpanService": function() { return /* binding */ CardSpanService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.model */ 58397);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/game.service */ 5162);





let CardSpanService = class CardSpanService {
    constructor(eventemitter, gameService) {
        this.eventemitter = eventemitter;
        this.gameService = gameService;
        this.cardRoute = "../../assets/cards";
        this.cardsArrayAnswers = [];
        this.cardsArrayDisplayed = [];
        this.level = 1;
        this.score = 0;
        this.paused = false;
        this.cards = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    }
    // creates a random card and returns it
    getRandomCard() {
        let randomSuite = Math.floor(Math.random() * 3);
        let randomNumber = Math.floor(Math.random() * 12);
        let cardSuite;
        let cardNumber;
        switch (randomSuite) {
            case 0:
                cardSuite = "club";
                break;
            case 1:
                cardSuite = "diamond";
                break;
            case 2:
                cardSuite = "heart";
                break;
            case 3:
                cardSuite = "spade";
                break;
        }
        switch (randomNumber) {
            case 0:
                cardNumber = "A";
                break;
            default:
                cardNumber = JSON.stringify(randomNumber + 1);
                break;
            case 10:
                cardNumber = "J";
                break;
            case 11:
                cardNumber = "Q";
                break;
            case 12:
                cardNumber = "K";
                break;
        }
        let cardFinalRoute = this.cardRoute + '/' + cardSuite + '/' + cardNumber + '.jpg';
        this.cardsArrayAnswers.push(new _card_model__WEBPACK_IMPORTED_MODULE_0__.Card('/' + cardSuite + '.png', cardNumber, cardSuite));
        this.cardsArrayDisplayed.push(cardFinalRoute);
    }
    // starts the timer and clears the previous array
    generateCards() {
        this.clearCards();
        for (let i = 0; i < this.level + 2; i++) {
            this.getRandomCard();
            if (this.cardsArrayDisplayed[i] === this.cardsArrayDisplayed[i - 1]) {
                this.cardsArrayAnswers.splice(i);
                this.cardsArrayDisplayed.splice(i);
                i--;
            }
        }
        this.i = 0;
        this.runSeries();
    }
    // starts the series which generates random cards on an interval and tells the component when to animate and when the length is done then it stops
    runSeries() {
        this.eventemitter.onForm('disappear');
        if (this.paused !== true) {
            if (this.i <= this.level + 1) {
                this.eventemitter.onCurrentCardRoute(this.cardsArrayDisplayed[this.i]);
                // this.eventemitter.onAnimate('brighten') 
                // this.eventemitter.onAnimate('fade')  
                setTimeout(() => {
                    if (this.i <= this.level) {
                        this.i++;
                        this.runSeries();
                    }
                    else {
                        setTimeout(() => {
                            this.eventemitter.onAnimate('fade');
                            this.eventemitter.onForm('reappear');
                        }, 600);
                    }
                }, 2000);
            }
            // else {
            // }
        }
    }
    // formats the card data and gives it to the component
    getCards(suite) {
        let cardsArray = [];
        for (let card of this.cards) {
            cardsArray.push(new _card_model__WEBPACK_IMPORTED_MODULE_0__.Card('/' + suite + '.png', card, suite));
        }
        return cardsArray;
    }
    // deals with level and score when submit is clicked
    submitAnswer(cardsArray, cardCount) {
        if (this.level + 2 === cardCount) {
            let wrongs = 0;
            let prevscore = this.score;
            let prevlevel = this.level;
            for (let i = 0; i < this.cardsArrayAnswers.length; i++) {
                if (this.cardsArrayAnswers[i].name !== cardsArray[i].name || this.cardsArrayAnswers[i].suite !== cardsArray[i].suite) {
                    console.log(this.cardsArrayAnswers[i], cardsArray[i]);
                    wrongs++;
                }
            }
            let currentscore = this.gameService.getScore(this.cardsArrayAnswers.length, wrongs);
            this.score = this.score + currentscore;
            if (this.score >= this.gameService.scoringconstant) {
                this.level++;
                this.score = 0;
            }
            if (wrongs === 0) {
                this.alertmessage = "Correct!";
            }
            else {
                let alertstring = '';
                for (let item of this.cardsArrayAnswers) {
                    let suite = '';
                    switch (item.suite) {
                        case "club":
                            suite = "♣️";
                            break;
                        case "diamond":
                            suite = "♦️";
                            break;
                        case "spade":
                            suite = "♠️";
                            break;
                        case "heart":
                            suite = "♥️";
                            break;
                    }
                    alertstring = alertstring + " " + suite + item.name + ",";
                }
                this.alertmessage = "The correct answers were:" + alertstring + ".";
            }
            return { beginNewRound: true, wrongs: wrongs, prevscore: currentscore, prevlevel: prevlevel };
        }
    }
    // deals with submit button being disabled and length of the card count
    ChipsSubmit(cardCount) {
        if (cardCount === this.level + 2) {
            return true;
        }
        if (cardCount === this.level + 1) {
            return 'cardCount';
        }
    }
    // clears the cards array
    clearCards() {
        this.cardsArrayAnswers = [];
        this.cardsArrayDisplayed = [];
    }
    endGame() {
        this.level = 1;
        this.clearCards();
        this.currentCard = '';
    }
    // pauses the game
    onPause() {
        this.paused = true;
    }
    // resumes the game after a pause
    onResume(formIsHidden) {
        this.paused = false;
        if (formIsHidden === true) {
            this.runSeries();
        }
    }
    // passes level and score to the component
    getLevelandScore() {
        return [this.level, this.score];
    }
};
CardSpanService.ctorParameters = () => [
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_1__.EventemitterService },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService }
];
CardSpanService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CardSpanService);



/***/ }),

/***/ 58397:
/*!****************************************************!*\
  !*** ./src/app/games-list/card-span/card.model.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; }
/* harmony export */ });
class Card {
    constructor(imgURL, name, suite) {
        this.imgURL = imgURL;
        this.name = name;
        this.suite = suite;
    }
}


/***/ }),

/***/ 16365:
/*!**********************************************************!*\
  !*** ./src/app/games-list/card-span/card-span.page.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtc3Bhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBO0VBQ0ksNENBQUE7RUFDQSxnQkFBQTtBQXJCSiIsImZpbGUiOiJjYXJkLXNwYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNsdWIge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4vLyB9XG5cbi8vIC5kaWFtb25kIHtcbi8vICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbi8vICAgICBmb250LXNpemU6IGxhcmdlO1xuLy8gICAgIGNvbG9yOiByZWQ7XG4vLyB9XG5cbi8vIC5oZWFydCB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4vLyAgICAgZm9udC1zaXplOiBsYXJnZTtcbi8vICAgICBjb2xvcjogcmVkO1xuLy8gfVxuXG4vLyAuc3BhZGUge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4vLyB9XG5cbi5jYXJkIHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4vLyAuYnJpZ2h0IHtcbi8vICAgICBhbmltYXRpb24tbmFtZTogYnJpZ2h0ZW47XG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcbi8vIH1cblxuLy8gLmZhZGUge1xuLy8gICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuLy8gICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgYnJpZ2h0ZW4ge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIH1cblxuLy8gICAgIHRvIHtcbi8vICAgICAgICAgb3BhY2l0eTogMTtcbi8vICAgICB9IFxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIGZhZGUge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIH1cblxuLy8gICAgIHRvIHtcbi8vICAgICAgICAgb3BhY2l0eTogMDtcbi8vICAgICB9XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ 19404:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/card-span/card-span.page.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n\n<app-description [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-description>\n\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"getLevelandScore()[0]\" [(score)]=\"getLevelandScore()[1]\"></app-score>\n\n<ion-content *ngIf=\"!gameHasBegun && !excerciseMode\"></ion-content>\n\n<!-- This game is mostly complete but the menu functions need to be tested and figured out. -->\n\n<!-- the game itself -->\n<ion-content *ngIf=\"gameHasBegun\">\n\n    <!-- <ion-item color=\"danger\" *ngIf=\"wrong\">\n      <ion-label class=\"ion-text-center\">Incorrect Answer!</ion-label>\n    </ion-item> -->\n    <!-- <ion-item color=\"dark\" *ngIf=\"correct\" >\n      <ion-label class=\"ion-text-center\" >Good Job! Correct Answer!</ion-label>\n    </ion-item> -->\n\n    <!-- This part is the selecting screen of the game after the cards are displayed -->\n    <ion-row *ngIf=\"!cardCountIsHidden\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label>Card: {{ formIsHidden ? getI() + 1 : cardCount + 1 }}</ion-label>\n      </ion-col>\n    </ion-row>\n  <ion-grid *ngIf=\"gameHasBegun && !formIsHidden\">\n      <ion-row>\n        <ion-col *ngFor=\"let suite of formSuites\" size-md=\"2\" offset-md=\"0.75\" offset-lg=\"1.5\" size-lg=\"1\">\n          <ion-card button=\"true\" [disabled]=\"selectedCard === suite\" (click)=\"onSelectCard(suite)\" >\n            <img [src]=\"'../../assets/cards/card-suites' + '/' + suite + '.png'\">            \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    <div *ngIf=\"suiteIsSelected\">\n        <ion-row class=\"ion-text-center\">\n          <ion-col *ngFor=\"let card of cardsArray\"  size-md=\"2\" offset-md=\"0.75\">\n            <div class=\"ion-text-center\">\n              <ion-chip [color]=\"getColor(card.suite)\" outline style=\"background-color: white\" (click)=\"onChipClicked(card.suite, card.name, card.imgURL)\">\n                <!-- <ion-avatar>\n                  <img [src]=\"'../../assets/cards/card-suites/' + card.imgURL\"> >\n                </ion-avatar> -->\n                <div class=\"card\">\n                  <ion-label>{{ card.name }}</ion-label>\n                </div>                  \n              </ion-chip>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-text-center\">\n          <ion-row>\n            <ion-col>\n              <ion-label>Picked Cards (Click to delete):</ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n          <ion-row>\n            <ion-col (click)=\"onDeleteItem(i)\" *ngFor=\"let card of answerCards; let i = index\" size=\"3\" size-md=\"2\" offset-md=\"0.75\">\n              <ion-chip [color]=\"getColor(card.suite)\" outline style=\"background-color: white\">\n                <ion-avatar>\n                  <img [src]=\"'../../assets/cards/card-suites/' + card.imgURL\"> >\n                </ion-avatar>\n                <div class=\"card\">\n                  <ion-label>{{ card.name }}</ion-label>\n                </div> \n                <!-- <ion-icon name=\"close-sharp\" ></ion-icon>                 -->\n              </ion-chip>\n            </ion-col>\n          </ion-row>    \n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\">\n              <ion-button color=\"light\" (click)=\"onSubmit()\" [disabled]=\"submitButton()\">Submit</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n    </div>\n  </ion-grid>\n\n  <!-- This part makes up the cards that are animated through angular animations -->\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"auto\" [class]=\"opacity\" #currentNumber [@cardFade]=\"isFaded\" offset=\"1\" size=\"10\" size-md=\"6\" size-lg=\"4\" >\n        <div *ngIf=\"gameHasBegun && formIsHidden\">\n          <ion-card>\n            <img  width-md=\"480\" height-md=\"733.5\" [src]=\"cardRoute\">\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- <ion-footer *ngIf=\"gameHasBegun\">\n  <ion-toolbar>\n    <ion-title>\n      Level: {{ getLevelandScore()[0] }}; Score: {{ getLevelandScore()[1] }} \n    </ion-title>\n    <ion-buttons slot=\"end\"><ion-button (click)=\"onPopup()\"></ion-button></ion-buttons>\n    <ion-buttons>\n      <ion-button (click)=\"onPopup()\"> </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->\n\n<!-- Common element -->\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n  <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_games-list_card-span_card-span_module_ts-es2015.js.map