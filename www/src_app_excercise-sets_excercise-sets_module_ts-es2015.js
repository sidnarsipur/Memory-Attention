(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_excercise-sets_excercise-sets_module_ts"],{

/***/ 95778:
/*!***************************************************************!*\
  !*** ./src/app/excercise-sets/choosing/choosing.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosingComponent": function() { return /* binding */ ChoosingComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_choosing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./choosing.component.html */ 83484);
/* harmony import */ var _choosing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choosing.component.scss */ 45932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/eventemitter.service */ 64874);
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/game.service */ 5162);






let ChoosingComponent = class ChoosingComponent {
    constructor(gameService, eventEmitter) {
        this.gameService = gameService;
        this.eventEmitter = eventEmitter;
        this.choices = [];
        this.answers = [];
        this.choicesarray = [];
        this.imgmode = false;
        this.numberChecked = 0;
    }
    // This function takes the choices that are given from the excercise sets component and then formats them to
    // be displayed as options
    ngOnInit() {
        console.log(this.choices, this.answers);
        for (let choice of this.choices) {
            this.choicesarray.push({ name: choice.name, val: choice.val, isChecked: false });
        }
        console.log(this.choices);
        if (this.choicesarray[0].val.includes('.jpeg') === true) {
            this.imgmode = true;
        }
    }
    // After the submit button is clicked, this function checks how much is wrong and it determines a score 
    // using the common score formula
    onSubmit() {
        let inputtedanswers = [];
        for (let i = 0; i < this.choicesarray.length; i++) {
            if (this.choicesarray[i].isChecked === true) {
                inputtedanswers.push(this.choicesarray[i].name);
            }
        }
        // let incorrect = false
        // if (this.answers.length !== inputtedanswers.length) {
        //   incorrect = true
        // }
        // for (let item of this.answers) {
        //   if (inputtedanswers.includes(item) === false) {
        //     incorrect = true
        //   }
        // }
        let wrongs = 0;
        for (let answer of this.answers) {
            wrongs++;
            for (let response of inputtedanswers) {
                if (answer === response) {
                    wrongs--;
                }
            }
        }
        let score = this.gameService.getScore(this.answers.length, wrongs);
        this.eventEmitter.onRoundFinished({ continue: true, score: score });
        // if (incorrect === false) {
        //   console.log("WIN")
        // } else {
        //   console.log("INCORRECT", inputtedanswers, this.answers)
        // }
    }
    // When a choice in the html component is clicked, then the checkmark circle is filled up. Which choices are
    // selected are stored in the choicesarray[index].isChecked property and this function alters that property
    // when something is clicked.
    onClick(index) {
        if (this.choicesarray[index].isChecked === true) {
            this.choicesarray[index].isChecked = false;
            this.numberChecked--;
        }
        else if (this.numberChecked < this.answers.length && this.choicesarray[index].isChecked === false) {
            this.numberChecked++;
            this.choicesarray[index].isChecked = !this.choicesarray[index].isChecked;
        }
    }
    // This function just controls what class is given to the checkmark is the isChecked property is true or false
    getClass(i) {
        if (this.choicesarray[i].isChecked === true) {
            return false;
        }
        if (this.choicesarray[i].isChecked === false) {
            return true;
        }
    }
};
ChoosingComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService },
    { type: src_app_shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService }
];
ChoosingComponent.propDecorators = {
    choices: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['choices',] }],
    answers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['answers',] }]
};
ChoosingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-choosing',
        template: _raw_loader_choosing_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_choosing_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChoosingComponent);



/***/ }),

/***/ 62928:
/*!*****************************************************************!*\
  !*** ./src/app/excercise-sets/excercise-sets-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcerciseSetsPageRoutingModule": function() { return /* binding */ ExcerciseSetsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _excercise_sets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./excercise-sets.page */ 10092);




