(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_sort-them_sort-them_module_ts"],{

/***/ 78846:
/*!******************************************************************!*\
  !*** ./src/app/games-list/sort-them/sort-them-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortThemPageRoutingModule": function() { return /* binding */ SortThemPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sort_them_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-them.page */ 77472);




const routes = [
    {
        path: '',
        component: _sort_them_page__WEBPACK_IMPORTED_MODULE_0__.SortThemPage
    }
];
let SortThemPageRoutingModule = class SortThemPageRoutingModule {
};
SortThemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SortThemPageRoutingModule);



/***/ }),

/***/ 55225:
/*!**********************************************************!*\
  !*** ./src/app/games-list/sort-them/sort-them.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortThemPageModule": function() { return /* binding */ SortThemPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sort_them_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-them-routing.module */ 78846);
/* harmony import */ var _sort_them_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-them.page */ 77472);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);








let SortThemPageModule = class SortThemPageModule {
};
SortThemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sort_them_routing_module__WEBPACK_IMPORTED_MODULE_0__.SortThemPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_sort_them_page__WEBPACK_IMPORTED_MODULE_1__.SortThemPage],
        exports: [_sort_them_page__WEBPACK_IMPORTED_MODULE_1__.SortThemPage],
    })
], SortThemPageModule);



/***/ }),

/***/ 77472:
/*!********************************************************!*\
  !*** ./src/app/games-list/sort-them/sort-them.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortThemPage": function() { return /* binding */ SortThemPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sort_them_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sort-them.page.html */ 41505);
/* harmony import */ var _sort_them_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-them.page.scss */ 39534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/game.service */ 5162);
/* harmony import */ var _sort_them_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-them.service */ 21550);










