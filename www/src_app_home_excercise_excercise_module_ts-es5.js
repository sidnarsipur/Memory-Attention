(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_home_excercise_excercise_module_ts"], {
    /***/
    86831:
    /*!************************************************************!*\
      !*** ./src/app/home/excercise/excercise-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcercisePageRoutingModule": function ExcercisePageRoutingModule() {
          return (
            /* binding */
            _ExcercisePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _excercise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./excercise.page */
      95648);

      var routes = [{
        path: '',
        component: _excercise_page__WEBPACK_IMPORTED_MODULE_0__.ExcercisePage
      }];

      var _ExcercisePageRoutingModule = function ExcercisePageRoutingModule() {
        _classCallCheck(this, ExcercisePageRoutingModule);
      };

      _ExcercisePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ExcercisePageRoutingModule);
      /***/
    },

    /***/
    36707:
    /*!****************************************************!*\
      !*** ./src/app/home/excercise/excercise.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcercisePageModule": function ExcercisePageModule() {
          return (
            /* binding */
            _ExcercisePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _excercise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./excercise-routing.module */
      86831);
      /* harmony import */


      var _excercise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excercise.page */
      95648);

      var _ExcercisePageModule = function ExcercisePageModule() {
        _classCallCheck(this, ExcercisePageModule);
      };

      _ExcercisePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _excercise_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcercisePageRoutingModule],
        declarations: [_excercise_page__WEBPACK_IMPORTED_MODULE_1__.ExcercisePage]
      })], _ExcercisePageModule);
      /***/
    },

    /***/
    95648:
    /*!**************************************************!*\
      !*** ./src/app/home/excercise/excercise.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcercisePage": function ExcercisePage() {
          return (
            /* binding */
            _ExcercisePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_excercise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./excercise.page.html */
      89410);
      /* harmony import */


      var _excercise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excercise.page.scss */
      50112);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/game.service */
      5162);

      var _ExcercisePage = /*#__PURE__*/function () {
        function ExcercisePage(router, GameService) {
          _classCallCheck(this, ExcercisePage);

          this.router = router;
          this.GameService = GameService;
          this.array = [1, 2, 3, 4, 5];
        } // just sets it such that when the path is /home then it goes here


        _createClass(ExcercisePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            localStorage.setItem('navpath', 'exercise-sets');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            localStorage.setItem('navpath', 'exercise-sets');
          } // navigates to the exercise set path

        }, {
          key: "onExcerciseSet",
          value: function onExcerciseSet(number) {
            this.router.navigate(['excercise-sets/' + number]);
          } // gets the exercise set array

        }, {
          key: "returnExSetAray",
          value: function returnExSetAray() {
            return this.GameService.excerciseSets;
          }
        }]);

        return ExcercisePage;
      }();

      _ExcercisePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService
        }];
      };

      _ExcercisePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-excercise',
        template: _raw_loader_excercise_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_excercise_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExcercisePage);
      /***/
    },

    /***/
    50112:
    /*!****************************************************!*\
      !*** ./src/app/home/excercise/excercise.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  background: var(--ion-color-start) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VyY2lzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBQTtBQUNKIiwiZmlsZSI6ImV4Y2VyY2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0YXJ0KSAhaW1wb3J0YW50O1xuICB9Il19 */";
      /***/
    },

    /***/
    89410:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/excercise/excercise.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"start\">\n    <ion-title>Exercise Sets</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <!--  the collapsible header -->\n\n<ion-content scroll-y=\"false\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"ion-text-center\" color=\"start\">\n      <ion-title style=\"font-size: 32px;\">Exercise Sets</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <!-- <ion-list>\n    <ion-list-header>\n      Excercise Set 1\n    </ion-list-header>\n    \n    <ion-list-header>\n      Excercise Set 2\n    </ion-list-header>\n  </ion-list> -->\n  <!-- <ion-list>\n    <ion-item *ngFor=\"let item of returnExSetAray(); index as i\" (click)=\"onExcerciseSet(i + 1)\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"../../../assets/word-to-images/11.jpg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Excercise Set {{i + 1}}</h3>\n        <p>Level from: {{ item.level[0] }}, Level to: {{ item.level[1] }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n  <!-- <ion-card > -->\n\n    <!-- <ion-card-header>\n      <ion-card-title>Exercise Set 1</ion-card-title>\n      <ion-card-subtitle>For memory and attention</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>Includes sort them!, Card Span, Digit Span, </ion-card-content>\n  </ion-card>\n  <ion-card (click)=\"onExcerciseSet(2)\">\n    <img src=\"../../../assets/word-to-images/3.jpg\">\n    <ion-card-header>\n      <ion-card-title>Exercise Set 2</ion-card-title>\n      <ion-card-subtitle>For memory and attention</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>Includes sort them!, Card Span, Digit Span, </ion-card-content>\n  </ion-card> -->\n\n  <!-- the image and buttons for exercise set 1 -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"ion-text-center\" style=\"--background: #E03B594F;\">\n          <img style=\"width: 100%; height: 100%;\" src=\"../../../assets/exercise-set/exset1-icon.png\">\n          <ion-card-header>\n            <ion-card-title style=\"font-size: 20px;\">Exercise Set 1</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n        <ion-list>\n          <div class=\"ion-text-center\">\n            <ion-label>Difficulty</ion-label>\n          </div>\n          <div class=\"ion-text-center\">\n            <ion-button fill=\"outline\" color=\"danger\" *ngFor=\"let item of array\"  (click)=\"onExcerciseSet((item - 1)*2 + 1)\">{{ item }}</ion-button>\n          </div>\n        </ion-list>\n      </ion-col>\n\n    <!--  the image and buttonss for exercise set 2 -->\n      <ion-col>\n        <ion-card class=\"ion-text-center\" style=\"--background: #3BB9E04F;\">\n          <img style=\"width: 100%; height: 100%;\" src=\"../../../assets/exercise-set/exset2-icon.png\">\n          <ion-card-header>\n            <ion-card-title style=\"font-size: 20px;\">Exercise Set 2</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n        <ion-list>\n          <div class=\"ion-text-center\">\n            <ion-label>Difficulty</ion-label>\n          </div>\n          <div class=\"ion-text-center\">\n            <ion-button fill=\"outline\" *ngFor=\"let item of array\"  (click)=\"onExcerciseSet(item*2)\">{{ item }}</ion-button>\n          </div>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_excercise_excercise_module_ts-es5.js.map