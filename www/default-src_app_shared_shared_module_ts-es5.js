(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_shared_shared_module_ts"], {
    /***/
    36034:
    /*!*************************************************************!*\
      !*** ./src/app/shared/description/description.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DescriptionComponent": function DescriptionComponent() {
          return (
            /* binding */
            _DescriptionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_description_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./description.component.html */
      24488);
      /* harmony import */


      var _description_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./description.component.scss */
      29669);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../eventemitter.service */
      64874);
      /* harmony import */


      var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../game.service */
      5162);

      var _DescriptionComponent = /*#__PURE__*/function () {
        function DescriptionComponent(eventemitter, gameservice) {
          _classCallCheck(this, DescriptionComponent);

          this.eventemitter = eventemitter;
          this.gameservice = gameservice;
          this.startButtonIsDisabled = false;
        }

        _createClass(DescriptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gamedesc = this.gameservice.gamesArray[this.gameno].description.split("\n");
            this.gameimgurl = this.gameservice.gamesArray[this.gameno].thumbnailURL;
          }
        }]);

        return DescriptionComponent;
      }();

      _DescriptionComponent.ctorParameters = function () {
        return [{
          type: _eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService
        }, {
          type: _game_service__WEBPACK_IMPORTED_MODULE_3__.GameService
        }];
      };

      _DescriptionComponent.propDecorators = {
        gameHasBegun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['gameHasBegun']
        }],
        lost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['lost']
        }],
        remembered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['remembered']
        }],
        gameno: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['gameno']
        }],
        startButtonIsDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['startButtonIsDisabled']
        }]
      };
      _DescriptionComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-description',
        template: _raw_loader_description_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_description_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DescriptionComponent);
      /***/
    },

    /***/
    10995:
    /*!*************************************************************!*\
      !*** ./src/app/shared/firstscreen/firstscreen.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirstscreenComponent": function FirstscreenComponent() {
          return (
            /* binding */
            _FirstscreenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_firstscreen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./firstscreen.component.html */
      18811);
      /* harmony import */


      var _firstscreen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./firstscreen.component.scss */
      59800);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _FirstscreenComponent = /*#__PURE__*/function () {
        function FirstscreenComponent(modalController) {
          _classCallCheck(this, FirstscreenComponent);

          this.modalController = modalController;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
          this.slide3 = false;
        }

        _createClass(FirstscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.slides.update()
          }
        }, {
          key: "onDismissModal",
          value: function onDismissModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("something new");
                      this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "enableDismiss",
          value: function enableDismiss() {
            this.slide3 = true;
          }
        }]);

        return FirstscreenComponent;
      }();

      _FirstscreenComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }];
      };

      _FirstscreenComponent.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides, {
            "static": true
          }]
        }]
      };
      _FirstscreenComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-firstscreen',
        template: _raw_loader_firstscreen_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_firstscreen_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FirstscreenComponent);
      /***/
    },

    /***/
    89470:
    /*!***************************************************!*\
      !*** ./src/app/shared/header/header.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./header.component.html */
      67719);
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component.scss */
      44783);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../eventemitter.service */
      64874);
      /* harmony import */


      var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../game.service */
      5162);

      var _HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(gameService, eventEmitter) {
          _classCallCheck(this, HeaderComponent);

          this.gameService = gameService;
          this.eventEmitter = eventEmitter;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gamename = this.gameService.gamesArray[+this.gamenumber].name;
          }
        }, {
          key: "onCloseMenu",
          value: function onCloseMenu(string) {
            if (string) {
              this.eventEmitter.onGameState(string); // if (string === 'quit') {
              //   this.router.navigate(['/home'])
              // }
            }
          }
        }]);

        return HeaderComponent;
      }();

      _HeaderComponent.ctorParameters = function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_3__.GameService
        }, {
          type: _eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService
        }];
      };

      _HeaderComponent.propDecorators = {
        gameHasBegun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['gameHasBegun']
        }],
        gamenumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['gamenumber']
        }]
      };
      _HeaderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeaderComponent);
      /***/
    },

    /***/
    55559:
    /*!***********************************************************!*\
      !*** ./src/app/shared/levelscore/levelscore.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LevelscoreComponent": function LevelscoreComponent() {
          return (
            /* binding */
            _LevelscoreComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_levelscore_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./levelscore.component.html */
      48401);
      /* harmony import */


      var _levelscore_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./levelscore.component.scss */
      82569);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LevelscoreComponent = /*#__PURE__*/function () {
        function LevelscoreComponent() {
          _classCallCheck(this, LevelscoreComponent);
        }

        _createClass(LevelscoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getScore",
          value: function getScore() {
            if (JSON.stringify(this.score).length > 4) {
              this.score = +JSON.stringify(this.score).slice(0, 4);
            }

            return this.score;
          }
        }, {
          key: "getLevel",
          value: function getLevel() {
            return JSON.stringify(this.level);
          }
        }]);

        return LevelscoreComponent;
      }();

      _LevelscoreComponent.ctorParameters = function () {
        return [];
      };

      _LevelscoreComponent.propDecorators = {
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['level']
        }],
        score: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['score']
        }]
      };
      _LevelscoreComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-score',
        template: _raw_loader_levelscore_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_levelscore_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LevelscoreComponent);
      /***/
    },

    /***/
    76534:
    /*!***********************************************!*\
      !*** ./src/app/shared/menu/menu.component.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuComponent": function MenuComponent() {
          return (
            /* binding */
            _MenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menu.component.html */
      40211);
      /* harmony import */


      var _menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu.component.scss */
      63462);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../game.service */
      5162);
      /* harmony import */


      var _eventemitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../eventemitter.service */
      64874);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(gameService, eventEmitter, menu, router) {
          _classCallCheck(this, MenuComponent);

          this.gameService = gameService;
          this.eventEmitter = eventEmitter;
          this.menu = menu;
          this.router = router;
          this.isPaused = false;
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gamename = this.gameService.gamesArray[+this.gamenumber].name;
            console.log(this.gamename);
          }
        }, {
          key: "onCloseMenu",
          value: function onCloseMenu(string) {
            this.menu.close("pause");

            if (string) {
              this.eventEmitter.onGameState(string); // if (string === 'quit') {
              //   this.router.navigate(['/home'])
              // }
            }
          }
        }, {
          key: "onPause",
          value: function onPause() {
            var pauseresume = '';

            if (this.isPaused === false) {
              pauseresume = 'pause';
            }

            if (this.isPaused === true) {
              pauseresume = 'resume';
            }

            this.eventEmitter.onGameState(pauseresume);
            this.isPaused = !this.isPaused;
          }
        }, {
          key: "onStart",
          value: function onStart() {
            this.eventEmitter.onGameState('restart');
          }
        }]);

        return MenuComponent;
      }();

      _MenuComponent.ctorParameters = function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_2__.GameService
        }, {
          type: _eventemitter_service__WEBPACK_IMPORTED_MODULE_3__.EventemitterService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _MenuComponent.propDecorators = {
        gameHasBegun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
          args: ['gameHasBegun']
        }],
        gamenumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
          args: ['gamenumber']
        }]
      };
      _MenuComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenuComponent);
      /***/
    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./start/start.component */
      90883);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu/menu.component */
      76534);
      /* harmony import */


      var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./game.service */
      5162);
      /* harmony import */


      var _levelscore_levelscore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./levelscore/levelscore.component */
      55559);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./data.service */
      10954);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _firstscreen_firstscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firstscreen/firstscreen.component */
      10995);
      /* harmony import */


      var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./spinner/spinner.component */
      24984);
      /* harmony import */


      var _description_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./description/description.component */
      36034);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./header/header.component */
      89470);

      var _SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      _SharedModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _levelscore_levelscore_component__WEBPACK_IMPORTED_MODULE_3__.LevelscoreComponent, _firstscreen_firstscreen_component__WEBPACK_IMPORTED_MODULE_5__.FirstscreenComponent, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _description_description_component__WEBPACK_IMPORTED_MODULE_7__.DescriptionComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule],
        exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _levelscore_levelscore_component__WEBPACK_IMPORTED_MODULE_3__.LevelscoreComponent, _firstscreen_firstscreen_component__WEBPACK_IMPORTED_MODULE_5__.FirstscreenComponent, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _description_description_component__WEBPACK_IMPORTED_MODULE_7__.DescriptionComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent],
        providers: [_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService, _data_service__WEBPACK_IMPORTED_MODULE_4__.DataService]
      })], _SharedModule);
      /***/
    },

    /***/
    24984:
    /*!*****************************************************!*\
      !*** ./src/app/shared/spinner/spinner.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpinnerComponent": function SpinnerComponent() {
          return (
            /* binding */
            _SpinnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./spinner.component.html */
      28560);
      /* harmony import */


      var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./spinner.component.scss */
      747);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent() {
          _classCallCheck(this, SpinnerComponent);
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerComponent;
      }();

      _SpinnerComponent.ctorParameters = function () {
        return [];
      };

      _SpinnerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SpinnerComponent);
      /***/
    },

    /***/
    90883:
    /*!*************************************************!*\
      !*** ./src/app/shared/start/start.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartComponent": function StartComponent() {
          return (
            /* binding */
            _StartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./start.component.html */
      79803);
      /* harmony import */


      var _start_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./start.component.scss */
      30689);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../eventemitter.service */
      64874);
      /* harmony import */


      var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../game.service */
      5162);

      var _StartComponent = /*#__PURE__*/function () {
        function StartComponent(eventemitter, gameservice) {
          _classCallCheck(this, StartComponent);

          this.eventemitter = eventemitter;
          this.gameservice = gameservice;
          this.startButtonIsDisabled = false;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.gamedesc = this.gameservice.gamesArray[this.gameno].description.split("\n")
            // this.gameimgurl = this.gameservice.gamesArray[this.gameno].thumbnailURL
            // this.completed = this.gameservice.gamesArray[this.gameno].completed
          }
        }, {
          key: "onStart",
          value: function onStart() {
            this.eventemitter.onGameState('start');
          }
        }]);

        return StartComponent;
      }();

      _StartComponent.ctorParameters = function () {
        return [{
          type: _eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService
        }, {
          type: _game_service__WEBPACK_IMPORTED_MODULE_3__.GameService
        }];
      };

      _StartComponent.propDecorators = {
        gameHasBegun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['gameHasBegun']
        }],
        gameno: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['gameno']
        }],
        startButtonIsDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['startButtonIsDisabled']
        }]
      };
      _StartComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-start',
        template: _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_start_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StartComponent);
      /***/
    },

    /***/
    29669:
    /*!***************************************************************!*\
      !*** ./src/app/shared/description/description.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    59800:
    /*!***************************************************************!*\
      !*** ./src/app/shared/firstscreen/firstscreen.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".padding {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.padding-sm {\n  padding-left: 3%;\n  padding-right: 3%;\n  padding-bottom: 3%;\n  padding-top: 3%;\n}\n\n.bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0c2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJmaXJzdHNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi5wYWRkaW5nLXNtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    44783:
    /*!*****************************************************!*\
      !*** ./src/app/shared/header/header.component.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    82569:
    /*!*************************************************************!*\
      !*** ./src/app/shared/levelscore/levelscore.component.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-ripple {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsc2NvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoibGV2ZWxzY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1yaXBwbGUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    63462:
    /*!*************************************************!*\
      !*** ./src/app/shared/menu/menu.component.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    747:
    /*!*******************************************************!*\
      !*** ./src/app/shared/spinner/spinner.component.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".large {\n  height: 20%;\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ2Uge1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiAyMCU7XG59Il19 */";
      /***/
    },

    /***/
    30689:
    /*!***************************************************!*\
      !*** ./src/app/shared/start/start.component.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 10px;\n  letter-spacing: 0.25em;\n  color: #FFFDFD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUFBQSIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXNpemU6IDIwcHg7XG5saW5lLWhlaWdodDogMTBweDtcbmxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG5cbmNvbG9yOiAjRkZGREZEO1xufVxuICBcbiJdfQ== */";
      /***/
    },

    /***/
    24488:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/description/description.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"!gameHasBegun\" scroll=\"true\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <img [src]=\"gameimgurl\" style=\"width: 161px; height: 161px;\">\n\n      </ion-col>\n    </ion-row>\n    <!-- did this since i could not scroll meaning i couldn't test the firebase intergration -->\n    <ion-row *ngFor=\"let desc of gamedesc\">\n      <ion-col size-md=\"8\" offset-md=\"2\" class=\"ion-text-left\">\n        <ion-label style=\"font-family: Roboto; font-size: 12pt;\">{{ desc }}</ion-label>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid> \n</div>\n";
      /***/
    },

    /***/
    18811:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/firstscreen/firstscreen.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ion-page\">\n  <ion-content>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" (ionSlideReachEnd)=\"enableDismiss()\">\n      <ion-slide>\n        <ion-label class=\"padding\">\n          <h1 class=\"padding\">Welcome to Memory!</h1>\n          <h4 class=\"padding-sm\">This app tests your cognitive ability using various fun games and tasks. You can choose to play multiple games, track your progress, and level up, or use one of the exercise sets, which are challenging combinations of various games.</h4>\n        </ion-label>\n      </ion-slide>\n      <ion-slide>\n        <ion-label class=\"padding\">\n          <h1 class=\"padding\">Navigating the Screen</h1>\n          <h3 class=\"padding-sm\">On the bottom of your homescreen is the navigation bar.</h3>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Exercise Sets</div>Takes you to the screen with different games combined into playing sets. You can choose to play an exercise set by simply clicking on it</h4>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Games List</div>Takes you to the list of games, each with their own levels and points. To play a game, click on its name and begin</h4>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Settings</div>Takes you to your profile and information.</h4>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Progress Dashboard</div>Shows where you are in the games and exercise sets and how you have improved over time</h4>\n        </ion-label>\n      </ion-slide>\n      <ion-slide>\n        <ion-label class=\"padding\">\n          <h1 class=\"padding\">When Playing a Game</h1>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Total Points</div>Shows how many points you have in this level out of 200. Once you have 200 points, you can move on to the next level. If you play your entire round correctly, you can earn 50 points. Any incorrect selections or incomplete rounds will lose you 5 points. You can see oyur total points at the end of a level.</h4>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Timer</div>Shows how much  you have left in a round or how long you are taking in the round</h4>\n          <h4 class=\"padding-sm\"><div class=\"bold\">Menu Bar</div>You can Pause, Restart or Quit a round by using the Menu Bar. Remember that your progress will not be saved if you quit the round!</h4>\n        </ion-label>\n      </ion-slide>\n    </ion-slides>      \n    <ion-grid *ngIf=\"slide3\">\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button  (click)=\"onDismissModal()\">Close</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-content>\n</div>";
      /***/
    },

    /***/
    67719:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--border-width: 0\">\n    <ion-title class=\"ion-text-center\" style=\"font-size: 20px;\">{{ gamename }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onCloseMenu('quit')\" color=\"dark\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n";
      /***/
    },

    /***/
    48401:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/levelscore/levelscore.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-footer>\n  <ion-grid style=\"flex: 1; position: sticky;\">\n    <ion-row>\n      <ion-col size=\"6\">  \n        <ion-button color=\"light\" class=\"ion-text-center no-ripple\" expand=\"full\" [disabled]=\"true\">\n          Level: {{ getLevel() }}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"light\" class=\"ion-text-center no-ripple\" expand=\"full\" [disabled]=\"true\">\n          Score: {{ getScore() }}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-footer> -->\n\n<ion-grid style=\"flex: 1; position: sticky;\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\" size=\"2.5\" offset=\"2.33\">  \n      <!-- <ion-button color=\"light\" class=\"ion-text-center no-ripple\"  [disabled]=\"true\">\n        Level: {{ level }}\n      </ion-button>\n    </ion-col> -->\n    <div>\n      <img style=\"width: 55%;\" src=\"../assets/word-finder/level_icon.png\">\n    </div>\n\n     <ion-label style=\"font-size: 10pt;\">\n       <p >Level: {{ getLevel() }}</p> \n    </ion-label>\n  </ion-col>\n  <ion-col class=\"ion-text-center\" size=\"2.5\" offset=\"2.33\">\n    <div class=\"ion-text-center\" >\n      <img style=\"width: 55%;\" class=\"ion-text-center\" src=\"../assets/word-finder/point_icon.png\">\n    </div>\n\n    <ion-label style=\"font-size: 10pt;\">\n      <p>Points: {{ getScore() }}</p>\n    </ion-label>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n";
      /***/
    },

    /***/
    40211:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/menu/menu.component.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar style=\"--border-width: 0\">\n    <ion-title class=\"ion-text-center\" style=\"font-size: 20px;\">{{ gamename }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onCloseMenu('quit')\" color=\"dark\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-grid style=\"flex: 1; position: sticky;\" *ngIf=\"gameHasBegun\">\n  <ion-row>\n    <ion-col size=\"6\">  \n      <ion-button color=\"white\" style=\"color: black;\" class=\"ion-text-center no-ripple\" expand=\"full\" (click)=\"onPause()\" >\n        {{ isPaused ? 'Resume' : 'Pause' }}\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"white\" style=\"color: black;\" class=\"ion-text-center no-ripple\" expand=\"full\" (click)=\"onStart()\">\n        Restart\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n<!-- the menu -->\n<!-- <ion-menu side=\"start\" contentId=\"pause\" menuId=\"pause\" (ionDidClose)=\"onCloseMenu('resume')\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{ gameHasBegun ? 'Pause' : 'Menu' }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <div *ngIf=\"gameHasBegun\">\n        <ion-item (click)=\"onCloseMenu()\">Resume</ion-item>\n        <ion-item (click)=\"onCloseMenu('restart')\">Restart</ion-item>\n      </div>\n      <ion-item (click)=\"onCloseMenu('quit')\">Quit To Home</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu> -->\n\n\n";
      /***/
    },

    /***/
    28560:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ion-padding ion-text-center\">\n    <ion-spinner name=\"circles\" color=\"primary\"></ion-spinner>\n</div>";
      /***/
    },

    /***/
    79803:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/start/start.component.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div *ngIf=\"!gameHasBegun\" scroll=\"true\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <img [src]=\"gameimgurl\" style=\"width: 161px; height: 161px;\">\n\n        </ion-col>\n      </ion-row>\n      <ion-button expand=\"full\" class=\"button\" (click)=\"onStart()\" color=\"start\" size=\"small\" [disabled]=\"startButtonIsDisabled\">START</ion-button>  \n      <ion-row *ngFor=\"let desc of gamedesc\">\n        <ion-col size-md=\"8\" offset-md=\"2\" class=\"ion-text-center\">\n          <ion-label style=\"font-family: Roboto; font-size: 12pt;\">{{ desc }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid> \n  </div> -->\n\n  <div *ngIf=\"!gameHasBegun\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"11\" offset=\"0.5\" size-md=\"8\" offset-md=\"2\">\n          <ion-button  color=\"start\" size=\"small\" expand=\"full\" (click)=\"onStart()\">START</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n      \n  </div>\n\n            <!-- <ion-row>\n        <ion-col size=\"11\" offset=\"0.5\" size-md=\"8\" offset-md=\"2\">\n          <ion-button  color=\"start\" expand=\"full\" (click)=\"onStart()\" size=\"small\" [disabled]=\"startButtonIsDisabled\">START</ion-button>\n        </ion-col>\n      </ion-row> -->\n    <!-- <ion-grid>\n\n    </ion-grid> -->\n\n    <!-- <div *ngFor=\"let desc of gamedesc\">\n      in the img tag  float: left; shape-outside: circle(100%);\n      <ion-label style=\"font-family: Roboto; font-size: 12pt;\">{{ desc }} <br></ion-label>\n    </div> -->\n\n    <!-- <ion-list *ngIf=\"lost\">\n      <ion-item color=\"light\">\n        <ion-label class=\"ion-text-center\">You {{ completed[0] }}: {{ remembered }} {{ completed[1] }}!</ion-label>\n      </ion-item>\n    </ion-list> -->\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_shared_shared_module_ts-es5.js.map