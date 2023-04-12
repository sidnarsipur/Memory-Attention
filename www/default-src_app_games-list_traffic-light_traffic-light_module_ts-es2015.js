(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_traffic-light_traffic-light_module_ts"],{

/***/ 16975:
/*!****************************************************!*\
  !*** ./src/app/games-list/traffic-light/levels.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Levels": function() { return /* binding */ Levels; }
/* harmony export */ });
// this contains the time, ratio of red to green to yellow, the interval between lights and the instructions for each level
const Levels = [
    //level 1
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 2000,
        totallength: 30000
    },
    //level 2
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 2000,
        totallength: 30000
    },
    //level 3
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 1000,
        totallength: 30000
    },
    //level 4
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 1000,
        totallength: 30000
    },
    //level 5
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 2000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 6
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 2000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 7
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 1000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 8
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 1000,
        totallength: 30000,
        mode: "double-up"
    },
    //level 9
    {
        instructions: "Only click if blank appears!",
        ratio: [1, 1, 1],
        interval: 500,
        totallength: 30000,
        mode: "double-up"
    },
    //level 10
    {
        instructions: "Only click if blank appears!",
        ratio: [5, 2, 2],
        interval: 500,
        totallength: 30000,
        mode: "double-up"
    },
];


/***/ }),

/***/ 18864:
/*!**************************************************************************!*\
  !*** ./src/app/games-list/traffic-light/traffic-light-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrafficLightPageRoutingModule": function() { return /* binding */ TrafficLightPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _traffic_light_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traffic-light.page */ 47635);




const routes = [
    {
        path: '',
        component: _traffic_light_page__WEBPACK_IMPORTED_MODULE_0__.TrafficLightPage
    }
];
let TrafficLightPageRoutingModule = class TrafficLightPageRoutingModule {
};
TrafficLightPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrafficLightPageRoutingModule);



/***/ }),

/***/ 94348:
/*!******************************************************************!*\
  !*** ./src/app/games-list/traffic-light/traffic-light.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrafficLightPageModule": function() { return /* binding */ TrafficLightPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _traffic_light_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traffic-light-routing.module */ 18864);
/* harmony import */ var _traffic_light_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traffic-light.page */ 47635);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);








let TrafficLightPageModule = class TrafficLightPageModule {
};
TrafficLightPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _traffic_light_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrafficLightPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_traffic_light_page__WEBPACK_IMPORTED_MODULE_1__.TrafficLightPage],
        exports: [_traffic_light_page__WEBPACK_IMPORTED_MODULE_1__.TrafficLightPage],
    })
], TrafficLightPageModule);



/***/ }),

/***/ 47635:
/*!****************************************************************!*\
  !*** ./src/app/games-list/traffic-light/traffic-light.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrafficLightPage": function() { return /* binding */ TrafficLightPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_traffic_light_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./traffic-light.page.html */ 92874);
/* harmony import */ var _traffic_light_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traffic-light.page.scss */ 8211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/eventemitter.service */ 64874);
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ 16975);
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/game.service */ 5162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);









