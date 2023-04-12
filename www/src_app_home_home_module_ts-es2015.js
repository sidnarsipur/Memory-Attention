(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.guard */ 18595);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        // redirectTo: "main",
        // pathMatch: "full",
        children: [
            {
                path: 'exercise-sets',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_excercise_excercise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./excercise/excercise.module */ 36707)).then(m => m.ExcercisePageModule),
                canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard]
            },
            {
                path: 'games-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_games-list_games-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./games-list/games-list.module */ 54515)).then(m => m.GamesListPageModule),
                canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard]
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_home_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 52177)).then(m => m.SettingsPageModule),
                canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard]
            },
            {
                path: 'main',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_home_main_main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 91236)).then(m => m.MainPageModule),
                canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard]
            },
            // {
            //   path: '',
            //   redirectTo: 'main',
            //   pathMatch: 'full'
            // }
        ]
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game.service */ 5162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let HomePage = class HomePage {
    constructor(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.gamesArray = [];
        this.chipIsClicked = false;
    }
    ngOnInit() {
        // this.gamesArray = this.gameService.getGames()
        // console.log(this.gamesArray)
        let navpath = localStorage.getItem('navpath');
        if (navpath) {
            this.router.navigate(['/home/' + navpath]);
        }
        else {
            this.router.navigate(['/home/main']);
        }
    }
    ionTabsWillChange() {
        console.log('change');
    }
};
HomePage.ctorParameters = () => [
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".horizontal-scroll {\n  overflow-x: scroll;\n}\n\n.tab-selected {\n  border: 2px solid white;\n}\n\nion-tab-button {\n  --background: var(--ion-color-start);\n  --color: #ffffff;\n  --color-selected: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLXNjcm9sbCB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0YXJ0KTtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmZmZmY7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n  <!-- [routerLink]=\"['/description/' + game.name]\" -->\n    <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <p>Games</p>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let game of gamesArray\">\n        <ion-row>\n          <ion-col size-s=\"8\" offset-s=\"2\" size-lg=\"6\" offset-lg=\"3\">\n          <ion-card color=\"card-dark\" (click)=\"onClickCard(game.name)\" >\n            <img [src]=\"game.thumbnailURL\">\n            <ion-card-header>\n              <ion-card-title>{{ game.name }}\n                <ion-chip color=\"primary\" (click)=\"onClickChip(game.name)\">\n                  <ion-label>Play</ion-label>\n                  <ion-icon name=\"play-outline\"></ion-icon>\n                </ion-chip>\n              </ion-card-title>\n              <ion-card-subtitle>{{ game.catchphrase }}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n              {{ game.description }}\n            </ion-card-content\n          </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n    </ion-grid> -->\n  <!-- <ion-content>\n    <ion-list-header>\n      <ion-label>Home(this page will contain recommended games/excercise sets)</ion-label>\n    </ion-list-header>\n    <ion-list>\n      <ion-item *ngFor=\"let game of gamesArray\" (click)=\"onClickChip(game.name)\" button>\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"game.thumbnailURL\">\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{ game.name }}</h3>\n          <p>{{ game.catchphrase }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content> -->\n\n\n  <!-- the tabs at the bottom of the four home screens -->\n<ion-tabs>\n  <ion-tab-bar style=\"--border: 3px solid; \" class=\"ion-color-start\">\n    <ion-tab-button tab=\"main\" selected >\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"exercise-sets\">\n      <ion-icon name=\"file-tray-stacked-outline\" ></ion-icon>\n      <ion-label>Exercise Sets</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"games-list\" >\n      <ion-icon name=\"list-outline\" ></ion-icon>\n      <ion-label>Games List</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\" >\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n      <ion-label>Settings</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts-es2015.js.map