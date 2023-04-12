(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_matrix-reasoning_matrix-reasoning_module_ts"],{

/***/ 31663:
/*!********************************************************************************!*\
  !*** ./src/app/games-list/matrix-reasoning/matrix-reasoning-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixReasoningPageRoutingModule": function() { return /* binding */ MatrixReasoningPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _matrix_reasoning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-reasoning.page */ 94949);




const routes = [
    {
        path: '',
        component: _matrix_reasoning_page__WEBPACK_IMPORTED_MODULE_0__.MatrixReasoningPage
    }
];
let MatrixReasoningPageRoutingModule = class MatrixReasoningPageRoutingModule {
};
MatrixReasoningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatrixReasoningPageRoutingModule);



/***/ }),

/***/ 264:
/*!************************************************************************!*\
  !*** ./src/app/games-list/matrix-reasoning/matrix-reasoning.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixReasoningPageModule": function() { return /* binding */ MatrixReasoningPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _matrix_reasoning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-reasoning-routing.module */ 31663);
/* harmony import */ var _matrix_reasoning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix-reasoning.page */ 94949);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);








let MatrixReasoningPageModule = class MatrixReasoningPageModule {
};
MatrixReasoningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _matrix_reasoning_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatrixReasoningPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_matrix_reasoning_page__WEBPACK_IMPORTED_MODULE_1__.MatrixReasoningPage],
        exports: [_matrix_reasoning_page__WEBPACK_IMPORTED_MODULE_1__.MatrixReasoningPage]
    })
], MatrixReasoningPageModule);



/***/ }),

/***/ 94949:
/*!**********************************************************************!*\
  !*** ./src/app/games-list/matrix-reasoning/matrix-reasoning.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixReasoningPage": function() { return /* binding */ MatrixReasoningPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_matrix_reasoning_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./matrix-reasoning.page.html */ 75814);
/* harmony import */ var _matrix_reasoning_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix-reasoning.page.scss */ 90277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _trivia_answer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trivia/answer.model */ 3036);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/game.service */ 5162);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);





//import { Riddle } from './trivia.model';