let TrafficLightPage = class TrafficLightPage {
    constructor(eventemitter, gameService, router) {
        this.eventemitter = eventemitter;
        this.gameService = gameService;
        this.router = router;
        this.gameno = 3;
        this.gameHasBegun = false;
        this.path = "../../assets/traffic-light/";
        this.colors = ['Green', 'Yellow', 'Red'];
        this.isHidden = false;
        this.possibilities = [];
        this.timer = 0;
        this.red = "#BB1E10";
        this.yellow = "#FAD201";
        this.green = "#33A532";
        this.grey = "#8E9291";
        this.currentRed = this.grey;
        this.currentYellow = this.grey;
        this.currentGreen = this.grey;
        this.clicked = false;
        this.round = 1;
        this.interval = 3000;
        this.totallength = 120000;
        this.wrong = 0;
        this.correct = 0;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.level = 1;
        this.score = 0;
        this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__.Levels;
        this.countdowntimer = 4;
        this.instructions = this.levels[this.level - 1].instructions;
        this.countdownTimerIsHidden = true;
        this.instructionsAreHidden = true;
        this.doubleupmode = false;
        this.index = 0;
        this.database = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.startButtonIsDisabled = false;
        this.excerciseMode = false;
    }
    ngOnInit() {
        // gets preexisting level and score data from database
        this.gameService.getLevelScore(this.gameno, this.excerciseMode);
        this.database = this.eventemitter.databaseemitter.subscribe(value => {
            if (value.level) {
                this.level = value.level;
            }
            if (value.score) {
                this.score = value.score;
            }
        });
        // controls the menu functions
        this.subscription = this.eventemitter.gameStateSubj.subscribe(value => {
            switch (value) {
                case 'start':
                    this.onStart();
                    break;
                case 'restart':
                    this.startButtonIsDisabled = true;
                    this.onEndGame();
                    setTimeout(() => {
                        this.onStart();
                        this.startButtonIsDisabled = false;
                    }, 300);
                    break;
                case 'quit':
                    this.onEndGame();
                    this.router.navigate(['/home']);
            }
        });
        // what to do if it is an exercise set
        if (this.excerciseMode) {
            this.level = this.exlevels[0];
            this.score = 0;
        }
    }
    // ends the game
    onEndGame() {
        this.gameHasBegun = false;
        clearInterval(this.timerfunc);
    }
    // based on level, it determines the ratio of reds to greens to yellow
    determineRatio() {
        if (this.doubleupmode === true) {
            let colors = this.colors.slice(0, this.colors.length);
            console.log(colors);
            this.colorneeded = [colors.splice(Math.round(Math.random() * (colors.length - 1)), 1)[0], colors.splice(Math.round(Math.random() * (colors.length - 1)), 1)[0]];
            colors = this.colors;
            console.log(this.colorneeded);
            switch (this.colorneeded.join(" ")) {
                case "Green Yellow":
                    return this.levels[this.level - 1].ratio;
                    break;
                case "Yellow Green":
                    return this.levels[this.level - 1].ratio;
                    break;
                case "Green Red":
                    return [this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0], this.levels[this.level - 1].ratio[1]];
                    break;
                case "Red Green":
                    return [this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0], this.levels[this.level - 1].ratio[1]];
                    break;
                case "Red Yellow":
                    return [this.levels[this.level - 1].ratio[1], this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0]];
                    break;
                case "Yellow Red":
                    return [this.levels[this.level - 1].ratio[1], this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0]];
                    break;
            }
        }
        else {
            this.colorneeded = this.colors[Math.round(Math.random() * (this.colors.length - 1))];
            let dominantcolor = this.colorneeded;
            switch (dominantcolor) {
                case "Green":
                    return this.levels[this.level - 1].ratio;
                    break;
                case "Yellow":
                    return [this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0], this.levels[this.level - 1].ratio[1]];
                    break;
                case "Red":
                    return [this.levels[this.level - 1].ratio[1], this.levels[this.level - 1].ratio[2], this.levels[this.level - 1].ratio[0]];
                    break;
            }
        }
    }
    // creates the random array of colors
    generateColors() {
        let ratios = this.determineRatio();
        console.log(this.colorneeded, ratios);
        let greenratio = ratios[0];
        let yellowratio = ratios[1];
        let redratio = ratios[2];
        let totalratio = greenratio + yellowratio + redratio;
        let possibilitiesarr = [];
        let possibilities = Math.ceil(this.totallength / this.interval);
        if (this.doubleupmode) {
            possibilities = Math.ceil(this.totallength / (2 * this.interval));
        }
        console.log(possibilities);
        let length = possibilities;
        this.possibilitiesnumber = possibilities;
        //gets total number of reds yellows and greens    
        let yellowpossibilities = Math.floor(possibilities * (yellowratio / totalratio));
        let greenpossibilities = Math.floor(possibilities * (greenratio / totalratio));
        let redpossibilities = Math.floor(possibilities * (redratio / totalratio));
        //randomly assigns leftovers to red green or yellow
        let leftovers = possibilities - (yellowpossibilities + greenpossibilities + redpossibilities);
        if (leftovers > 0) {
            for (let i = 0; i < leftovers; i++) {
                let randnum = Math.round(Math.random() * 2);
                switch (randnum) {
                    case 0:
                        greenpossibilities++;
                        break;
                    case 1:
                        yellowpossibilities++;
                        break;
                    case 2:
                        redpossibilities++;
                }
            }
        }
        console.log(yellowpossibilities, greenpossibilities, redpossibilities);
        let greenyellow;
        let greenred;
        let redyellow;
        if (this.doubleupmode === true) {
            greenyellow = Math.round(greenpossibilities / 2);
            greenred = Math.round(yellowpossibilities / 2);
            redyellow = Math.round(redpossibilities / 2);
        }
        //randomly asigns red, green and yellow to different positions in an array
        for (let i = 0; i < length; i++) {
            let current = "";
            let randnum = Math.round(Math.random() * (possibilities - 1));
            if (randnum < greenpossibilities) {
                if (this.doubleupmode === true) {
                    let randnum = Math.round(Math.random() * greenpossibilities) + 1;
                    if (randnum > greenyellow) {
                        current = ["Yellow", "Green"];
                    }
                    else {
                        current = ["Green", "Yellow"];
                        greenyellow--;
                    }
                }
                else {
                    current = "Green";
                }
                greenpossibilities--;
            }
            else if (randnum < yellowpossibilities + greenpossibilities) {
                if (this.doubleupmode === true) {
                    let randnum = Math.round(Math.random() * greenpossibilities) + 1;
                    if (randnum > greenred) {
                        current = ["Red", "Green"];
                    }
                    else {
                        current = ["Green", "Red"];
                        greenred--;
                    }
                }
                else {
                    current = "Yellow";
                }
                yellowpossibilities--;
            }
            else if (randnum < possibilities) {
                if (this.doubleupmode === true) {
                    let randnum = Math.round(Math.random() * greenpossibilities);
                    if (randnum > redyellow) {
                        current = ["Red", "Yellow"];
                    }
                    else {
                        current = ["Yellow", "Red"];
                        redyellow--;
                    }
                }
                else {
                    current = "Red";
                }
                redpossibilities--;
            }
            possibilities--;
            if (this.doubleupmode) {
                for (let item of current) {
                    possibilitiesarr.push(item);
                }
                this.possibilitiesall = possibilitiesarr.slice(0, possibilitiesarr.length);
            }
            else {
                possibilitiesarr.push(current);
            }
        }
        console.log(possibilitiesarr);
        this.possibilities = possibilitiesarr;
    }
    // creates a random color
    getRandomColor() {
        console.log(this.possibilities);
        this.index++;
        this.current = this.possibilities.splice(0, 1)[0];
        switch (this.current) {
            case 'Green':
                this.currentGreen = this.green;
                break;
            case 'Yellow':
                this.currentYellow = this.yellow;
                break;
            case 'Red':
                this.currentRed = this.red;
                break;
        }
    }
    // starts the game and controls the intervals that lights are displayed
    onStart() {
        if (this.levels[this.level - 1].mode === "double-up") {
            this.doubleupmode = true;
        }
        else {
            this.doubleupmode = false;
        }
        this.interval = this.levels[this.level - 1].interval;
        this.totallength = this.levels[this.level - 1].totallength;
        this.generateColors();
        this.gameHasBegun = true;
        this.countdownTimerIsHidden = false;
        this.instructionsAreHidden = false;
        let countdown = setInterval(() => {
            if (this.instructionsAreHidden === false) {
                this.instructionsAreHidden = true;
            }
            this.countdowntimer--;
            if (this.countdowntimer === 0) {
                this.countdowntimer = "Go!";
            }
        }, 1000);
        setTimeout(() => {
            clearInterval(countdown);
            this.countdownTimerIsHidden = true;
            this.timerfunc = setInterval(() => {
                this.timer = this.timer + this.interval;
                console.log(this.timer);
                if (this.timer > this.totallength) {
                    clearInterval(this.timerfunc);
                    console.log(this.correct, this.wrong);
                    this.endRound();
                }
                this.getRandomColor();
                setTimeout(() => {
                    this.resetMatch();
                }, this.interval / 2);
            }, this.interval);
        }, 4900);
    }
    // checks if the light is clicked when its supposed to or is clicked when its not suppossed to be clicked and records that
    checkIfClicked() {
        if (this.clicked === false) {
            if (this.doubleupmode === true) {
                let array = [this.possibilitiesall[this.index - 2], this.current];
                console.log(array, this.colorneeded);
                if (array[0] === this.colorneeded[0] && array[1] === this.colorneeded[1]) {
                    console.log('incorrect, not clicked');
                    this.wrong++;
                }
            }
            else {
                if (this.current === this.colorneeded) {
                    console.log('incorrect, not clicked');
                    this.wrong++;
                }
            }
        }
    }
    // ends the round and figures out the score and the levels
    endRound() {
        //score and levels here
        this.index = 0;
        this.timer = 0;
        this.countdowntimer = 4;
        let currentscore = this.gameService.getScore(this.possibilitiesnumber, Math.round(this.wrong * 1.5));
        this.score = this.score + currentscore;
        if (this.excerciseMode) {
            if (this.level === this.exlevels[1]) {
                this.eventemitter.onRoundFinished({ continue: true, score: this.score });
            }
            this.level++;
        }
        else {
            let prevlevel = [this.level].slice(0, 1);
            console.log(this.score);
            if (this.score > this.gameService.scoringconstant) {
                this.level++;
                this.score = 0;
            }
            this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseMode, 120, this.wrong, currentscore, prevlevel[0]);
        }
        this.onStart();
    }
    // resets the game to begin the next round
    resetMatch() {
        this.round++;
        console.log(this.round);
        this.checkIfClicked();
        this.current = "";
        this.resetColor();
        this.clicked = false;
    }
    // turns all colors back to grey
    resetColor() {
        this.currentGreen = this.grey;
        this.currentRed = this.grey;
        this.currentYellow = this.grey;
    }
    // what happens when something is clicked
    onTap(color) {
        if (this.clicked === false) {
            if (this.doubleupmode === true) {
                switch (color) {
                    case this.colorneeded[1]:
                        if (color === this.current) {
                            let previous = this.possibilitiesall[this.index - 2];
                            if (previous === this.colorneeded[0]) {
                                this.correct++;
                                console.log('correct');
                            }
                            else {
                                this.wrong++;
                            }
                        }
                        else {
                            this.wrong++;
                        }
                        break;
                    case "":
                        console.log('greyclicked');
                        break;
                    default:
                        console.log('incorrect', this.current);
                        this.wrong++;
                }
            }
            else {
                switch (color) {
                    case this.colorneeded:
                        if (color === this.current) {
                            console.log('correct');
                            this.correct++;
                        }
                        else {
                            this.wrong++;
                        }
                        this.current = "";
                        break;
                    case "":
                        console.log('greyclicked');
                        break;
                    default:
                        console.log('incorrect', this.current);
                        this.wrong++;
                }
            }
            this.resetColor();
        }
        this.clicked = true;
    }
    // unsubscribes and clears the timer when the component is left
    ionViewDidLeave() {
        this.subscription.unsubscribe();
        clearInterval(this.timerfunc);
    }
    // unsubscribes and clears the timer when the component is destroyed
    ngOnDestroy() {
        this.subscription.unsubscribe();
        clearInterval(this.timerfunc);
    }
};
TrafficLightPage.ctorParameters = () => [
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService },
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_4__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
TrafficLightPage.propDecorators = {
    excerciseMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['excerciseSet',] }],
    exlevels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['levels',] }]
};
TrafficLightPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-traffic-light',
        template: _raw_loader_traffic_light_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_traffic_light_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrafficLightPage);