const routes = [
    {
        path: '',
        component: _excercise_sets_page__WEBPACK_IMPORTED_MODULE_0__.ExcerciseSetsPage
    }
];
let ExcerciseSetsPageRoutingModule = class ExcerciseSetsPageRoutingModule {
};
ExcerciseSetsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExcerciseSetsPageRoutingModule);



/***/ }),

/***/ 36800:
/*!*********************************************************!*\
  !*** ./src/app/excercise-sets/excercise-sets.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcerciseSetsPageModule": function() { return /* binding */ ExcerciseSetsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _excercise_sets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./excercise-sets-routing.module */ 62928);
/* harmony import */ var _excercise_sets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excercise-sets.page */ 10092);
/* harmony import */ var _games_list_games_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../games-list/games-list.module */ 67985);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _choosing_choosing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choosing/choosing.component */ 95778);










let ExcerciseSetsPageModule = class ExcerciseSetsPageModule {
};
ExcerciseSetsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _excercise_sets_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcerciseSetsPageRoutingModule,
            _games_list_games_list_module__WEBPACK_IMPORTED_MODULE_2__.GamesListModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_excercise_sets_page__WEBPACK_IMPORTED_MODULE_1__.ExcerciseSetsPage, _choosing_choosing_component__WEBPACK_IMPORTED_MODULE_4__.ChoosingComponent]
    })
], ExcerciseSetsPageModule);



/***/ }),

/***/ 10092:
/*!*******************************************************!*\
  !*** ./src/app/excercise-sets/excercise-sets.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcerciseSetsPage": function() { return /* binding */ ExcerciseSetsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_excercise_sets_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./excercise-sets.page.html */ 65499);
/* harmony import */ var _excercise_sets_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excercise-sets.page.scss */ 44225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/eventemitter.service */ 64874);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/game.service */ 5162);







let ExcerciseSetsPage = class ExcerciseSetsPage {
    constructor(activatedroute, gameService, eventEmitter) {
        this.activatedroute = activatedroute;
        this.gameService = gameService;
        this.eventEmitter = eventEmitter;
        this.hiddenArray = [true, true, true, true, true, true, true, true, true, true];
        this.currentIndex = 0;
        this.levels = [];
        this.level = 1;
        this.score = 0;
        this.choices = [];
        this.answers = [];
        this.aggregatescore = 0;
        this.finalishidden = true;
        this.startScreen = true;
        this.setsHaveStarted = false;
    }
    ngOnInit() {
        // if (localStorage.getItem('setsStarted')) {
        //   this.setsHaveStarted = true
        // } else {
        //   localStorage.setItem('setsStarted', 'exists')
        // }
        // This emitter just gets the choices and correct answers from word to images to transmit to the choosing component.
        this.memorizedSubscription = this.eventEmitter.memorizedItems.subscribe(value => {
            this.choices = value.choices;
            this.answers = value.correct;
        });
        // This subscription obtans the data about the particular excercise set from the game service and then it adjusts the excercise set based on that
        this.activatedroute.params.subscribe(value => {
            this.set = this.gameService.excerciseSetsDescription[this.gameService.excerciseSets[value.number - 1].type - 1].gameIndexes;
            this.levels = this.gameService.excerciseSets[value.number - 1].level;
            console.log(this.set);
            let currindex = this.set[this.currentIndex];
            let currnum;
            if (currindex.number) {
                currnum = currindex.number;
                this.spclVar = currindex.spclVar;
            }
            else {
                currnum = currindex;
            }
            this.hiddenArray[currnum] = false;
        });
        // This subscription proceeds to the next game after a game is finished running and it also gets the score and adds it to the total
        this.subscription = this.eventEmitter.RoundFinished.subscribe(value => {
            if (value) {
                if (value.score) {
                    this.aggregatescore = this.aggregatescore + value.score;
                }
                let currnum = this.set[this.currentIndex];
                if (currnum.number) {
                    this.hiddenArray[currnum.number] = true;
                }
                else {
                    this.hiddenArray[currnum] = true;
                }
                this.currentIndex++;
                currnum = this.set[this.currentIndex];
                if (this.hiddenArray[currnum]) {
                    if (currnum.number) {
                        this.hiddenArray[currnum.number] = false;
                    }
                    else {
                        this.hiddenArray[currnum] = false;
                    }
                }
                else {
                    this.finalishidden = false;
                    console.log(this.aggregatescore);
                }
                console.log(this.choices, this.currentIndex, this.set[this.currentIndex], this.hiddenArray);
            }
        });
    }
    // Unsrubscribes from any ongoing subscriptions at the end
    ionViewDidLeave() {
        this.memorizedSubscription.unsubscribe();
        this.subscription.unsubscribe();
    }
};
ExcerciseSetsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService },
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService }
];
ExcerciseSetsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-excercise-sets',
        template: _raw_loader_excercise_sets_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_excercise_sets_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExcerciseSetsPage);



