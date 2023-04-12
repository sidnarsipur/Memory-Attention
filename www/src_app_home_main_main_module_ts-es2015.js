(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_home_main_main_module_ts"],{

/***/ 84443:
/*!**************************************************!*\
  !*** ./src/app/home/main/main-routing.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": function() { return /* binding */ MainPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 20960);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 91236:
/*!******************************************!*\
  !*** ./src/app/home/main/main.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": function() { return /* binding */ MainPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 84443);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 20960);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 20960:
/*!****************************************!*\
  !*** ./src/app/home/main/main.page.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": function() { return /* binding */ MainPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 73452);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 24163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/game.service */ 5162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_firstscreen_firstscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/firstscreen/firstscreen.component */ 10995);
/* harmony import */ var src_app_shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/eventemitter.service */ 64874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);










let MainPage = class MainPage {
    constructor(gameService, router, modalController, routerOutlet, eventemitter) {
        this.gameService = gameService;
        this.router = router;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.eventemitter = eventemitter;
        this.sessionData = {};
        this.index = 0;
        this.detailMode = false;
        this.gamesArray = [];
        this.chipIsClicked = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.daysOfWeek = ["M", "Tu", "W", "Th", "F", "Sa", "Su"];
        this.colorsOfWeek = [];
        this.r = 'Rewards';
        this.g = 'Games';
        this.s = 'Statistics';
    }
    ngOnInit() {
        // if they sart the game for the first time it shows the welcome screen and it also sets default path to this page
        this.gamesArray = this.gameService.getGames();
        let theFirstTime = localStorage.getItem('firstTime');
        if (theFirstTime) {
            this.firstTime = false;
        }
        else {
            this.firstTime = true;
        }
        if (this.firstTime === true) {
            this.presentModal();
            localStorage.setItem('firstTime', 'true');
        }
        localStorage.setItem('navpath', 'main');
        // this.gameService.getSessionData()
        // console.log('ngOnInit')
        // this.subscription = this.eventemitter.databaseemitter.subscribe(value => {
        //   let newArray = {}
        //     console.log(value)
        //     console.log('databasemitter')
        //     let gamesArray = this.gamesArray
        //     for (let game of gamesArray) {
        //       newArray[game.name] = []
        //     }
        //     for (let session of value) {
        //       if (newArray[session.game]) {
        //         newArray[session.game].push(     
        //           {
        //             date: session.date,
        //             level: session.level,
        //             score: session.score,
        //             time: session.time,
        //             wrongs: session.wrongs
        //           })
        //       }
        //     }
        //     this.sessionData = newArray
        //     this.filterForThisWeek()
        // })
    }
    // sets the default path to this page and it also fetches the sessions from the database and forms the activity log
    ionViewDidEnter() {
        localStorage.setItem('navpath', 'main');
        this.gameService.getSessionData();
        console.log('ngOnInit');
        this.subscription = this.eventemitter.databaseemitter.subscribe(value => {
            console.log(value);
            console.log('databasemitter');
            let newArray = {};
            let gamesArray = this.gamesArray;
            for (let game of gamesArray) {
                newArray[game.name] = [];
            }
            for (let session of value) {
                if (newArray[session.game]) {
                    newArray[session.game].push({
                        date: session.date,
                        level: session.level,
                        score: session.score,
                        time: session.time,
                        wrongs: session.wrongs
                    });
                }
            }
            this.sessionData = newArray;
            this.filterForThisWeek();
        });
    }
    //
    filterForThisWeek() {
        let sessiondays = [];
        let playeddaysofweek = [];
        let currdate = new Date();
        let currday = currdate.getDay();
        let startOfWeekDay = currdate.getDate() - currday + (currday == 0 ? -6 : 1);
        let startOfWeek = new Date(currdate.setDate(startOfWeekDay)).setHours(0, 0, 0, 0);
        console.log(new Date(startOfWeek), currday == 0 ? -6 : 1);
        console.log(new Date().getDay());
        let thisweeksgames = [];
        for (let game of this.gamesArray) {
            for (let item of this.sessionData[game.name]) {
                if (new Date(item.date).valueOf() > startOfWeek) {
                    thisweeksgames.push(new Date(item.date));
                    sessiondays.push(new Date(item.date).getDay() + (new Date(item.date).getDay() == 0 ? 7 : 0));
                }
            }
        }
        for (let i = 0; i < 7; i++) {
            playeddaysofweek.push('');
            if (i <= new Date().getDay() + (currday == 0 ? 7 : 0) - 1) {
                playeddaysofweek[i] = 'red';
            }
            if (sessiondays.includes(i + 1)) {
                playeddaysofweek[i] = 'green';
            }
            if (i > new Date().getDay() + (currday == 0 ? 7 : 0) - 1) {
                playeddaysofweek[i] = 'grey';
            }
        }
        this.colorsOfWeek = playeddaysofweek;
        console.log(playeddaysofweek);
        console.log(thisweeksgames);
    }
    toRewards() {
        //this.router.navigate('/');
    }
    // goes to games list
    toGames() {
        console.log("hi");
        this.router.navigate(['/home/games-list']);
    }
    // goes to unfinished stats page
    toStats() {
        this.router.navigate(['/home.page']);
    }
    // modal for first time
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_firstscreen_firstscreen_component__WEBPACK_IMPORTED_MODULE_3__.FirstscreenComponent,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                showBackdrop: true,
                backdropDismiss: true
            });
            yield modal.present();
        });
    }
    // onClickCard(gamename: string) {
    //   if (!this.chipIsClicked) {
    //     this.router.navigate(['/description/' + gamename])
    //   } else {
    //     this.chipIsClicked = false
    //   }
    // }
    // onClickChip(gamename: string) {
    //   let spacelessgamename = gamename.split(" ").join("")
    //   // removes spaces from gamename so the path is proper
    //   this.chipIsClicked = true
    //   this.router.navigate(['/' + spacelessgamename])
    // }
    onCheckGame(gamename) {
        if (gamename) {
            this.index = gamename;
        }
        console.log(this.sessionData[gamename], gamename);
        this.detailMode = !this.detailMode;
    }
    // unsibscribes
    ionViewDidLeave() {
        console.log('leftview');
        this.subscription.unsubscribe();
    }
    // unsubscribes
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
MainPage.ctorParameters = () => [
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet },
    { type: src_app_shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__.EventemitterService }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);



