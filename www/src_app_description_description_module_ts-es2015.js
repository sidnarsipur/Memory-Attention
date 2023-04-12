(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_description_description_module_ts"],{

/***/ 33952:
/*!***********************************************************!*\
  !*** ./src/app/description/description-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionPageRoutingModule": function() { return /* binding */ DescriptionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _description_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description.page */ 18032);




const routes = [
    {
        path: '',
        component: _description_page__WEBPACK_IMPORTED_MODULE_0__.DescriptionPage
    }
];
let DescriptionPageRoutingModule = class DescriptionPageRoutingModule {
};
DescriptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DescriptionPageRoutingModule);



/***/ }),

/***/ 14537:
/*!***************************************************!*\
  !*** ./src/app/description/description.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionPageModule": function() { return /* binding */ DescriptionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _description_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description-routing.module */ 33952);
/* harmony import */ var _description_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.page */ 18032);







let DescriptionPageModule = class DescriptionPageModule {
};
DescriptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _description_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescriptionPageRoutingModule
        ],
        declarations: [_description_page__WEBPACK_IMPORTED_MODULE_1__.DescriptionPage]
    })
], DescriptionPageModule);



/***/ }),

/***/ 18032:
/*!*************************************************!*\
  !*** ./src/app/description/description.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionPage": function() { return /* binding */ DescriptionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_description_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./description.page.html */ 3408);
/* harmony import */ var _description_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.page.scss */ 26243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game.service */ 5162);






let DescriptionPage = class DescriptionPage {
    constructor(route, gameService, router) {
        this.route = route;
        this.gameService = gameService;
        this.router = router;
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            this.currentGame = params.game;
        });
        for (let game of this.gameService.getGames()) {
            if (game.name === this.currentGame) {
                this.desc = game.description;
                this.catchphrase = game.catchphrase;
                this.imgURL = game.thumbnailURL;
            }
        }
    }
    onClickChip() {
        this.router.navigate(['/' + this.currentGame.split(" ").join("")]);
    }
};
DescriptionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DescriptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-description',
        template: _raw_loader_description_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_description_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DescriptionPage);



/***/ }),

/***/ 26243:
/*!***************************************************!*\
  !*** ./src/app/description/description.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3408:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/description/description.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/home']\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{ currentGame }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <img [src]=\"imgURL\">           \n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <h1>{{ currentGame }}\n          <ion-chip color=\"primary\" (click)=\"onClickChip()\">\n            <ion-label>Play</ion-label>\n            <ion-icon name=\"play-outline\"></ion-icon>\n          </ion-chip>            \n          </h1>\n        </ion-label>   \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col> \n        <ion-label>{{ desc }}</ion-label>          \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_description_description_module_ts-es2015.js.map