/***/ }),

/***/ 8211:
/*!******************************************************************!*\
  !*** ./src/app/games-list/traffic-light/traffic-light.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  size: 10px;\n}\n\n.round {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.text-large {\n  font-weight: bold;\n  font-size: 1.5in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWZmaWMtbGlnaHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InRyYWZmaWMtbGlnaHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcbiAgICBzaXplOiAxMHB4O1xufVxuXG4ucm91bmQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4udGV4dC1sYXJnZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVpbjtcbn0iXX0= */");

/***/ }),

/***/ 92874:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/traffic-light/traffic-light.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n\n<app-description [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-description>\n\n\n<!--  the instructions that are shown at the top during the game-->\n<div class=\"ion-text-center\" *ngIf=\"gameHasBegun && countdownTimerIsHidden\">\n  <ion-label >{{ doubleupmode ? instructions.replace(\"blank\", colorneeded[0] + \" then \" + colorneeded[1]) : instructions.replace(\"blank\", colorneeded) }}</ion-label>\n</div>\n\n<!-- blank ion content needed so UI doesn't get messed up -->\n<ion-content *ngIf=\"!gameHasBegun && !excerciseMode\"></ion-content>\n\n<!--  instructions and timer that are shown at the start -->\n<ion-content *ngIf=\"!countdownTimerIsHidden && gameHasBegun\" scroll-Y=\"disabled\">\n  <ion-grid >\n    <ion-row *ngIf=\"!instructionsAreHidden\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label style=\"font-weight: bold; font-size: 0.5in\">{{ doubleupmode ? instructions.replace(\"blank\", colorneeded[0] + \" then \" + colorneeded[1]) : instructions.replace(\"blank\", colorneeded) }}</ion-label>\n      </ion-col>\n    </ion-row>\n    <div style=\"display: flex; align-items: center; justify-content: center;\" *ngIf=\"instructionsAreHidden\">\n      <ion-label class=\"text-large\">{{ countdowntimer }}</ion-label>\n    </div>\n  </ion-grid>\n\n</ion-content>\n\n<app-score *ngIf=\"gameHasBegun && countdownTimerIsHidden\" [(level)]=\"level\" [(score)]=\"score\"></app-score>\n\n<ion-content *ngIf=\"gameHasBegun && countdownTimerIsHidden\" scroll-Y=\"disabled\">\n\n<!-- The menu functions and testing is required -->\n\n  <!-- the traffic light itself -->\n<ion-grid>\n  <div style=\"display: flex; align-items: top; justify-content: center;\">\n    <ion-card class=\"ion-text-center\" [ngStyle]=\"{'width': '150px'}\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-chip (click)=\"onTap('Red')\" class=\"round\" size=\"medium\" [ngStyle]=\"{'background-color': currentRed}\"></ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-chip (click)=\"onTap('Yellow')\" class=\"round\" size=\"medium\" [ngStyle]=\"{'background-color': currentYellow}\"></ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-chip (click)=\"onTap('Green')\" class=\"round\" size=\"medium\" [ngStyle]=\"{'background-color': currentGreen}\"></ion-chip>\n          </ion-col>\n        </ion-row>\n    </ion-card>\n  </div>      \n</ion-grid>\n</ion-content>\n\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n  <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_games-list_traffic-light_traffic-light_module_ts-es2015.js.map