/***/ }),

/***/ 67985:
/*!*************************************************!*\
  !*** ./src/app/games-list/games-list.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesListModule": function() { return /* binding */ GamesListModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _card_span_card_span_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-span/card-span.module */ 84754);
/* harmony import */ var _digit_span_digit_span_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digit-span/digit-span.module */ 64842);
/* harmony import */ var _trivia_trivia_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trivia/trivia.module */ 33981);
/* harmony import */ var _sort_them_sort_them_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort-them/sort-them.module */ 55225);
/* harmony import */ var _stroop_game_stroop_game_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stroop-game/stroop-game.module */ 47521);
/* harmony import */ var _traffic_light_traffic_light_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./traffic-light/traffic-light.module */ 94348);
/* harmony import */ var _word_pairs_word_pairs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./word-pairs/word-pairs.module */ 37321);
/* harmony import */ var _word_to_images_word_to_images_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./word-to-images/word-to-images.module */ 3926);
/* harmony import */ var _wordfinder_wordfinder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wordfinder/wordfinder.module */ 48169);
/* harmony import */ var _matrix_reasoning_matrix_reasoning_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./matrix-reasoning/matrix-reasoning.module */ 264);













let GamesListModule = class GamesListModule {
};
GamesListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _card_span_card_span_module__WEBPACK_IMPORTED_MODULE_0__.CardSpanPageModule,
            _digit_span_digit_span_module__WEBPACK_IMPORTED_MODULE_1__.DigitSpanPageModule,
            _trivia_trivia_module__WEBPACK_IMPORTED_MODULE_2__.TriviaPageModule,
            _sort_them_sort_them_module__WEBPACK_IMPORTED_MODULE_3__.SortThemPageModule,
            _stroop_game_stroop_game_module__WEBPACK_IMPORTED_MODULE_4__.StroopGamePageModule,
            _traffic_light_traffic_light_module__WEBPACK_IMPORTED_MODULE_5__.TrafficLightPageModule,
            _word_pairs_word_pairs_module__WEBPACK_IMPORTED_MODULE_6__.WordPairsPageModule,
            _word_to_images_word_to_images_module__WEBPACK_IMPORTED_MODULE_7__.WordToImagesPageModule,
            _wordfinder_wordfinder_module__WEBPACK_IMPORTED_MODULE_8__.WordfinderPageModule,
            _matrix_reasoning_matrix_reasoning_module__WEBPACK_IMPORTED_MODULE_9__.MatrixReasoningPageModule
        ],
        exports: [
            _card_span_card_span_module__WEBPACK_IMPORTED_MODULE_0__.CardSpanPageModule,
            _digit_span_digit_span_module__WEBPACK_IMPORTED_MODULE_1__.DigitSpanPageModule,
            _trivia_trivia_module__WEBPACK_IMPORTED_MODULE_2__.TriviaPageModule,
            _sort_them_sort_them_module__WEBPACK_IMPORTED_MODULE_3__.SortThemPageModule,
            _stroop_game_stroop_game_module__WEBPACK_IMPORTED_MODULE_4__.StroopGamePageModule,
            _traffic_light_traffic_light_module__WEBPACK_IMPORTED_MODULE_5__.TrafficLightPageModule,
            _word_pairs_word_pairs_module__WEBPACK_IMPORTED_MODULE_6__.WordPairsPageModule,
            _word_to_images_word_to_images_module__WEBPACK_IMPORTED_MODULE_7__.WordToImagesPageModule,
            _wordfinder_wordfinder_module__WEBPACK_IMPORTED_MODULE_8__.WordfinderPageModule,
            _matrix_reasoning_matrix_reasoning_module__WEBPACK_IMPORTED_MODULE_9__.MatrixReasoningPageModule
        ]
    })
], GamesListModule);