let SortThemPage = class SortThemPage {
    constructor(eventemitter, platform, sortThemService, router, alertCtrl, gameService) {
        this.eventemitter = eventemitter;
        this.platform = platform;
        this.sortThemService = sortThemService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.gameService = gameService;
        this.gameHasBegun = false;
        this.paused = false;
        this.wrongcount = 0;
        this.lost = false;
        this.currentIndex = 0;
        this.gameno = 4;
        this.startButtonIsDisabled = false;
        this.numberofchips = 20;
        this.array = [];
        this.clickedcards = [];
        this.currentindex = 0;
        this.wrongselected = [];
        this.times = [];
        this.timerfunc = setInterval(() => {
            this.timer = this.timer + 1000;
        }, 1000);
        this.timer = 0;
        this.score = 0;
        this.gamewrongs = 0;
        this.instructionsarray = ["Tap the numbers from 1-20", "Tap the letters from A-T", "Tap the letters from a-t", "Tap the letters from earliest to last", "Tap the numbers then letters 1, A, 2, B...", "Tap the lowest number then lowest letter then up to the highest", "Tap the lowest number and increase in multiples", "Tap the lowest number and increase in multiples", "1Aa2Bb...", "12Ab34Bc..."];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.level = 1;
        this.excerciseMode = false;
    }
    ngOnInit() {
        // gets existing level and score from the database
        this.gameService.getLevelScore(this.gameno, this.excerciseMode);
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            if (value.level) {
                this.sortThemService.level = value.level;
            }
            if (value.score) {
                this.score = value.score;
            }
        });
        // based on the size of the device, the size of the buttons changes and this function just gets the height and width of the device
        this.height = +this.platform.height();
        this.width = +this.platform.width();
        console.log(this.height, this.width);
        // emitter to get menu function calls from the start component
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
                        this.startButtonIsDisabled = false;
                        this.onStart();
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
        if (this.excerciseMode === true) {
            this.sortThemService.level = this.levels[0];
            this.score = 0;
        }
    }
    // starts the game and shows the popup
    onStart() {
        let topleft = this.sortThemService.generateCoordinates();
        this.alertCtrl.create({
            header: 'Level: ' + this.sortThemService.getLevel(),
            message: 'You need ' + (this.gameService.scoringconstant - this.score) + ' points to go to the next level',
            buttons: [{
                    text: 'Continue',
                    role: 'Continue',
                    handler: () => {
                        this.startRound(topleft);
                        this.gameHasBegun = true;
                    }
                }]
        }).then(alert => alert.present());
    }
    // begins the timer
    startTimer() {
        this.inittime = this.timer;
    }
    // figures out the radius of the buttons
    getRadius() {
        return this.sortThemService.getRadiusConstant();
    }
    // fetches the lvel from the service
    getLevel() {
        return [this.sortThemService.level];
    }
    // async presentAlert(message) {
    //   const alert = await this.alertCtrl.create({
    //     header: 'Score:' + this.score,
    //     message: 'You need' + message + 'points to go to the next level',
    //     buttons: ['Continue']
    //   })
    //   await alert.present()
    // }
    // ends the game
    onEndGame() {
        this.gameHasBegun = false;
        this.sortThemService.endGame();
        this.score = 0;
    }
    // resumes the game
    onResume() {
        this.timer = this.pausetimer;
    }
    // quits to the home page
    onQuit() {
        this.onEndGame();
        this.inittime = 0;
        this.router.navigate(["/home"]);
    }
    // pauses the game timer
    onPause() {
        this.pausetimer = this.timer;
    }
    // begins the round with information from the service
    startRound(topleft) {
        this.gamewrongs = 0;
        this.top = topleft.top;
        this.left = topleft.left;
        this.array = topleft.array;
        this.startTimer();
        console.log(this.array);
        console.log("top: " + this.top);
        console.log("left: " + this.left);
    }
    // what happens when a button is clicked and the color change and ends game if all answers are selected
    onClickChip(chip, index) {
        let currentcard = this.array[this.currentIndex].text;
        console.log(currentcard, chip);
        if (chip === currentcard) {
            console.log(chip, currentcard);
            this.clickedcards.push(chip);
            this.array[this.currentIndex].color = "success";
            this.currentIndex++;
            if (this.currentIndex === this.numberofchips) {
                this.allAnswersSelected();
            }
        }
        if (chip != currentcard) {
            this.wrongChipSelected(index, chip);
        }
        console.log(this.currentIndex);
    }
    // stops the timer and ends the game and starts a new round when all the answers are selected
    allAnswersSelected() {
        let endingtime = this.timer;
        let prevelevel = [this.sortThemService.level].slice(0, 1);
        this.determineScore();
        this.times.push(endingtime - this.inittime);
        let increaselevel = this.sortThemService.increaseLevel(this.score);
        if (increaselevel === true) {
            console.log(this.times);
            this.gameHasBegun = false;
        }
        else {
            if (this.score >= this.gameService.scoringconstant) {
                this.score = 0;
            }
            let topleft = this.sortThemService.generateCoordinates();
            let pointsneeded = null;
            if (this.excerciseMode === true) {
                if (this.sortThemService.level === this.levels[1]) {
                    this.eventemitter.onRoundFinished({ continue: true, score: this.score });
                }
                this.sortThemService.level++;
            }
            else {
                pointsneeded = this.gameService.scoringconstant - this.score;
                this.gameService.storeLevelScore(this.gameno, this.score, this.sortThemService.level, this.excerciseMode, (endingtime - this.inittime) / 1000, this.gamewrongs, this.gamescore, prevelevel[0]);
            }
            const alert = this.alertCtrl.create({
                header: 'Level: ' + this.sortThemService.getLevel(),
                message: 'You need ' + pointsneeded + ' points to go to the next level',
                buttons: [{
                        text: 'Continue',
                        role: 'Continue',
                        handler: () => {
                            this.startRound(topleft);
                            this.clickedcards = [];
                            this.currentIndex = 0;
                        }
                    }]
            }).then(alert => alert.present());
        }
    }
    // what happens when a wrong button is selected
    wrongChipSelected(index, chip) {
        this.gamewrongs++;
        let currentcolor = this.array[index].color;
        this.array[index].color = "danger";
        this.wrongselected.push(chip);
        setTimeout(() => {
            this.array[index].color = currentcolor;
        }, 300);
    }
    // figures out the score after a round
    determineScore() {
        this.gamescore = this.gameService.getScore(20, this.gamewrongs);
        if (this.gamescore < 0) {
            this.gamescore = 0;
        }
        console.log(this.gamescore);
        this.score = this.score + this.gamescore;
    }
    // disables a correct chip
    isDisabled(chip) {
        for (let card of this.clickedcards) {
            if (chip === card) {
                return true;
            }
        }
        return false;
    }
    // unsubscribes when destroyed
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.database.unsubscribe();
    }
    // unsubscribes when leave
    ionViewDidLeave() {
        this.subscription.unsubscribe();
        this.database.unsubscribe();
    }
};
SortThemPage.ctorParameters = () => [
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _sort_them_service__WEBPACK_IMPORTED_MODULE_4__.SortThemService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService }
];
SortThemPage.propDecorators = {
    excerciseMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['excerciseSet',] }],
    levels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['levels',] }]
};
SortThemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sort-them',
        template: _raw_loader_sort_them_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sort_them_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SortThemPage);



