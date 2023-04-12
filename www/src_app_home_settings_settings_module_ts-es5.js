(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_home_settings_settings_module_ts"], {
    /***/
    96283:
    /*!**********************************************************!*\
      !*** ./src/app/home/settings/settings-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageRoutingModule": function SettingsPageRoutingModule() {
          return (
            /* binding */
            _SettingsPageRoutingModule
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.page */
      57353);

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
      }];

      var _SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      _SettingsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SettingsPageRoutingModule);
      /***/
    },

    /***/
    52177:
    /*!**************************************************!*\
      !*** ./src/app/home/settings/settings.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageModule": function SettingsPageModule() {
          return (
            /* binding */
            _SettingsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings-routing.module */
      96283);
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page */
      57353);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      _SettingsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
      })], _SettingsPageModule);
      /***/
    },

    /***/
    57353:
    /*!************************************************!*\
      !*** ./src/app/home/settings/settings.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPage": function SettingsPage() {
          return (
            /* binding */
            _SettingsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./settings.page.html */
      10654);
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page.scss */
      92303);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/data.service */
      10954);
      /* harmony import */


      var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/game.service */
      5162);

      var _SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(dataService, router, gameService) {
          _classCallCheck(this, SettingsPage);

          this.dataService = dataService;
          this.router = router;
          this.gameService = gameService;
          this.level = 1;
          this.isLoading = false;
        } // sets default path


        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            localStorage.setItem('navpath', 'settings');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            localStorage.setItem('navpath', 'settings');
          } // logs out of the account

        }, {
          key: "onLogout",
          value: function onLogout() {
            this.dataService.logout();
            this.router.navigate(['/login']);
          } // changes level in database

        }, {
          key: "levelChange",
          value: function levelChange() {
            var _this = this;

            this.isLoading = true;

            for (var i = 0; i <= this.gameService.gamesArray.length - 1; i++) {
              this.gameService.storeLevelScore(i, 0, this.level, false);

              if (i === this.gameService.gamesArray.length - 1) {
                setTimeout(function () {
                  _this.isLoading = false;
                }, 2000);
              }
            }

            console.log(this.level);
          }
        }]);

        return SettingsPage;
      }();

      _SettingsPage.ctorParameters = function () {
        return [{
          type: src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService
        }];
      };

      _SettingsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SettingsPage);
      /***/
    },

    /***/
    92303:
    /*!**************************************************!*\
      !*** ./src/app/home/settings/settings.page.scss ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bold {\n  font-weight: bold;\n  font-size: larger;\n}\n\nion-toolbar {\n  background: var(--ion-color-start) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZDQUFBO0FBQ0oiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0YXJ0KSAhaW1wb3J0YW50O1xuICB9Il19 */";
      /***/
    },

    /***/
    10654:
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/settings/settings.page.html ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- maybe more settings need to be added -->\n\n<!-- logout function -->\n<ion-header>\n  <ion-toolbar color=\"start\">\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onLogout()\">Logout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--  level changer -->\n<ion-content *ngIf=\"!isLoading\">\n  <ion-list>\n    <ion-item>\n      <ion-label class=\"ion-text-center bold\" >Level</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-range [(ngModel)]=\"level\" pin snaps=\"true\" step=\"1\" min=\"1\" max=\"10\">\n        <ion-label slot=\"start\">1</ion-label>\n        <ion-label slot=\"end\">10</ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item detail button (click)=\"levelChange()\">\n      Level Change\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_settings_settings_module_ts-es5.js.map