let MatrixReasoningPage = class MatrixReasoningPage {
    constructor(router, menu, gameService, eventemitter, alertCtrl) {
        this.router = router;
        this.menu = menu;
        this.gameService = gameService;
        this.eventemitter = eventemitter;
        this.alertCtrl = alertCtrl;
        this.gameno = 9;
        this.toGet = 0;
        this.threshold = 200;
        this.gameHasBegun = false;
        this.startButtonIsDisabled = false;
        this.level = 1;
        this.passed = 0;
        this.picked = false;
        this.score = 0;
        this.maxLevel = 10;
        this.multiplier = 20;
        this.wrongs = 0;
        this.photoaddress = "../../assets/matrix-reasoning/";
        this.answerArray = [];
        this.gameOn = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.excerciseSet = false;
    }
    ngOnInit() {
        this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
            switch (value) {
                case 'start':
                    this.onStart();
                    console.log('start');
                    break;
                case 'restart':
                    this.onRestart();
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
            }
        });
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            if (value.level) {
                this.level = value.level;
            }
            if (value.score) {
                this.score = value.score;
            }
        });
        this.gameService.getLevelScore(this.gameno, this.excerciseSet);
        if (this.excerciseSet) {
            this.level = this.levels[0];
            this.score = 0;
        }
    }
    shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    onStart() {
        this.toGet = this.threshold - this.score;
        this.alertCtrl.create({
            header: 'Level: ' + this.level,
            message: 'You need' + ' ' + this.toGet + ' points to go to the next level',
            buttons: [{
                    text: 'Continue',
                    role: 'Continue',
                    handler: () => {
                        this.gameHasBegun = true;
                        this.gameOn = true;
                        this.createGame();
                    }
                }]
        }).then(alert => alert.present());
    }
    createGame() {
        this.gameService.matrixreasoning();
        this.questionNo = Math.floor(Math.random() * ((this.level * 10) - 1 - ((this.level * 10) - 9))) + ((this.level * 10) - 9);
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            if (value.path) {
                if (this.passed == 0) {
                    this.passed++;
                    this.question = 'L' + this.level + 'Q' + this.questionNo;
                    this.currentItem = 'L' + this.level + 'Q' + (this.questionNo - (this.level - 1) * 10) + ".jpg";
                    console.log(this.question);
                    this.answer = (value.value[this.level]['Q' + this.questionNo]['Answer']);
                    console.log(this.answer);
                    this.num_choices = (value.value[this.level]['Q' + this.questionNo]['Num_Choices']);
                    for (let i = 1; i <= this.num_choices; i++) {
                        let x = i.toString();
                        this.answerArray.push(new _trivia_answer_model__WEBPACK_IMPORTED_MODULE_2__.Answer(x, 'dark', false));
                    }
                }
            }
        });
    }
    pick(index) {
        console.log("Button is picked");
        if (this.picked != true) {
            this.picked = true;
            this.answerArray[index].color = "light";
            this.index = index;
            for (let x = 0; x < this.num_choices; x++) {
                if (x != index) {
                    this.answerArray[x].disabled = true;
                }
            }
        }
        else {
            this.picked = false;
            this.answerArray[index].color = "dark";
            for (let x = 0; x < this.num_choices; x++) {
                this.answerArray[x].disabled = false;
            }
        }
    }
    checker() {
        if (this.excerciseSet === true) {
            this.toGet = null;
            if (this.level > this.levels[1]) {
                this.level++;
                this.reset();
                this.createGame();
            }
        }
        else {
            //this.toGet = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1]
        }
        if (this.answerArray[this.index].value == this.answer) {
            this.score += this.multiplier;
            this.toGet = this.threshold - this.score;
            let timer = this.gameService.clearTimer();
            this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - this.multiplier, this.level - 1);
            this.alertCtrl.create({
                header: 'Correct!',
                message: 'Your Score is' + ' ' + this.score + " points. You need " + this.toGet + " points to finish the level",
                buttons: [{
                        text: 'Next Question',
                        role: 'Continue',
                        handler: () => {
                            this.reset();
                            console.log("Next Question");
                            this.levelCheck();
                        }
                    }]
            }).then(alert => alert.present());
        }
        else {
            this.toGet = this.threshold - this.score;
            this.alertCtrl.create({
                header: 'Wrong Answer',
                message: 'You need' + ' ' + this.toGet + ' points to go to the next level',
                buttons: [{
                        text: 'Next Question',
                        role: 'Continue',
                        handler: () => {
                            this.reset();
                            this.wrongs++;
                            let timer = this.gameService.clearTimer();
                            this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - this.multiplier, this.level - 1);
                            console.log("Next Question");
                            this.levelCheck();
                        }
                    }]
            }).then(alert => alert.present());
        }
    }
    levelCheck() {
        if (this.score >= this.threshold) {
            if (this.level >= this.maxLevel) {
                this.alertCtrl.create({
                    header: 'GAME COMPLETE!!',
                    message: 'We hope you enjoyed playing Matrix Reasoning. The Game is over. Exiting will reset the game',
                    buttons: [{
                            text: 'Next Question',
                            role: 'Continue',
                            handler: () => {
                                this.level = 1;
                                this.score = 0;
                                let timer = this.gameService.clearTimer();
                                this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - this.multiplier, this.level - 1);
                                this.onQuit();
                                console.log("Game Over");
                            }
                        }]
                }).then(alert => alert.present());
            }
            else {
                this.level++;
                this.score = 0;
                this.wrongs = 0;
                let timer = this.gameService.clearTimer();
                this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - this.multiplier, this.level - 1);
                this.alertCtrl.create({
                    header: 'You have completed the level!',
                    message: "",
                    buttons: [{
                            text: 'Next Question',
                            role: 'Continue',
                            handler: () => {
                                console.log("Next Level/Type");
                            }
                        }]
                }).then(alert => alert.present());
            }
        }
        else {
        }
        this.createGame();
    }
    reset() {
        this.picked = false;
        this.answerArray = [];
        this.answer = "";
        //this.round = 0
        this.questionNo = 0;
        this.passed = 0;
    }
    onRestart() {
        this.alertCtrl.create({
            header: 'Are you sure you want to restart this level?',
            buttons: [{
                    text: 'Restart',
                    role: 'Continue',
                    handler: () => {
                        this.reset();
                        this.score = 0;
                        this.wrongs = 0;
                        let timer = this.gameService.clearTimer();
                        this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - 10, this.level - 1);
                        this.createGame();
                    }
                }]
        }).then(alert => alert.present());
    }
    onResume() {
        this.menu.close('pause');
    }
    onQuit() {
        this.gameOn = false;
        this.router.navigate(['/home']);
    }
    onPause() {
        console.log("paused");
        this.alertCtrl.create({
            header: 'Game is Paused',
            message: 'Hope your liking it!',
            buttons: [{
                    text: 'Resume Game',
                    role: 'Continue',
                    handler: () => {
                        console.log("Game Resumed");
                    }
                }]
        }).then(alert => alert.present());
    }
    ionViewDidLeave() {
        this.subscription.unsubscribe();
    }
};
MatrixReasoningPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService },
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__.EventemitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
MatrixReasoningPage.propDecorators = {
    excerciseSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['excerciseSet',] }],
    levels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['levels',] }]
};
MatrixReasoningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-matrix-reasoning',
        template: _raw_loader_matrix_reasoning_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_matrix_reasoning_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MatrixReasoningPage);



