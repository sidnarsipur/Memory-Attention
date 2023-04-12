(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_description_description_module_ts"], {
    /***/
    33952:
    /*!***********************************************************!*\
      !*** ./src/app/description/description-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DescriptionPageRoutingModule": function DescriptionPageRoutingModule() {
          return (
            /* binding */
            _DescriptionPageRoutingModule
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


      var _description_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./description.page */
      18032);

      var routes = [{
        path: '',
        component: _description_page__WEBPACK_IMPORTED_MODULE_0__.DescriptionPage
      }];

      var _DescriptionPageRoutingModule = function DescriptionPageRoutingModule() {
        _classCallCheck(this, DescriptionPageRoutingModule);
      };

      _DescriptionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DescriptionPageRoutingModule);
      /***/
    },

    /***/
    14537:
    /*!***************************************************!*\
      !*** ./src/app/description/description.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DescriptionPageModule": function DescriptionPageModule() {
          return (
            /* binding */
            _DescriptionPageModule
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


      var _description_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./description-routing.module */
      33952);
      /* harmony import */


      var _description_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./description.page */
      18032);

      var _DescriptionPageModule = function DescriptionPageModule() {
        _classCallCheck(this, DescriptionPageModule);
      };

      _DescriptionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _description_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescriptionPageRoutingModule],
        declarations: [_description_page__WEBPACK_IMPORTED_MODULE_1__.DescriptionPage]
      })], _DescriptionPageModule);
      /***/
    },

    /***/
    18032:
    /*!*************************************************!*\
      !*** ./src/app/description/description.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DescriptionPage": function DescriptionPage() {
          return (
            /* binding */
            _DescriptionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_description_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./description.page.html */
      3408);
      /* harmony import */


      var _description_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./description.page.scss */
      26243);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/game.service */
      5162);

      var _DescriptionPage = /*#__PURE__*/function () {
        function DescriptionPage(route, gameService, router) {
          _classCallCheck(this, DescriptionPage);

          this.route = route;
          this.gameService = gameService;
          this.router = router;
        }

        _createClass(DescriptionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              _this.currentGame = params.game;
            });

            var _iterator = _createForOfIteratorHelper(this.gameService.getGames()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var game = _step.value;

                if (game.name === this.currentGame) {
                  this.desc = game.description;
                  this.catchphrase = game.catchphrase;
                  this.imgURL = game.thumbnailURL;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onClickChip",
          value: function onClickChip() {
            this.router.navigate(['/' + this.currentGame.split(" ").join("")]);
          }
        }]);

        return DescriptionPage;
      }();

      _DescriptionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _DescriptionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-description',
        template: _raw_loader_description_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_description_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DescriptionPage);
      /***/
    },

    /***/
    26243:
    /*!***************************************************!*\
      !*** ./src/app/description/description.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    3408:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/description/description.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"['/home']\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{ currentGame }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <img [src]=\"imgURL\">           \n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <h1>{{ currentGame }}\n          <ion-chip color=\"primary\" (click)=\"onClickChip()\">\n            <ion-label>Play</ion-label>\n            <ion-icon name=\"play-outline\"></ion-icon>\n          </ion-chip>            \n          </h1>\n        </ion-label>   \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col> \n        <ion-label>{{ desc }}</ion-label>          \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_description_description_module_ts-es5.js.map