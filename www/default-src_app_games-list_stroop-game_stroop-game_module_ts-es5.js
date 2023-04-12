(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_stroop-game_stroop-game_module_ts"], {
    /***/
    82016:
    /*!**************************************************************!*\
      !*** ./src/app/games-list/stroop-game/answerButton.model.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "answerButton": function answerButton() {
          return (
            /* binding */
            _answerButton
          );
        }
        /* harmony export */

      });

      var _answerButton = function _answerButton(value, clicked, color, box, disable) {
        _classCallCheck(this, _answerButton);

        this.value = value;
        this.clicked = clicked;
        this.color = color;
        this.box = box;
        this.disable = disable;
      };
      /***/

    },

    /***/
    44140:
    /*!*******************************************************!*\
      !*** ./src/app/games-list/stroop-game/level.model.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "level": function level() {
          return (
            /* binding */
            _level
          );
        }
        /* harmony export */

      });

      var _level = function _level(lvlNo, totalScore, scoreReq, elementCount, colorPool, wordPool, type, ratio) {
        _classCallCheck(this, _level);

        this.lvlNo = lvlNo;
        this.totalScore = totalScore;
        this.scoreReq = scoreReq;
        this.elementCount = elementCount;
        this.colorPool = colorPool;
        this.wordPool = wordPool;
        this.type = type;
        this.ratio = ratio;
      };
      /***/

    },

    /***/
    43936:
    /*!**********************************************************************!*\
      !*** ./src/app/games-list/stroop-game/stroop-game-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StroopGamePageRoutingModule": function StroopGamePageRoutingModule() {
          return (
            /* binding */
            _StroopGamePageRoutingModule
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


      var _stroop_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stroop-game.page */
      77136);

      var routes = [{
        path: '',
        component: _stroop_game_page__WEBPACK_IMPORTED_MODULE_0__.StroopGamePage
      }];

      var _StroopGamePageRoutingModule = function StroopGamePageRoutingModule() {
        _classCallCheck(this, StroopGamePageRoutingModule);
      };

      _StroopGamePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StroopGamePageRoutingModule);
      /***/
    },

    /***/
    47521:
    /*!**************************************************************!*\
      !*** ./src/app/games-list/stroop-game/stroop-game.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StroopGamePageModule": function StroopGamePageModule() {
          return (
            /* binding */
            _StroopGamePageModule
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


      var _stroop_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stroop-game-routing.module */
      43936);
      /* harmony import */


      var _stroop_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stroop-game.page */
      77136);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);

      var _StroopGamePageModule = function StroopGamePageModule() {
        _classCallCheck(this, StroopGamePageModule);
      };

      _StroopGamePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _stroop_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.StroopGamePageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_stroop_game_page__WEBPACK_IMPORTED_MODULE_1__.StroopGamePage],
        exports: [_stroop_game_page__WEBPACK_IMPORTED_MODULE_1__.StroopGamePage]
      })], _StroopGamePageModule);
      /***/
    },

    /***/
    77136:
    /*!************************************************************!*\
      !*** ./src/app/games-list/stroop-game/stroop-game.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StroopGamePage": function StroopGamePage() {
          return (
            /* binding */
            _StroopGamePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_stroop_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stroop-game.page.html */
      85515);
      /* harmony import */


      var _stroop_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stroop-game.page.scss */
      63575);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _stroop_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stroop-service.service */
      47356);
      /* harmony import */


      var _answerButton_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./answerButton.model */
      82016);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/eventemitter.service */
      64874);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _shared_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/game.service */
      5162);

      var _StroopGamePage = /*#__PURE__*/function () {
        function StroopGamePage(data, //private menu: MenuController,
        router, eventemitter, animationCtrl, gameService, alertCtrl) {
          _classCallCheck(this, StroopGamePage);

          this.data = data;
          this.router = router;
          this.eventemitter = eventemitter;
          this.animationCtrl = animationCtrl;
          this.gameService = gameService;
          this.alertCtrl = alertCtrl;
          this.database = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
          this.levelArray = [];
          this.buttonArray = [];
          this.currentLevel = 1;
          this.colorAnswerCount = 0;
          this.wordAnswerCount = 0;
          this.levelAnswerCount = 0;
          this.correctCount = 0;
          this.startSeen = true;
          this.roundScore = 0;
          this.cardSeen = false;
          this.loopCount = 0;
          this.gameno = 7;
          this.startButtonIsDisabled = false;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
          this.wrongs = 0;
          this.currentIndex = 0;
          this.gameOn = false;
          this.constant = 0;
          this.excerciseMode = false;
        }

        _createClass(StroopGamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.database = this.eventemitter.databaseemitter.subscribe(function (value) {
              if (value.level) {
                _this.currentLevel = value.level;
              }

              if (value.score) {
                _this.levelArray[_this.currentLevel - 1].totalScore = value.score;
              }
            });
            this.gameService.getLevelScore(this.gameno, this.excerciseMode);
            this.data.sendlevel.subscribe(function (level) {
              return _this.levelArray = level;
            });
            this.subscription = this.eventemitter.gameStateSubj.subscribe(function (value) {
              console.log(value);

              switch (value) {
                case 'start':
                  _this.onStart();

                  break;

                case 'restart':
                  _this.onRestart();

                  break;

                case 'resume':
                  _this.onResume();

                  break;

                case 'quit':
                  _this.quitGame();

                  break;

                case 'pause':
                  _this.onPause();

              }
            });

            if (this.excerciseMode) {
              this.currentLevel = this.levels[0];
              this.levelArray[this.currentLevel - 1].totalScore = 0;
            }
          }
        }, {
          key: "onStart",
          value: function onStart() {
            var _this2 = this;

            this.toGet = this.levelArray[this.currentLevel - 1].scoreReq - this.levelArray[this.currentLevel - 1].totalScore;
            this.message = "You need" + ' ' + this.toGet + ' ' + "points to clear the level";
            console.log("stroopstart");
            this.alertCtrl.create({
              header: 'Level: ' + this.currentLevel,
              message: this.message,
              buttons: [{
                text: 'Continue',
                role: 'Continue',
                handler: function handler() {
                  _this2.createLevel();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
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
          key: "createSecondPool",
          value: function createSecondPool(value, arr) {
            var _final = [];

            for (var count = 0; count < arr.length; count++) {
              for (var i = 1; i <= value; i++) {
                _final.push(arr[count]);
              }
            }

            return this.shuffle(_final);
          }
        }, {
          key: "remove",
          value: function remove(arr, string) {
            var _final2 = arr;

            for (var i = 0; i < _final2.length; i++) {
              if (_final2[i] == string) {
                _final2.splice(i, 1);
              }
            }

            return _final2;
          }
        }, {
          key: "createPool",
          value: function createPool(arr, answer, index) {
            var _final3 = [];
            var correctPush = Math.round(this.levelArray[index].ratio / 100 * this.levelArray[index].elementCount);
            var wrongPush = Math.round((100 - this.levelArray[index].ratio) / 100 * this.levelArray[index].elementCount);

            for (var i = 0; i <= correctPush; i++) {
              _final3.push(answer);
            }

            for (var _i = 0; _i <= wrongPush / arr.length; _i++) {
              for (var c = 0; c < arr.length; c++) {
                _final3.push(arr[c]);
              }
            }

            return this.shuffle(_final3);
          }
        }, {
          key: "booleanPool",
          value: function booleanPool(trueValue, falseValue) {
            var arr = [];

            for (var i = 0; i < trueValue; i++) {
              arr.push('outline');
            }

            for (var j = 0; j < falseValue; j++) {
              arr.push('clear');
            }

            return this.shuffle(arr);
          }
        }, {
          key: "createLevel",
          value: function createLevel() {
            if (this.message == "Game Complete") {
              this.quitGame();
            }

            console.log(this.levelArray[this.currentLevel - 1]);
            this.startSeen = false;
            this.gameOn = true;

            if (this.levelArray[this.currentLevel - 1].type == 1) {
              this.createTypeOne();
            }

            if (this.levelArray[this.currentLevel - 1].type == 2) {
              this.createTypeTwo();
            }
          }
        }, {
          key: "createTypeOne",
          value: function createTypeOne() {
            console.log(this.constant);

            if (this.loopCount >= this.levelArray[this.currentLevel - 1].wordPool.length) {
              this.loopCount = 0;
            }

            this.answer = this.levelArray[this.currentLevel - 1].wordPool[this.loopCount];
            this.loopCount++;
            this.valueArray = this.createPool(this.levelArray[this.currentLevel - 1].wordPool, this.answer, this.currentLevel - 1);
            this.colorArray = this.createSecondPool(this.levelArray[this.currentLevel - 1].elementCount, this.levelArray[this.currentLevel - 1].colorPool);

            for (var i = 0; i <= this.levelArray[this.currentLevel - 1].elementCount; i++) {
              this.buttonValue = this.valueArray[i];
              this.buttonColor = this.colorArray[i];

              if (this.buttonColor == null) {
                this.buttonColor = this.levelArray[this.currentLevel - 1].colorPool[0];
                console.log("ehgiwhpegh");
              }

              this.question = 'Select the words that say' + ' ' + this.answer;
              this.buttonArray.push(new _answerButton_model__WEBPACK_IMPORTED_MODULE_3__.answerButton(this.buttonValue, false, this.buttonColor, 'clear', true));

              if (this.buttonValue == this.answer) {
                this.levelAnswerCount++;
              }
            }

            this.switchColor(0, 'normal');
            this.gameService.startTimer();
          }
        }, {
          key: "switchColor",
          value: function switchColor(i, state) {
            var _this3 = this;

            this.currentIndex = i;

            if (i < this.buttonArray.length) {
              this.buttonArray[i].disable = false;
              this.timeVar = setTimeout(function () {
                _this3.buttonArray[i].disable = true;

                if (_this3.buttonArray[i].clicked == false && _this3.buttonArray[i].value == _this3.answer) {
                  if (i == _this3.buttonArray.length - 1) {
                    console.log("CHECK CHECK CHECK");

                    _this3.checkAnswer(i, _this3.buttonArray[i].color, _this3.buttonArray[i].value, _this3.buttonArray[i].box);
                  }

                  _this3.wrongs++;
                  _this3.roundScore = _this3.gameService.getScore(_this3.levelArray[_this3.currentLevel - 1].elementCount, _this3.wrongs);
                  _this3.levelArray[_this3.currentLevel - 1].totalScore = _this3.roundScore + _this3.constant;

                  _this3.switchColor(i + 1, 'normal');
                }

                if (_this3.buttonArray[i].clicked == false && _this3.buttonArray[i].value != _this3.answer) {
                  _this3.switchColor(i + 1, 'normal');
                }

                console.log("Changed" + _this3.buttonArray[i]);
              }, 3000);
            }
          }
        }, {
          key: "switchColorTwo",
          value: function switchColorTwo(i, state) {
            var _this4 = this;

            this.currentIndex = i;

            if (i < this.buttonArray.length) {
              this.buttonArray[i].disable = false;
              this.timeVar = setTimeout(function () {
                _this4.buttonArray[i].disable = true;

                if (_this4.buttonArray[i].clicked == false && _this4.buttonArray[i].color == _this4.answer) {
                  if (i == _this4.buttonArray.length - 1) {
                    console.log("CHECK CHECK CHECK");

                    _this4.checkAnswer(i, _this4.buttonArray[i].color, _this4.buttonArray[i].value, _this4.buttonArray[i].box);
                  }

                  _this4.wrongs++;
                  _this4.roundScore = _this4.gameService.getScore(_this4.levelArray[_this4.currentLevel - 1].elementCount, _this4.wrongs);
                  _this4.levelArray[_this4.currentLevel - 1].totalScore = _this4.roundScore + _this4.constant;

                  _this4.switchColorTwo(i + 1, 'normal');
                }

                if (_this4.buttonArray[i].clicked == false && _this4.buttonArray[i].color != _this4.answer) {
                  _this4.switchColorTwo(i + 1, 'normal');
                }

                _this4.buttonArray[i].color = "white";
                console.log("Changed" + _this4.buttonArray[i]);
              }, 3000);
            }
          }
        }, {
          key: "createTypeTwo",
          value: function createTypeTwo() {
            if (this.loopCount >= this.levelArray[this.currentLevel - 1].wordPool.length) {
              this.loopCount = 0;
            }

            this.answer = this.levelArray[this.currentLevel - 1].colorPool[this.loopCount];
            this.loopCount++;
            this.valueArray = this.createSecondPool(this.levelArray[this.currentLevel - 1].elementCount, this.levelArray[this.currentLevel - 1].wordPool);
            this.colorArray = this.createPool(this.levelArray[this.currentLevel - 1].colorPool, this.answer, this.currentLevel - 1);

            for (var i = 0; i <= this.levelArray[this.currentLevel - 1].elementCount; i++) {
              this.buttonValue = this.data.random(this.valueArray);
              this.buttonColor = this.data.random(this.colorArray);
              this.question = 'Select the words colored' + ' ' + this.answer;
              this.buttonArray.push(new _answerButton_model__WEBPACK_IMPORTED_MODULE_3__.answerButton(this.buttonValue, false, this.buttonColor, 'clear', true));

              if (this.buttonColor == this.answer) {
                this.levelAnswerCount++;
              }
            }

            this.switchColorTwo(0, 'normal');
          }
        }, {
          key: "checkAnswer",
          value: function checkAnswer(index, colorValue, wordValue, boxValue) {
            var _this5 = this;

            clearTimeout(this.timeVar);

            if (this.excerciseMode === true) {
              this.toGet = null;

              if (this.currentLevel > this.levels[1]) {
                this.nextRound();
              }
            } else {//this.toGet = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1]
            }

            if (this.levelArray[this.currentLevel - 1].type == 1) {
              if (wordValue == this.answer) {
                this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs);
                this.levelArray[this.currentLevel - 1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs) + this.constant;
                this.correctCount++;
                console.log("Index is " + index); //this.buttonArray[index].value="Correct!"

                this.buttonArray[index].color = "Black";
                setTimeout(function () {//this.buttonArray[index].value=" "
                  //this.buttonArray[index].color="White"
                }, 500);
                this.buttonArray[index].disable = true;
                this.switchColor(index + 1, 'normal');
              } else {
                this.wrongs++;
                this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs);
                this.levelArray[this.currentLevel - 1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs) + this.constant; //this.buttonArray[index].value="Wrong!"

                this.buttonArray[index].color = "Black";
                setTimeout(function () {//this.buttonArray[index].value=" "
                  //this.buttonArray[index].color="White"
                }, 500);
                this.buttonArray[index].disable = true;
                this.switchColor(index + 1, 'normal');
              }
            }

            if (this.levelArray[this.currentLevel - 1].type == 2) {
              if (colorValue == this.answer) {
                this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs);
                this.levelArray[this.currentLevel - 1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs) + this.constant;
                this.correctCount++;
                console.log("Index is " + index); //this.buttonArray[index].value="Correct!"

                this.buttonArray[index].color = "Black";
                setTimeout(function () {// this.buttonArray[index].value=" "
                  // this.buttonArray[index].color="White"
                }, 500);
                this.buttonArray[index].disable = true;
                this.switchColorTwo(index + 1, 'normal');
              } else {
                this.wrongs++;
                this.roundScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs);
                this.levelArray[this.currentLevel - 1].totalScore = this.gameService.getScore(this.levelArray[this.currentLevel - 1].elementCount, this.wrongs); // this.buttonArray[index].value="Wrong!"

                this.buttonArray[index].color = "Black";
                setTimeout(function () {//this.buttonArray[index].value=" "
                  // this.buttonArray[index].color="White"
                }, 500);
                this.buttonArray[index].disable = true;
                this.switchColorTwo(index + 1, 'normal');
              }
            }

            if (this.excerciseMode === false && this.correctCount == this.levelAnswerCount && this.levelArray[this.currentLevel - 1].totalScore >= this.levelArray[this.currentLevel - 1].scoreReq) {
              if (this.currentLevel >= 10) {
                this.message = "Game Complete";
                console.log("Game Complete testest");
                this.quitGame();
                this.resetGame();
              }

              console.log("LEVEL DONE DONE DONE");
              this.levelDone = true;
              setTimeout(function () {
                _this5.nextLevel();
              }, 200);
              this.message = "Level Complete";
            } else if (this.correctCount == this.levelAnswerCount) {
              var timer = this.gameService.clearTimer();
              this.constant += this.roundScore;
              console.log("ROUND DONE DONE DONE");
              this.gameService.storeLevelScore(this.gameno, this.levelArray[this.currentLevel - 1].totalScore, this.currentLevel, this.excerciseMode, timer, this.wrongs, this.constant, this.currentLevel); //this.nextRound()
              //this.cardSeen = true;

              this.levelDone = false;
              setTimeout(function () {
                _this5.nextRound();
              }, 200);
            }

            if (this.excerciseMode === true) {
              this.currentLevel++;

              if (this.levels[1] > this.currentLevel) {
                this.eventemitter.onRoundFinished({
                  "continue": true,
                  score: this.levelArray[this.currentLevel - 2].totalScore + this.levelArray[this.currentLevel - 1].totalScore
                });
              }
            }

            this.buttonArray[index].color = "white";
            this.toGet = this.levelArray[this.currentLevel - 1].scoreReq - this.levelArray[this.currentLevel - 1].totalScore;
            console.log("Button Color, Value, Fill is" + ' ' + colorValue, wordValue, boxValue);
            console.log("Round Score is" + ' ' + this.roundScore);
            console.log("Total Score is" + ' ' + this.levelArray[this.currentLevel - 1].totalScore); //this.eventemitter.onSendScore(this.levelArray[this.currentLevel-1].totalScore)
          }
        }, {
          key: "card",
          value: function card() {
            //this.cardSeen=true
            this.message = "You need" + ' ' + this.toGet + ' ' + "points to clear the level";
            this.question = '';
            this.buttonArray = [];
            var i = 0;

            for (i; i < this.buttonArray.length; i++) {
              this.buttonArray[i].clicked = true;
            }

            this.onStart();
          }
        }, {
          key: "newRound",
          value: function newRound() {
            this.valueArray = [];
            this.colorArray = [];
            this.buttonArray = [];
            this.valueArray = [];
            this.buttonValue = '';
            this.colorArray = [];
            this.buttonColor = '';
            this.question = '';
            this.answer = '';
            this.colorAnswerCount = 0;
            this.currentIndex = 0;
            this.wordAnswerCount = 0;
            this.levelAnswerCount = 0;
            this.correctCount = 0;
            this.cardSeen = false;
            this.levelArray[this.currentLevel - 1].totalScore = this.levelArray[this.currentLevel - 1].totalScore - this.roundScore; //this.eventemitter.onSendScore(this.levelArray[this.currentLevel-1].totalScore)

            console.log('New score is' + ' ' + this.levelArray[this.currentLevel - 1].totalScore); //this.createLevel()

            this.onStart();
          }
        }, {
          key: "getId",
          value: function getId() {
            if (this.cardSeen == true) {
              return 'roundBlur';
            } else {
              return 'round';
            }
          }
        }, {
          key: "nextRound",
          value: function nextRound() {
            if (this.levelDone == true) {
              this.nextLevel();
            }

            var cardPopup = this.animationCtrl.create().addElement(document.querySelector('.card')).duration(250).iterations(1).fromTo('opacity', '1', '0').fromTo('top', '45%', '90%');
            cardPopup.play();
            this.valueArray = [];
            this.colorArray = [];
            this.buttonArray = [];
            this.valueArray = [];
            this.buttonValue = '';
            this.colorArray = [];
            this.buttonColor = '';
            this.question = '';
            this.currentIndex = 0;
            this.answer = '';
            this.wrongs = 0;
            this.colorAnswerCount = 0;
            this.wordAnswerCount = 0;
            this.levelAnswerCount = 0;
            this.correctCount = 0;
            this.roundScore = 0;
            this.cardSeen = false; //this.createLevel()

            this.onStart();
          }
        }, {
          key: "nextLevel",
          value: function nextLevel() {
            this.question = ' ';
            var i = 0;

            for (i; i < this.buttonArray.length; i++) {
              this.buttonArray[i].clicked = true;
            }

            var cardPopup = this.animationCtrl.create().addElement(document.querySelector('.card')).duration(250).iterations(1).fromTo('opacity', '1', '0').fromTo('top', '45%', '90%');
            cardPopup.play();
            this.valueArray = [];
            this.colorArray = [];
            this.buttonArray = [];
            this.valueArray = [];
            this.buttonValue = '';
            this.colorArray = [];
            this.buttonColor = '';
            this.question = '';
            this.answer = '';
            this.loopCount = 0;
            this.currentLevel++;
            this.colorAnswerCount = 0;
            this.wordAnswerCount = 0;
            this.levelAnswerCount = 0;
            this.constant = 0;
            this.correctCount = 0;
            this.roundScore = 0;
            this.cardSeen = false; //this.eventemitter.onSendScore(0)

            console.log('Next level');
            var timer = this.gameService.clearTimer();
            console.log("SET SCORE");
            this.gameService.storeLevelScore(this.gameno, this.levelArray[this.currentLevel - 1].totalScore, this.currentLevel, this.excerciseMode, timer, this.wrongs, this.constant, this.currentLevel - 1); //this.createLevel()

            this.onStart();
          }
        }, {
          key: "onRestart",
          value: function onRestart() {
            clearTimeout(this.timeVar);
            console.log('Game Restarted');
            var i = 0;

            for (i; i < this.buttonArray.length; i++) {
              this.buttonArray[i].clicked = false;
            }

            if (this.levelArray[this.currentLevel - 1].type == 1) {
              this.switchColor(this.currentIndex, 'normal');
            }

            if (this.levelArray[this.currentLevel - 1].type == 2) {
              this.switchColorTwo(this.currentIndex, 'normal');
            }

            this.newRound();
          }
        }, {
          key: "onResume",
          value: function onResume() {}
        }, {
          key: "onPause",
          value: function onPause() {
            clearTimeout(this.timeVar);
          }
        }, {
          key: "quitGame",
          value: function quitGame() {
            this.gameOn = false;
            var timer = this.gameService.clearTimer();
            clearTimeout(this.timeVar);
            this.levelArray[this.currentLevel - 1].totalScore = this.levelArray[this.currentLevel - 1].totalScore - this.roundScore;
            this.gameService.storeLevelScore(this.gameno, this.levelArray[this.currentLevel - 1].totalScore, this.currentLevel, this.excerciseMode, timer, this.wrongs, this.constant, this.currentLevel - 1);
            this.router.navigate(['/home']);
          }
        }, {
          key: "resetGame",
          value: function resetGame() {}
        }, {
          key: "endGame",
          value: function endGame() {}
        }, {
          key: "getColor",
          value: function getColor(value) {
            switch (value) {
              case 'Red':
                return '#ff0000';

              case 'Blue':
                return '#0646c7';

              case 'Yellow':
                return '#ebc50c';

              case 'Green':
                return '#19d408';

              case 'Black':
                return '#000000';

              case 'Pink':
                return '#eb0ca8';

              case 'Brown':
                return '#6b2f01';

              case 'White':
                return '#ffffff';
            }
          }
        }, {
          key: "getFill",
          value: function getFill(value) {
            switch (value) {
              case true:
                return 'outline';

              case false:
                return 'clear';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// this.subscription.unsubscribe()
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.subscription.unsubscribe();
          }
        }]);

        return StroopGamePage;
      }();

      _StroopGamePage.ctorParameters = function () {
        return [{
          type: _stroop_service_service__WEBPACK_IMPORTED_MODULE_2__.StroopService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__.EventemitterService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AnimationController
        }, {
          type: _shared_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }];
      };

      _StroopGamePage.propDecorators = {
        excerciseMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ['excerciseSet']
        }],
        levels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ['levels']
        }]
      };
      _StroopGamePage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-stroop-game',
        template: _raw_loader_stroop_game_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stroop_game_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StroopGamePage);
      /***/
    },

    /***/
    47356:
    /*!******************************************************************!*\
      !*** ./src/app/games-list/stroop-game/stroop-service.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StroopService": function StroopService() {
          return (
            /* binding */
            _StroopService
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


      var _level_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./level.model */
      44140);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);

      var _StroopService = /*#__PURE__*/function () {
        function StroopService() {
          _classCallCheck(this, StroopService);

          this.levelArray = [new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(1, 0, 100, 23, ['Black'], ['Red', 'Yellow', 'Green', 'Blue'], 1, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(2, 0, 200, 27, ['Red', 'Black', 'Yellow'], ['Red', 'Black', 'Yellow'], 2, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(3, 0, 200, 27, ['Yellow', 'Pink', 'Black'], ['Yellow', 'Pink', 'Black'], 1, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(4, 0, 200, 27, ['Green', 'Blue', 'Red'], ['Green', 'Blue', 'Red'], 2, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(5, 0, 200, 27, ['Black', 'Green', 'Red', 'Blue'], ['Red', 'Black', 'Green', 'Blue'], 1, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(6, 0, 200, 27, ['Green', 'Blue', 'Black', 'Red'], ['Red', 'Black', 'Green', 'Blue'], 1, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(7, 0, 200, 27, ['Red', 'Yellow', 'Green', 'Blue'], ['Red', 'Brown', 'Yellow', 'Blue'], 2, 80), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(8, 0, 200, 27, ['Red', 'Black', 'Green', 'Yellow'], ['Blue', 'Red', 'Yellow', 'Blue'], 2, 70), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(9, 0, 250, 23, ['Yellow', 'Black', 'Green', 'Blue'], ['Red', 'Green', 'Black', 'Blue'], 1, 70), new _level_model__WEBPACK_IMPORTED_MODULE_0__.level(10, 0, 250, 27, ['Red', 'Yellow', 'Green', 'Blue'], ['Red', 'Green', 'Yellow', 'Blue'], 2, 60)];
          this.level = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.levelArray);
          this.sendlevel = this.level.asObservable();
        }

        _createClass(StroopService, [{
          key: "random",
          value: function random(arr) {
            var string = arr[Math.floor(Math.random() * arr.length)];
            return string;
          }
        }]);

        return StroopService;
      }();

      _StroopService.ctorParameters = function () {
        return [];
      };

      _StroopService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _StroopService);
      /***/
    },

    /***/
    63575:
    /*!**************************************************************!*\
      !*** ./src/app/games-list/stroop-game/stroop-game.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color:#ffff;\n}\n\np {\n  color: #271d1d;\n  font-family: Sans-Serif;\n}\n\nh3 {\n  font-family: Sans-Serif;\n  color: black;\n}\n\nion-content {\n  --background: var(#b8b6b6);\n}\n\nion-button {\n  text-transform: none;\n}\n\n#round {\n  font-family: \"Trebuchet MS\";\n  width: 23.5vw;\n  height: 10%;\n  --border-color: \"Red\";\n}\n\n#roundBlur {\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(15px);\n  width: 32%;\n  height: 10%;\n}\n\n.card {\n  transform: translate(-50%, -50%);\n  top: 90%;\n  left: 50%;\n  width: 65%;\n  position: absolute;\n  opacity: 0;\n}\n\n.card .card-header {\n  color: \"primary\";\n  position: relative;\n  text-align: center;\n  top: 10%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n}\n\n.center {\n  margin-left: 50%;\n  margin-right: auto;\n  display: block;\n}\n\n.startCard {\n  position: absolute;\n}\n\n.startCard .card-header {\n  color: \"primary\";\n  position: relative;\n  text-align: center;\n  top: 10%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n}\n\n.startCard .img {\n  max-width: 100%;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cm9vcC1nYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNHLHVCQUFBO0VBQ0MsWUFBQTtBQUFKOztBQUdBO0VBQ0ksMEJBQUE7QUFBSjs7QUFJQTtFQUNJLG9CQUFBO0FBREo7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUVJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFESjs7QUFRQTtFQUVJLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTko7O0FBUUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5SOztBQVVDO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFnQkE7RUFPSSxrQkFBQTtBQW5CSjs7QUFxQkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQW5CUjs7QUF1Qkk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQXJCUiIsImZpbGUiOiJzdHJvb3AtZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmO1xuICAgXG59XG5cbnAge1xuICAgIGNvbG9yOiByZ2IoMzksIDI5LCAyOSkgO1xuICAgIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmO1xufVxuXG5oMyB7XG4gICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcbiAgICBjb2xvcjogYmxhY2sgO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoI2I4YjZiNik7IC8vIFJlcGxhY2UgdGhpcyB3aXRoIGNvbG9yIG9mIHlvdXIgY2hvaWNlXG4gIH1cblxuXG5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSA7XG59XG5cbiNyb3VuZCB7XG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xuICAgIHdpZHRoOiAyMy41dnc7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgLS1ib3JkZXItY29sb3I6IFwiUmVkXCI7XG59XG5cbiNyb3VuZEJsdXIge1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgLW1vei1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAtby1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAtbXMtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgZmlsdGVyOiBibHVyKDE1cHgpO1xuICAgIHdpZHRoOiAzMiU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gLy8gICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAvLyAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAvLyAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAvLyAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cbi5jYXJkIHtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRvcDogOTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNjUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgLmNhcmQtaGVhZGVye1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgZm9udC1zaXplOiAzLjBlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIFxuICAgIH1cbiB9XG4gLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuI2J1dHRvbiB7XG4gICAgLy9tYXJnaW4tdG9wOiA0NXZoO1xuICAgIC8vbWFyZ2luLWxlZnQ6NDB2dztcbn1cblxuLnN0YXJ0Q2FyZCB7XG5cbiAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC8vdG9wOiA1MCU7XG4gICAgLy9sZWZ0OiA1MCU7XG4gICAgLy93aWR0aDogMjUlO1xuICAgIC8vaGVpZ2h0OiA3NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlOztcblxuICAgIC5jYXJkLWhlYWRlcntcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMy4wZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiBcbiAgICB9XG5cbiAgICAuaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxufVxuXG5cblxuIl19 */";
      /***/
    },

    /***/
    85515:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/stroop-game/stroop-game.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"!startSeen\" ></app-header>\n<app-description [(gameHasBegun)]=\"gameOn\" [(startButtonIsDisabled)]=\"startButtonIsDisabled\" [(gameno)]=\"gameno\"></app-description>\n\n\n<app-score *ngIf=\"gameOn\" [(level)]=\"currentLevel\" [(score)]=\"levelArray[this.currentLevel-1].totalScore\"></app-score>\n\n<ion-content *ngIf=\"!gameOn && !excerciseMode\"></ion-content>\n\n<ion-content *ngIf=\"gameOn\" padding class=\"background\">\n\n<h3 style=\"text-align: center\"><strong>{{ question }}</strong></h3>\n  \n<ion-button \n      id= \"{{cardSeen==true ? 'roundBlur': 'round'}}\"\n      *ngFor=\"let element of buttonArray; index as i\"  \n      fill= \"clear\"\n      color =\"dark\"\n      shape = \"round\"\n      [ngStyle]=\"{'background':getColor(element.color)}\"\n      class=\"buttons\"\n     (click)=\"checkAnswer(i, element.color, element.value, element.box)\" (click)=\"element.clicked='true'\" [disabled]=\"element.disable\"> \n    {{ element.value }}\n</ion-button>\n\n</ion-content>\n\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameOn\" ></app-menu>\n  <app-start [(gameHasBegun)]=\"gameOn\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_games-list_stroop-game_stroop-game_module_ts-es5.js.map