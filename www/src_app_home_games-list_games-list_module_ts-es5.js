(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_home_games-list_games-list_module_ts"], {
    /***/
    2446:
    /*!**************************************************************!*\
      !*** ./src/app/home/games-list/games-list-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GamesListPageRoutingModule": function GamesListPageRoutingModule() {
          return (
            /* binding */
            _GamesListPageRoutingModule
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


      var _games_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./games-list.page */
      60634);

      var routes = [{
        path: '',
        component: _games_list_page__WEBPACK_IMPORTED_MODULE_0__.GamesListPage
      }];

      var _GamesListPageRoutingModule = function GamesListPageRoutingModule() {
        _classCallCheck(this, GamesListPageRoutingModule);
      };

      _GamesListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _GamesListPageRoutingModule);
      /***/
    },

    /***/
    54515:
    /*!******************************************************!*\
      !*** ./src/app/home/games-list/games-list.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GamesListPageModule": function GamesListPageModule() {
          return (
            /* binding */
            _GamesListPageModule
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


      var _games_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./games-list-routing.module */
      2446);
      /* harmony import */


      var _games_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./games-list.page */
      60634);

      var _GamesListPageModule = function GamesListPageModule() {
        _classCallCheck(this, GamesListPageModule);
      };

      _GamesListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _games_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamesListPageRoutingModule],
        declarations: [_games_list_page__WEBPACK_IMPORTED_MODULE_1__.GamesListPage]
      })], _GamesListPageModule);
      /***/
    },

    /***/
    60634:
    /*!****************************************************!*\
      !*** ./src/app/home/games-list/games-list.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GamesListPage": function GamesListPage() {
          return (
            /* binding */
            _GamesListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_games_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./games-list.page.html */
      10858);
      /* harmony import */


      var _games_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./games-list.page.scss */
      43334);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/game.service */
      5162);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _GamesListPage = /*#__PURE__*/function () {
        function GamesListPage(gameService, router) {
          _classCallCheck(this, GamesListPage);

          this.gameService = gameService;
          this.router = router;
          this.gamesArray = [];
          this.displaynumberarray = [];
          this.displayarray = [];
          this.currentnumber = -1;
          this.chipIsClicked = false;
        }

        _createClass(GamesListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // gets the information of the games from the game service adn formats it so that it is displayed in the componetn
            this.gamesArray = this.gameService.getGames();

            for (var i = 0; i < this.gamesArray.length; i++) {
              if (i !== 0 && i % 2 === 0) {
                console.log(i);
                this.currentnumber = this.currentnumber + 2;
              }

              this.currentnumber++;
              this.displaynumberarray.push({
                number: this.currentnumber,
                name: this.gamesArray[i].name,
                imageURL: this.gamesArray[i].thumbnailURL,
                img: true
              });
              this.displaynumberarray.push({
                number: this.currentnumber + 2,
                name: this.gamesArray[i].name,
                imageURL: this.gamesArray[i].thumbnailURL,
                img: false
              });
            }

            for (var _i = 0; _i < this.displaynumberarray.length; _i++) {
              var item = this.displaynumberarray[_i];
              var num = item.number; // if (num) {
              //   let temp1 = {name: this.displaynumberarray[i].name, img: this.displaynumberarray[i].img}
              //   this.displaynumberarray[i] = this.displaynumberarray[num]
              //   this.displaynumberarray[num] = temp1
              // }

              this.displayarray[num] = {
                name: item.name,
                imageURL: item.imageURL,
                img: item.img
              };
            } // this.displayarray[this.displaynumberarray.length - 1] = this.displayarray[this.displaynumberarray.length]
            // this.displayarray.splice(this.displaynumberarray.length, 1)


            this.displayarray[this.displaynumberarray.length - 1] = {};
            console.log(this.displayarray);
            console.log(this.displaynumberarray);
            localStorage.setItem('navpath', 'games-list');
          } // just sets it such that when the path is /home then it goes here

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            localStorage.setItem('navpath', 'games-list');
          } // navigates to the game description (legacy)
          // onClickCard(gamename: string) {
          //   if (!this.chipIsClicked) {
          //     this.router.navigate(['/description/' + gamename])
          //   } else {
          //     this.chipIsClicked = false
          //   }
          // }
          // when a game is clicked then the path is navigated to

        }, {
          key: "onClickChip",
          value: function onClickChip(gamename) {
            var spacelessgamename = gamename.split(" ").join(""); // removes spaces from gamename so the path is proper

            this.chipIsClicked = true;
            this.router.navigate(['/' + spacelessgamename]);
          }
        }]);

        return GamesListPage;
      }();

      _GamesListPage.ctorParameters = function () {
        return [{
          type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _GamesListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-games-list',
        template: _raw_loader_games_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_games_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GamesListPage);
      /***/
    },

    /***/
    43334:
    /*!******************************************************!*\
      !*** ./src/app/home/games-list/games-list.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  background: var(--ion-color-start) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQUE7QUFDSiIsImZpbGUiOiJnYW1lcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RhcnQpICFpbXBvcnRhbnQ7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    10858:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/games-list/games-list.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header>\n    <ion-toolbar color=\"start\">\n      <ion-title style=\"font-size: 22px;\">Games</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!--  the collapsible header -->\n\n  <ion-content>\n    <ion-header collapse=\"condense\">\n       <ion-toolbar color=\"start\">\n         <ion-title class=\"ion-text-center\" style=\"font-size: 32px;\">Games</ion-title>\n       </ion-toolbar>\n    </ion-header>\n      <!-- <ion-list>\n        <ion-item *ngFor=\"let game of gamesArray\" (click)=\"onClickChip(game.name)\" button>\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"game.thumbnailURL\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3>{{ game.name }}</h3>\n            <p>{{ game.catchphrase }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list> -->\n\n      <!-- icons for all the games -->\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-center\" *ngFor=\"let game of displayarray\" (click)=\"onClickChip(game.name)\" size=\"3\" offset=\"2\">\n            <img style=\"border: 3px solid var(--ion-color-dark); border-radius: 10px; width: 100%;\" *ngIf=\"game.img === true\" [src]=\"game.imageURL\">\n            <label style=\"font-size: 15; font-weight: 700;\" *ngIf=\"!game.img === false\">{{ game.name }}</label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <ion-grid>\n        width: 85px; height: 85px;\n        <ion-row >\n          <ion-col style=\"height: 130px;\" size=\"4\" offset=\"1\" *ngFor=\"let game of gamesArray\" (click)=\"onClickChip(game.name)\">\n              <div style=\"position: absolute; width: 80px; height: 80px;\" padding>\n                <img style=\"width: 100%; height: 100%;\" [src]=\"game.thumbnailURL\" >\n              </div>\n              <div style=\"position: relative; top: 90px\">\n                <p>{{ game.name }}</p>\n              </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n\n\n  </ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_games-list_games-list_module_ts-es5.js.map