/***/ }),

/***/ 45932:
/*!*****************************************************************!*\
  !*** ./src/app/excercise-sets/choosing/choosing.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maxopacity {\n  opacity: 0.25;\n}\n\n.displaycontainer {\n  position: relative;\n}\n\n.bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJjaG9vc2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXhvcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIFxuICAuZGlzcGxheWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuYm90dG9tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH0iXX0= */");

/***/ }),

/***/ 44225:
/*!*********************************************************!*\
  !*** ./src/app/excercise-sets/excercise-sets.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-content {\n  display: flex;\n  flex-direction: column;\n}\n.ion-content .scroll {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VyY2lzZS1zZXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFBUSxZQUFBO0FBR1oiLCJmaWxlIjoiZXhjZXJjaXNlLXNldHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLnNjcm9sbHtoZWlnaHQ6IDEwMCU7fVxuIH1cbiJdfQ== */");

/***/ }),

/***/ 83484:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/excercise-sets/choosing/choosing.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Choose the answer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- this component is shown after the last game in the exercise set and it \n  basically shows the images/words that loops three times in word to images at the start of the exercise set-->\n\n  <!-- This component is mostly done except for maybe some UI changes -->\n\n<ion-content>\n  <ion-list *ngIf=\"!imgmode\">\n    <ion-item *ngFor=\"let choice of choicesarray\">\n      <ion-label>{{ choice.val.split(\"_\").join(\" \") }}</ion-label>\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"choice.isChecked\"></ion-checkbox>\n    </ion-item>\n    <ion-item button (click)=\"onSubmit()\">\n      <ion-label>Submit</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid *ngIf=\"imgmode\">\n    <ion-row >\n      <ion-col size=\"4\" offset=\"0\" *ngFor=\"let entry of choicesarray; index as i\">\n        <div>\n          <img [src]=\"'../../assets/word-to-images/' + entry.val \" (click)=\"onClick(i)\" [class]=\"getClass(i) === true ? '' : 'maxopacity'\">\n          <div class=\"container bottomright\" *ngIf=\"getClass(i) === true ? false : true\"><ion-icon name=\"checkmark-circle\"></ion-icon></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-list *ngIf=\"imgmode\">\n    <ion-item *ngFor=\"let choice of choicesarray\">\n      <img [src]=\"'../../assets/word-to-images/' + choice.val\">\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"choice.isChecked\"></ion-checkbox>\n    </ion-item>\n    <ion-item button (click)=\"onSubmit()\">\n      <ion-label>Submit</ion-label>\n    </ion-item>\n  </ion-list> -->\n</ion-content> ");

/***/ }),

