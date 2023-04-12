(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_trivia_trivia_module_ts"], {
    /***/
    3036:
    /*!***************************************************!*\
      !*** ./src/app/games-list/trivia/answer.model.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Answer": function Answer() {
          return (
            /* binding */
            _Answer
          );
        }
        /* harmony export */

      });

      var _Answer = function _Answer(value, color, disabled) {
        _classCallCheck(this, _Answer);

        this.value = value;
        this.color = color;
        this.disabled = disabled;
      };
      /***/

    },

    /***/
    70125:
    /*!************************************************************!*\
      !*** ./src/app/games-list/trivia/trivia-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RiddlesPageRoutingModule": function RiddlesPageRoutingModule() {
          return (
            /* binding */
            _RiddlesPageRoutingModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _trivia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./trivia.page */
      18099);

      var routes = [{
        path: '',
        component: _trivia_page__WEBPACK_IMPORTED_MODULE_0__.RiddlesPage
      }];

      var _RiddlesPageRoutingModule = function RiddlesPageRoutingModule() {
        _classCallCheck(this, RiddlesPageRoutingModule);
      };

      _RiddlesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RiddlesPageRoutingModule);
      /***/
    },

    /***/
    18246:
    /*!***************************************************!*\
      !*** ./src/app/games-list/trivia/trivia.model.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Riddle": function Riddle() {
          return (
            /* binding */
            _Riddle
          );
        }
        /* harmony export */

      });

      var _Riddle = function _Riddle(question, answers, correct) {
        _classCallCheck(this, _Riddle);

        this.question = question;
        this.answers = answers;
        this.correct = correct;
      };
      /***/

    },

    /***/
    33981:
    /*!****************************************************!*\
      !*** ./src/app/games-list/trivia/trivia.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TriviaPageModule": function TriviaPageModule() {
          return (
            /* binding */
            _TriviaPageModule
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _trivia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./trivia-routing.module */
      70125);
      /* harmony import */


      var _trivia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./trivia.page */
      18099);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);

      var _TriviaPageModule = function TriviaPageModule() {
        _classCallCheck(this, TriviaPageModule);
      };

      _TriviaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _trivia_routing_module__WEBPACK_IMPORTED_MODULE_0__.RiddlesPageRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_trivia_page__WEBPACK_IMPORTED_MODULE_1__.RiddlesPage],
        providers: [],
        exports: [_trivia_page__WEBPACK_IMPORTED_MODULE_1__.RiddlesPage]
      })], _TriviaPageModule);
      /***/
    },

    /***/
    18099:
    /*!**************************************************!*\
      !*** ./src/app/games-list/trivia/trivia.page.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RiddlesPage": function RiddlesPage() {
          return (
            /* binding */
            _RiddlesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_trivia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./trivia.page.html */
      39983);
      /* harmony import */


      var _trivia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./trivia.page.scss */
      46145);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _trivia_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./trivia.model */
      18246);
      /* harmony import */


      var _answer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./answer.model */
      3036);
      /* harmony import */


      var _shared_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/game.service */
      5162);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/eventemitter.service */
      64874);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      10826);

      var _RiddlesPage = /*#__PURE__*/function () {
        function RiddlesPage(router, menu, gameService, eventemitter, alertCtrl) {
          _classCallCheck(this, RiddlesPage);

          this.router = router;
          this.menu = menu;
          this.gameService = gameService;
          this.eventemitter = eventemitter;
          this.alertCtrl = alertCtrl;
          this.typeArray = ["Arithmetic", "GK", "Similarity", "Vocabulary"];
          this.riddleArray = [];
          this.answerArray = [];
          this.choices = [];
          this.picked = false;
          this.threshold = 200; //Number of points to cross a level

          this.multiplier = 10; //Number of points each question is worth

          this.level = 1;
          this.maxLevel = 10;
          this.database = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
          this.gameHasBegun = false;
          this.gameno = 1;
          this.wrongs = 0;
          this.score = 0;
          this.passed = 0;
          this.gameOn = false;
          this.startButtonIsDisabled = false;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
          this.excerciseSet = false;
        }

        _createClass(RiddlesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription = this.eventemitter.gameStateSubj.subscribe(function (value) {
              switch (value) {
                case 'start':
                  _this.onStart();

                  console.log('start');
                  break;

                case 'restart':
                  _this.onRestart();

                  break;

                case 'resume':
                  _this.onResume();

                  break;

                case 'quit':
                  _this.onQuit();

                  break;

                case 'pause':
                  _this.onPause();

                  break;
              }
            });
            this.database = this.eventemitter.databaseemitter.subscribe(function (value) {
              if (value.level) {
                _this.level = value.level;
              }

              if (value.score) {
                _this.score = value.score;
              }
            });
            this.gameService.getLevelScore(this.gameno, this.excerciseSet);

            if (this.excerciseSet) {
              this.level = this.levels[0];
              this.score = 0;
            }
          }
        }, {
          key: "shuffle",
          value: function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }

            return array;
          }
        }, {
          key: "onStart",
          value: function onStart() {
            var _this2 = this;

            this.toGet = this.threshold - this.score;
            this.alertCtrl.create({
              header: 'Level: ' + this.level,
              message: 'You need' + ' ' + this.toGet + ' points to go to the next level',
              buttons: [{
                text: 'Continue',
                role: 'Continue',
                handler: function handler() {
                  _this2.gameHasBegun = true;
                  _this2.gameOn = true;

                  _this2.createGame();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "getLevel",
          value: function getLevel(no) {
            if (no % 4 == 0) {
              return 3;
            }

            if (no % 4 == 3) {
              return 2;
            }

            if (no % 4 == 2) {
              return 1;
            }

            if (no % 4 == 1) {
              return 0;
            }
          }
        }, {
          key: "createGame",
          value: function createGame() {
            var _this3 = this;

            //let currentLevel = this.level
            // this.lvl = Math.floor(currentLevel /= 100);
            //console.log("The level is", this.lvl)
            // this.round = this.level % 100
            this.lvl = Math.floor(Math.random() * 34) + 1; //Need to add type-based ranges if required

            this.gameService.trivia();
            this.database = this.eventemitter.databaseemitter.subscribe(function (value) {
              if (value.path) {
                if (_this3.passed == 0) {
                  _this3.passed++;
                  console.log(_this3.typeArray[_this3.getLevel(_this3.level)]);
                  _this3.question = value.value[_this3.typeArray[_this3.getLevel(_this3.level)]]['Q' + _this3.lvl]['Question'];
                  _this3.answer = value.value[_this3.typeArray[_this3.getLevel(_this3.level)]]['Q' + _this3.lvl]['Choices']['C1'];

                  for (var i = 1; i < 5; i++) {
                    _this3.choices.push(value.value[_this3.typeArray[_this3.getLevel(_this3.level)]]['Q' + _this3.lvl]['Choices']['C' + i]);
                  }

                  _this3.riddleArray.push(new _trivia_model__WEBPACK_IMPORTED_MODULE_2__.Riddle(_this3.question, _this3.choices, _this3.answer));

                  _this3.createAnswers();
                }
              }
            });
          }
        }, {
          key: "createAnswers",
          value: function createAnswers() {
            this.shuffle(this.riddleArray[0].answers);

            for (var x = 0; x < 4; x++) {
              this.answerArray.push(new _answer_model__WEBPACK_IMPORTED_MODULE_3__.Answer(this.riddleArray[0].answers[x], 'dark', false));
            }
          }
        }, {
          key: "pick",
          value: function pick(index) {
            console.log("Button is picked");

            if (this.picked != true) {
              this.picked = true;
              this.answerArray[index].color = "light";
              this.index = index;

              for (var x = 0; x < 4; x++) {
                if (x != index) {
                  this.answerArray[x].disabled = true;
                }
              }
            } else {
              this.picked = false;
              this.answerArray[index].color = "dark";

              for (var _x = 0; _x < 4; _x++) {
                this.answerArray[_x].disabled = false;
              }
            }
          }
        }, {
          key: "checker",
          value: function checker() {
            var _this4 = this;

            if (this.excerciseSet === true) {
              this.toGet = null;

              if (this.level > this.levels[1]) {
                this.level++;
                this.reset();
                this.createGame();
              }
            } else {//this.toGet = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1]
            }

            if (this.answerArray[this.index].value == this.riddleArray[0].correct) {
              this.score += this.multiplier;
              this.toGet = this.threshold - this.score;
              var timer = this.gameService.clearTimer();
              this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - this.multiplier, this.level - 1);
              this.alertCtrl.create({
                header: 'Correct!',
                message: 'Your Score is' + ' ' + this.score + " points. You need " + this.toGet + " points to finish the level",
                buttons: [{
                  text: 'Next Question',
                  role: 'Continue',
                  handler: function handler() {
                    _this4.reset();

                    console.log("Next Question");

                    _this4.levelCheck();
                  }
                }]
              }).then(function (alert) {
                return alert.present();
              });
            } else {
              this.toGet = this.threshold - this.score;
              this.alertCtrl.create({
                header: 'Wrong Answer',
                message: 'You need' + ' ' + this.toGet + ' points to go to the next level',
                buttons: [{
                  text: 'Next Question',
                  role: 'Continue',
                  handler: function handler() {
                    _this4.reset();

                    _this4.wrongs++;

                    var timer = _this4.gameService.clearTimer();

                    _this4.gameService.storeLevelScore(_this4.gameno, _this4.score, _this4.level, _this4.excerciseSet, timer, _this4.wrongs, _this4.score - _this4.multiplier, _this4.level - 1);

                    console.log("Next Question");

                    _this4.levelCheck();
                  }
                }]
              }).then(function (alert) {
                return alert.present();
              });
            }
          }
        }, {
          key: "levelCheck",
          value: function levelCheck() {
            var _this5 = this;

            if (this.score >= this.threshold) {
              if (this.level >= this.maxLevel) {
                this.alertCtrl.create({
                  header: 'GAME COMPLETE!!',
                  message: 'We hope you enjoyed playing Trivia. The Game is over. Exiting will reset the game',
                  buttons: [{
                    text: 'Next Question',
                    role: 'Continue',
                    handler: function handler() {
                      _this5.level = 1;
                      _this5.score = 0;

                      var timer = _this5.gameService.clearTimer();

                      _this5.gameService.storeLevelScore(_this5.gameno, _this5.score, _this5.level, _this5.excerciseSet, timer, _this5.wrongs, _this5.score - _this5.multiplier, _this5.level - 1);

                      _this5.onQuit();

                      console.log("Game Over");
                    }
                  }]
                }).then(function (alert) {
                  return alert.present();
                });
              } else {
                this.level++;
                this.score = 0;
                this.wrongs = 0;
                console.log("new type");
                var timer = this.gameService.clearTimer();
                this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - this.multiplier, this.level - 1);
                this.alertCtrl.create({
                  header: 'You have completed the level!',
                  message: 'We are switching to the ' + this.typeArray[this.lvl + 1] + ' type of questions. Best of luck!',
                  buttons: [{
                    text: 'Next Question',
                    role: 'Continue',
                    handler: function handler() {
                      console.log("Next Level/Type");
                    }
                  }]
                }).then(function (alert) {
                  return alert.present();
                });
              }
            } else {}

            this.createGame();
          }
        }, {
          key: "reset",
          value: function reset() {
            this.riddleArray = [];
            this.picked = false;
            this.answerArray = [];
            this.choices = [];
            this.answer = ""; //this.round = 0

            this.lvl = 0;
            this.passed = 0;
          }
        }, {
          key: "onQuit",
          value: function onQuit() {
            this.gameOn = false;
            this.router.navigate(['/home']);
          }
        }, {
          key: "onRevealHint",
          value: function onRevealHint() {}
        }, {
          key: "onRestart",
          value: function onRestart() {
            this.reset();
            this.score = 0;
            this.wrongs = 0;
            var timer = this.gameService.clearTimer();
            this.gameService.storeLevelScore(this.gameno, this.score, this.level, this.excerciseSet, timer, this.wrongs, this.score - 10, this.level - 1);
            this.createGame();
          }
        }, {
          key: "onResume",
          value: function onResume() {
            this.menu.close('pause');
          }
        }, {
          key: "onPause",
          value: function onPause() {
            console.log("paused");
            this.alertCtrl.create({
              header: 'Game is Paused',
              message: 'Hope your liking it!',
              buttons: [{
                text: 'Resume Game',
                role: 'Continue',
                handler: function handler() {
                  console.log("Game Resumed");
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.subscription.unsubscribe();
          }
        }]);

        return RiddlesPage;
      }();

      _RiddlesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: _shared_game_service__WEBPACK_IMPORTED_MODULE_4__.GameService
        }, {
          type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_5__.EventemitterService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }];
      };

      _RiddlesPage.propDecorators = {
        excerciseSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ['excerciseSet']
        }],
        levels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ['levels']
        }]
      };
      _RiddlesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-riddles',
        template: _raw_loader_trivia_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_trivia_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RiddlesPage);
      /***/
    },

    /***/
    46145:
    /*!****************************************************!*\
      !*** ./src/app/games-list/trivia/trivia.page.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  padding: 0 50px;\n  margin-top: 30px;\n}\n\nion-button {\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n\nion-icon {\n  margin-left: 10px;\n}\n\nh3 {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.submit {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXZpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUYiLCJmaWxlIjoidHJpdmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW57XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24taWNvbntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmgzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN1Ym1pdCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    39983:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/trivia/trivia.page.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n<app-description [(gameHasBegun)]=\"gameHasBegun\" [(startButtonIsDisabled)]=\"startButtonIsDisabled\" [(gameno)]=\"gameno\"></app-description>\n\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"level\" [(score)]=\"score\"></app-score>\n\n<ion-content class=\"background\" *ngIf=\"gameHasBegun\">\n\n  <h3 style=\"text-align: center\"><strong>{{ question }}</strong></h3>\n\n  <div class=\"main\">\n    <ion-button\n      [disabled] = \"answer.disabled\"\n      (click) = \"pick(ind)\"\n      color = \"{{ answer.color }}\"\n      expand = \"block\"\n      *ngFor = \"let answer of answerArray, index as ind\">\n     {{ answer.value }}\n    </ion-button>\n  </div>\n\n  <div class=\"submit\">\n    <ion-button\n      *ngIf = \"picked\"\n      class=\"main\"\n      color=\"warning\"\n      expand = \"block\"\n      (click)=\"checker()\">\n      Submit  \n   <ion-icon \n      name=\"enter-outline\"\n      size=\"large\">\n  </ion-icon>\n  </ion-button>\n</div>\n\n</ion-content>\n\n\n\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n  <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_games-list_trivia_trivia_module_ts-es5.js.map