/***/ }),

/***/ 24163:
/*!******************************************!*\
  !*** ./src/app/home/main/main.page.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container h1 {\n  margin-left: 20px;\n}\n\n.dot1 {\n  height: 25px;\n  width: 25px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dot2 {\n  height: 25px;\n  width: 25px;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\nh3 {\n  display: inline;\n}\n\n.shadow {\n  font-weight: \"Bold\";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n\nion-grid {\n  --ion-grid-padding: 15px;\n  --ion-grid-column-padding: 7px;\n}\n\nion-toolbar {\n  background: var(--ion-color-start) !important;\n}\n\n.green {\n  border-radius: 50%;\n  background-color: #51CD26;\n}\n\n.red {\n  border-radius: 50%;\n  background-color: red;\n}\n\n.grey {\n  border-radius: 50%;\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRTtFQUNFLGlCQUFBO0FBbEJKOztBQXFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbEJKOztBQXFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbEJKOztBQXFCQTtFQUFLLGVBQUE7QUFqQkw7O0FBbUJBO0VBRUksbUJBQUE7RUFFQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFsQko7O0FBcUJBO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtBQWxCSjs7QUFxQkE7RUFDSSw2Q0FBQTtBQWxCSjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBbEJKOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQWxCRiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICNjb250YWluZXIge1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gICB9XG4gIFxuLy8gICAjY29udGFpbmVyIGltZyB7XG4gIFxuLy8gICAgIG1hcmdpbjogMHB4IDEwcHg7XG4vLyAgIH1cbiAgXG4vLyAgIC5idXR0b24tY2xhc3Mge1xuLy8gICAgIHdpZHRoOjEwMHB4IWltcG9ydGFudDtcbi8vICAgfVxuICBcbiAgI2NvbnRhaW5lciBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcbiAgfVxuXG4uZG90MSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuLmRvdDIge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG5oMyB7IGRpc3BsYXk6IGlubGluZTsgfSBcblxuLnNoYWRvd3tcbiAgICAvLyBmb250LWZhbWlseTogJ0xhdG8tTGlnaHQnO1xuICAgIGZvbnQtd2VpZ2h0OiAnQm9sZCc7XG4gICAgXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxNXB4O1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDdweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGFydCkgIWltcG9ydGFudDtcbiAgfVxuXG4uZ3JlZW4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFDRDI2O1xufVxuXG4ucmVkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5ncmV5IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ 73452:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/main.page.html ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"ion-text-center\">\n      <ion-title style=\"font-size: 32px;\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n<!-- \n    <ion-list>\n    <ion-item *ngFor=\"let game of gamesArray\" (click)=\"onClickChip(game.name)\" button>\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"game.thumbnailURL\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{ game.name }}</h3>\n        <p>{{ game.catchphrase }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n  <!--\n  <ion-list *ngIf=\"detailMode\">\n    <ion-item>\n      <ion-icon slot=\"start\" (click)=\"onCheckGame()\" name=\"chevron-back-outline\"></ion-icon>\n      <ion-label>\n        <h1>{{ index }}</h1>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let session of sessionData[index]\">\n      <ion-item>\n        <ion-label>\n          <h3>{{ session.date|date }}</h3>\n          <h3>{{ 'Level: ' + session.level }}</h3>\n          <h3>{{ 'Score: ' + session.score }}</h3>\n          <h3>{{ 'Time: ' + session.time + 's' }}</h3>\n          <h3>{{ 'Wrongs: ' + session.wrongs }}</h3>\n        </ion-label>\n      </ion-item>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"!detailMode\">\n    <ion-item *ngFor=\"let game of gamesArray; index as i\" detail (click)=\"onCheckGame(game.name)\">\n      <ion-label>\n        {{ game.name }}\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n  <!-- <app-spinner></app-spinner> -->\n<!-- </ion-content> -->\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\" size=\"large\">\n      Welcome back!\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header> -->\n\n<!-- stats + rewards needs to be developed -->\n\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"start\">\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- collapsible header -->\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\" >\n    <ion-toolbar color=\"start\">\n      <ion-title class=\"ion-text-center\" size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!--  Welcome Back! sign -->\n  <ion-grid scroll-y=\"false\">\n    <ion-row>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row class=\"padding-top: 20%; padding-bottom: 20%\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label style=\"font-weight: bold; font-size: 22px;\">Welcome back!</ion-label>\n      </ion-col>\n\n    </ion-row >\n    <ion-row>\n      <ion-col></ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col size=\"3.66\" offset=\"0.25\" class=\"ion-text-center\" class=\"shadow\">\n        <ion-list lines=\"none\" class=\"ion-text-center\">\n          <ion-item lines=\"none\">\n            <img src=\"/assets/home icons/rewards.png\" (click)=\"toRewards()\" style=\"width: 100%; height: 80%;\">\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-center\"> {{r}} </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"3.66\" offset=\"0.25\" class=\"ion-text-center\" class=\"shadow\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <img src=\"/assets/home icons/games_logo.png\" (click)=\"toRewards()\" style=\"width: 100%; height: 80%;\">\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-center\"> {{g}} </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"3.66\" offset=\"0.25\" class=\"ion-text-center\" class=\"shadow\">\n        <ion-list lines=\"none\">\n          <ion-item lines=\"none\">\n            <img src=\"/assets/home icons/statistics.png\" (click)=\"toRewards()\" >\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-center\"> {{s}} </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n\n    <!--  the three icons for games statistics and rewards -->\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\" (click)=\"toRewards()\">\n        <div class=\"shadow\" style=\"width: 100%; height: 100%;\">\n          <img src=\"/assets/home icons/rewards.png\" style=\"width: 70%; height: 70%; padding-bottom: 5%;\">\n          <ion-label>{{ r }}</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\" (click)=\"toGames()\">\n        <div class=\"shadow\" style=\"width: 100%; height: 100%;\">\n          <img src=\"/assets/home icons/games_logo.png\" style=\"width: 70%; height: 70%; padding-bottom: 5%;\">\n          <ion-label>{{ g }}</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\" (click)=\"toStats()\">\n        <div class=\"shadow\" style=\"width: 100%; height: 100%;\">\n          <img src=\"/assets/home icons/statistics.png\" style=\"width: 70%; height: 70%; padding-bottom: 5%;\">\n          <ion-label>{{ s }}</ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!--  row of padding -->\n    <ion-row>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <!-- the activity log -->\n    <div style=\"border: 3px solid #154FE6; border-radius: 8px\" >\n      <ion-row>\n        <ion-col>\n          <ion-label>Activity log</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngFor=\"let item of daysOfWeek\" class=\"ion-text-center\" size=\"1.2\" offset=\"3.6/9\">\n          <ion-label>{{ item }}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngFor=\"let item of colorsOfWeek\" class=\"ion-text-center\" size=\"1.2\" offset=\"3.6/9\">\n          <ion-chip [class]=\"item\" disabled=\"true\" style=\"width: same-as-height; height: 100%;\"> </ion-chip>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col></ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        {{ r }}\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        {{ g }}\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        {{ s }}\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_main_main_module_ts-es2015.js.map