/***/ }),

/***/ 21550:
/*!***********************************************************!*\
  !*** ./src/app/games-list/sort-them/sort-them.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortThemService": function() { return /* binding */ SortThemService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 80476);



let SortThemService = class SortThemService {
    // figures out the dimensions of the screen when the service is created
    constructor(platform) {
        this.platform = platform;
        this.numberofchips = 20;
        this.level = 1;
        this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.smallalphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.radiusconstant = 55;
        this.heightconstant = 70;
        this.bottomconstant = 55;
        this.colors = ["primary", "secondary", "tertiary", "warning", "danger", "dark", "medium", "light"];
        this.prevscore = 0;
        this.getDimensions();
    }
    // figures out the radius and returns it
    getRadiusConstant() {
        return this.radiusconstant;
    }
    // returns the game level
    getLevel() {
        return this.level;
    }
    // figures out the button size from the screen size
    getDimensions() {
        this.height = +this.platform.height();
        this.width = +this.platform.width();
        let mode = this.platform.platforms();
        console.log(mode);
        let platform;
        for (let item of mode) {
            if (item === "ios") {
                this.heightconstant = 110;
                platform = "ios";
            }
            if (item === "android") {
                this.heightconstant = 130;
                this.bottomconstant = 75;
                platform = "android";
            }
        }
        if (this.width * this.height >= 250126) {
            if (platform === "ios") {
                this.bottomconstant = 125;
                if (this.width * this.height >= 786432) {
                    this.bottomconstant = 175;
                }
            }
        }
    }
    // makes the radius from the height of the screen
    generateRadiusConstant() {
        let height = this.height - this.heightconstant - this.bottomconstant;
        let radconst = height / 10;
        if (radconst > 75) {
            radconst = 75;
        }
        this.radiusconstant = radconst;
        console.log(this.radiusconstant);
    }
    // generates coordinates for the buttons 
    generateCoordinates() {
        this.getDimensions();
        this.generateRadiusConstant();
        let top = [];
        let left = [];
        let array = [];
        let toppossibilities = [];
        for (let tops = this.heightconstant; tops < this.height - this.bottomconstant;) {
            toppossibilities.push(tops);
            tops = tops + this.radiusconstant;
        }
        let currenttoplength = toppossibilities.length;
        for (let i = 1; i < this.numberofchips + 1; i++) {
            array.push({ text: 1, color: "light", shape: "round" });
            let currentop = Math.round(Math.random() * (toppossibilities.length - 1));
            let currentleft = Math.round(Math.random() * (this.width - 80));
            top.push(toppossibilities[currentop]);
            left.push(currentleft);
            console.log(toppossibilities, currentop, toppossibilities[currentop], toppossibilities[1]);
            toppossibilities.splice(currentop, 1);
        }
        let topleft = this.seriesFixArray(currenttoplength, top, left);
        top = topleft.top;
        left = topleft.left;
        array = this.getArray(array);
        return { top: top, left: left, array: array };
    }
    // fixes the array if too many or too few coordinates are generated
    seriesFixArray(currenttoplength, top, left) {
        console.log(currenttoplength);
        if (currenttoplength < this.numberofchips) {
            let topleft = this.fixArray(currenttoplength, top, left);
            top = topleft.top;
            left = topleft.left;
            let tobefixed = top.length;
            // for (let item of top) {
            //   if (item === undefined) {
            //     tobefixed = tobefixed - 1
            //   }
            // }
            // if (tobefixed < top.length) {
            //   let lefttop = this.seriesFixArray(tobefixed, top, left)
            //   top = lefttop.top
            //   left = lefttop.left
            // }
        }
        return { top, left };
    }
    // part of the series fix array function that generates new coordinates if the number of necessary buttons is greater than the number of coordinates generated
    fixArray(currenttoplength, top, left) {
        let numtobefixed = top.length - currenttoplength;
        top.splice(top.length - numtobefixed, numtobefixed);
        left.splice(left.length - numtobefixed, numtobefixed);
        let i = 0;
        let possibilities = [];
        for (let coordinate of left) {
            if (coordinate + this.radiusconstant * 2 < this.width - 80) {
                possibilities.push({ top: top[i], left: coordinate + this.radiusconstant + 25 + Math.round(Math.random() * (this.width - 80 - (coordinate + this.radiusconstant * 2))) });
            }
            if (coordinate - this.radiusconstant * 2 > 0) {
                possibilities.push({ top: top[i], left: coordinate - this.radiusconstant - 25 - Math.round(Math.random() * (coordinate - this.radiusconstant * 2)) });
            }
            i++;
        }
        for (let i = 0; i < numtobefixed; i++) {
            let currenttopleft = possibilities.splice(possibilities.length - 1, 1);
            // if (currenttopleft.length === 0) {
            //   currenttopleft = [{top: undefined, left: undefined}]
            // }
            top.push(currenttopleft[0].top);
            left.push(currenttopleft[0].left);
        }
        return { top, left };
    }
    // based on level this function makes the proper array of numbers/ letters
    getArray(array) {
        let startindex = 0;
        let numbersorletters = 0;
        let multiple = 1;
        let sevenoreight = this.level === 7 || this.level === 8;
        if (this.level === 4) {
            numbersorletters = Math.round(Math.random()) + 1;
        }
        if (sevenoreight) {
            numbersorletters = 1;
            multiple = Math.round(Math.random() * 5) + multiple + 1;
        }
        if (this.level === 4 || sevenoreight) {
            if (numbersorletters === 1) {
                startindex = Math.round(Math.random() * 10);
            }
            if (numbersorletters === 2) {
                startindex = Math.round(Math.random() * 6);
            }
        }
        if (this.level === 6 || this.level === 9) {
            startindex = Math.round(Math.random() * 6);
        }
        if (this.level === 10) {
            startindex = 2 * Math.round(Math.random() * 3);
        }
        console.log(array);
        for (let i = 1; i < array.length + 1; i++) {
            if (this.level === 1 || numbersorletters === 1) {
                array[i - 1].text = multiple * (i) + startindex;
            }
            if (this.level === 2 || numbersorletters === 2) {
                array[i - 1].text = this.alphabet[i - 1 + startindex];
            }
            if (this.level === 3) {
                array[i - 1].text = this.smallalphabet[i - 1 + startindex];
            }
            if (this.level === 5 || this.level === 6) {
                if (i % 2 === 1) {
                    array[i - 1].text = (i + 1) / 2 + startindex;
                }
                if (i % 2 === 0) {
                    array[i - 1].text = this.alphabet[i / 2 - 1 + startindex];
                }
            }
            if (this.level === 9) {
                switch (i % 3) {
                    case 1:
                        array[i - 1].text = (i - 1) / 3 + startindex + 1;
                        break;
                    case 2:
                        array[i - 1].text = this.alphabet[(i - 2) / 3 + startindex];
                        break;
                    case 0:
                        array[i - 1].text = this.smallalphabet[(i - 3) / 3 + startindex];
                        break;
                }
            }
            if (this.level === 10) {
                console.log(i % 4);
                switch (i % 4) {
                    case 1:
                        array[i - 1].text = (0.5 * i) + 0.5 + startindex;
                        break;
                    case 2:
                        array[i - 1].text = (0.5 * i) + 1 + startindex;
                        break;
                    case 3:
                        array[i - 1].text = this.alphabet[0.5 * (i - 3) + startindex];
                        break;
                    case 0:
                        array[i - 1].text = this.smallalphabet[0.5 * i - 1 + startindex];
                        break;
                }
            }
            if (this.level === 6 || this.level > 7) {
                array[i - 1].color = this.colors[Math.round(Math.random() * this.colors.length - 1)];
            }
        }
        console.log(array);
        return array;
    }
    // level scenarios when it is level 10 or the score reaches 200
    increaseLevel(score) {
        if (this.level === 10) {
            return true;
        }
        if (score >= 200) {
            this.level++;
        }
    }
    // resets level
    endGame() {
        this.level = 1;
    }
};
SortThemService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.Platform }
];
SortThemService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SortThemService);