/***/ 65499:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/excercise-sets/excercise-sets.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!finalishidden\">\n  <ion-toolbar style=\"--border-width: 0\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" routerLink=\"/home\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" style=\"font-size: 20px;\">Final Results</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-header *ngIf=\"!setsHaveStarted\">\n  <ion-toolbar style=\"--border-width: 0\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" routerLink=\"/home\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" style=\"font-size: 20px;\">Exercise Sets</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-content>\n<app-card-span></app-card-span>\n<app-digit-span></app-digit-span>\n</ion-content> -->\n\n\n\n<!-- <div scrollY=\"false\" *ngIf=\"finalishidden\">\n    <app-digit-span *ngIf=\"!hiddenArray[0]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-digit-span>\n    <app-riddles *ngIf=\"!hiddenArray[1]\" [excerciseSet]=\"true\"></app-riddles>\n    <app-card-span *ngIf=\"!hiddenArray[2]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-card-span>\n    <app-traffic-light *ngIf=\"!hiddenArray[3]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-traffic-light>\n    <app-sort-them *ngIf=\"!hiddenArray[4]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-sort-them>\n    <app-word-pairs *ngIf=\"!hiddenArray[5]\"></app-word-pairs>\n    <app-word-to-images *ngIf=\"!hiddenArray[6]\" [excerciseSet]=\"true\" [levels]=\"levels\" [spclVar]=\"spclVar\"></app-word-to-images>\n    <app-stroop-game *ngIf=\"!hiddenArray[7]\"></app-stroop-game>\n    <app-wordfinder *ngIf=\"!hiddenArray[8]\"></app-wordfinder>\n    <app-choosing *ngIf=\"!hiddenArray[9]\" [choices]=\"choices\" [answers]=\"answers\"></app-choosing>\n</div> -->\n\n<!-- This is the main exercise set component. In the first section is the start screen with the start button before the exercise set. The second section is basically the component forms\n    of the different games. The excerciseSet property basically just tells the game that it should be in the excerciseSet mode. The levels property feeds the games what levels they should display and the spclVar\n    is for any extra variables that these games need. For example, word to images in ex set 1 is in mode 1 and it is in mode 2 in ex set 2 and so the spclVar feeds this mode to the component. In section 3 is the \n    part that is displayed after the excercise sets which shows the score and will show maybe stars  and will have a restart and back to home button. -->\n\n<!-- This component is mostly done except it needs to be tested and the games need to be integrated.\n    Additionally, the final screen needs to be built. -->\n\n<!-- Section 1 -->\n<ion-content *ngIf=\"!setsHaveStarted\"  scrollY=\"false\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-label>TEXT</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button (click)=\"setsHaveStarted = true\">Begin Exercise Set</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<!-- Section 2 -->\n  <div class=\"ion-content\" style=\"height: 100%;\" *ngIf=\"setsHaveStarted\">\n    <app-digit-span *ngIf=\"!hiddenArray[0]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-digit-span>\n    <app-riddles style=\"height: 82%;\" *ngIf=\"!hiddenArray[1]\" [excerciseSet]=\"true\"></app-riddles>\n    <app-card-span style=\"height: 82%;\" *ngIf=\"!hiddenArray[2]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-card-span>\n    <app-traffic-light style=\"height: 82%;\" *ngIf=\"!hiddenArray[3]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-traffic-light>\n    <app-sort-them style=\"height: 72%;\" *ngIf=\"!hiddenArray[4]\" [excerciseSet]=\"true\" [levels]=\"levels\"></app-sort-them>\n    <app-word-pairs style=\"height: 82%;\" *ngIf=\"!hiddenArray[5]\"></app-word-pairs>\n    <app-stroop-game style=\"height: 82%;\" *ngIf=\"!hiddenArray[7]\"></app-stroop-game>\n    <app-wordfinder style=\"height: 82%;\" *ngIf=\"!hiddenArray[8]\"></app-wordfinder>\n    <app-choosing style=\"height: 82%;\" *ngIf=\"!hiddenArray[9]\" [choices]=\"choices\" [answers]=\"answers\"></app-choosing>\n    <app-word-to-images style=\"height: 82%;\" *ngIf=\"!hiddenArray[6]\" [excerciseSet]=\"true\" [levels]=\"levels\" [spclVar]=\"spclVar\"></app-word-to-images>\n  </div>\n\n\n<!-- Section 3 -->\n<ion-content *ngIf=\"!finalishidden\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>Score: {{aggregatescore}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_excercise-sets_excercise-sets_module_ts-es2015.js.map