/***/ }),

/***/ 90277:
/*!************************************************************************!*\
  !*** ./src/app/games-list/matrix-reasoning/matrix-reasoning.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content.background {\n  --ion-background-color:#ffff;\n}\n\n.main {\n  padding: 0 50px;\n  margin-top: 30px;\n}\n\nion-button {\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n\nion-icon {\n  margin-left: 10px;\n}\n\nh3 {\n  color: white;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.submit {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdHJpeC1yZWFzb25pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUYiLCJmaWxlIjoibWF0cml4LXJlYXNvbmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmY7ICAgXG4gICAgXG4gIH1cblxuLm1haW57XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24taWNvbntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 75814:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/matrix-reasoning/matrix-reasoning.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n<app-description [(gameHasBegun)]=\"gameHasBegun\" [(startButtonIsDisabled)]=\"startButtonIsDisabled\" [(gameno)]=\"gameno\"></app-description>\n\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"level\" [(score)]=\"score\"></app-score>\n\n<ion-content>\n\n<ion-label color=\"dark\" *ngIf=\"gameHasBegun\"><strong>Complete the Pattern with the correct option</strong></ion-label>\n\n<img [src]=\"photoaddress + currentItem\" *ngIf=\"gameHasBegun\">  \n\n<div class=\"main\">\n  <ion-button\n    [disabled] = \"answer.disabled\"\n    color = \"{{ answer.color }}\"\n    (click) = \"pick(ind)\"\n    size = \"small\"\n    *ngFor = \"let answer of answerArray, index as ind\">\n   {{ answer.value }}\n  </ion-button>\n</div>\n\n<div class=\"submit\">\n  <ion-button\n    *ngIf = \"picked\"\n    class=\"main\"\n    color=\"warning\"\n    expand = \"block\"\n    (click)=\"checker()\">\n    Submit  \n <ion-icon \n    name=\"enter-outline\"\n    size=\"large\">\n</ion-icon>\n</ion-button>\n</div>\n\n</ion-content>\n\n<ion-footer>\n    <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n    <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n  </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_games-list_matrix-reasoning_matrix-reasoning_module_ts-es2015.js.map