/***/ }),

/***/ 39534:
/*!**********************************************************!*\
  !*** ./src/app/games-list/sort-them/sort-them.page.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".absolute {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnQtdGhlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic29ydC10aGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYnNvbHV0ZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufSJdfQ== */");

/***/ }),

/***/ 41505:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/sort-them/sort-them.page.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n\n<app-description [(gameHasBegun)]=\"gameHasBegun\"  [(gameno)]=\"gameno\"></app-description>\n\n<app-score *ngIf=\"gameHasBegun\" [(score)]=\"score\" [(level)]=\"this.getLevel()[0]\"></app-score>\n\n<ion-content *ngIf=\"!gameHasBegun && !excerciseMode\"></ion-content>\n\n<!-- the menu functions and UI needs to be tested for this gamme -->\n\n<!-- 20 Buttons -->\n<!-- <ion-content *ngIf=\"gameHasBegun\">\n    <ion-button \n        mode=\"ios\"\n        style=\"text-transform: none;\"\n        [color]=\"item.color\" \n        shape=\"round\" \n        *ngFor=\"let item of array; index as i\" \n        (click)=\"onClickChip(item.text, i)\" \n        [disabled]=\"isDisabled(item.text)\" \n        class=\"absolute\" \n        [ngStyle]=\"{'top': top[i] + 'px','left': left[i] + 'px','width': getRadius() + 10 + 'px', 'height': getRadius() + 'px', 'font-size': getRadius()/3.5 + 'px'}\">\n        {{ item.text }}\n    </ion-button>\n    <ion-label><p class=\"ion-text-center\">{{ instructionsarray[getLevel()[0] - 1] }}</p></ion-label>\n\n</ion-content> -->\n\n<!-- This part is the main code that codes for all 20 buttons. It is an ngFor and has many customizable aspects -->\n<ion-content *ngIf=\"gameHasBegun\" scrollY=\"false\">\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let item of array; index as i\" >\n                <ion-button\n                mode=\"ios\"\n                style=\"text-transform: none;\"\n                [color]=\"item.color\" \n                shape=\"round\" \n                (click)=\"onClickChip(item.text, i)\" \n                [disabled]=\"isDisabled(item.text)\" \n                class=\"absolute\" \n                [ngStyle]=\"{'top': top[i] + 'px','left': left[i] + 'px','width': getRadius() + 10 + 'px', 'height': getRadius() + 'px', 'font-size': (getRadius()/3.5 + 4) + 'px'}\">\n                    {{ item.text }}\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<!-- <ion-footer *ngIf=\"gameHasBegun\" translucent=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Level: {{getLevel()}}; Score: {{score}}\n        </ion-title>\n    </ion-toolbar>\n</ion-footer> -->\n\n<!-- <app-score *ngIf=\"gameHasBegun\" [(level)]=\"getLevel()\" [(score)]=\"score\"></app-score> -->\n\n<ion-footer>\n    <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n    <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_games-list_sort-them_sort-them_module_ts-es2015.js.map