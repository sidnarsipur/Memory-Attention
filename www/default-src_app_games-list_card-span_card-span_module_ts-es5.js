(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_card-span_card-span_module_ts"], {
    /***/
    55352:
    /*!******************************************************************!*\
      !*** ./src/app/games-list/card-span/card-span-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardSpanPageRoutingModule": function CardSpanPageRoutingModule() {
          return (
            /* binding */
            _CardSpanPageRoutingModule
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


      var _card_span_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./card-span.page */
      75782);

      var routes = [{
        path: '',
        component: _card_span_page__WEBPACK_IMPORTED_MODULE_0__.CardSpanPage
      }];

      var _CardSpanPageRoutingModule = function CardSpanPageRoutingModule() {
        _classCallCheck(this, CardSpanPageRoutingModule);
      };

      _CardSpanPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CardSpanPageRoutingModule);
      /***/
    },

    /***/
    84754:
    /*!**********************************************************!*\
      !*** ./src/app/games-list/card-span/card-span.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardSpanPageModule": function CardSpanPageModule() {
          return (
            /* binding */
            _CardSpanPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _card_span_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./card-span-routing.module */
      55352);
      /* harmony import */


      var _card_span_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-span.page */
      75782);
      /* harmony import */


      var _card_span_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-span.service */
      82820);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);

      var _CardSpanPageModule = function CardSpanPageModule() {
        _classCallCheck(this, CardSpanPageModule);
      };

      _CardSpanPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _card_span_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardSpanPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
        declarations: [_card_span_page__WEBPACK_IMPORTED_MODULE_1__.CardSpanPage],
        providers: [_card_span_service__WEBPACK_IMPORTED_MODULE_2__.CardSpanService],
        exports: [_card_span_page__WEBPACK_IMPORTED_MODULE_1__.CardSpanPage]
      })], _CardSpanPageModule);
      /***/
    },

    /***/
    75782:
    /*!********************************************************!*\
      !*** ./src/app/games-list/card-span/card-span.page.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardSpanPage": function CardSpanPage() {
          return (
            /* binding */
            _CardSpanPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_card_span_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./card-span.page.html */
      19404);
      /* harmony import */


      var _card_span_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-span.page.scss */
      16365);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _card_span_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-span.service */
      82820);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./card.model */
      58397);
      /* harmony import */


      var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/eventemitter.service */
      64874);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _shared_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/game.service */
      5162);

      var _CardSpanPage = /*#__PURE__*/function () {
        function CardSpanPage(router, cardService, animationCtrl, eventemitter, alertCtrl, gameService // private renderer: Renderer2
        ) {
          _classCallCheck(this, CardSpanPage);

          this.router = router;
          this.cardService = cardService;
          this.animationCtrl = animationCtrl;
          this.eventemitter = eventemitter;
          this.alertCtrl = alertCtrl;
          this.gameService = gameService;
          this.excerciseMode = false;
          this.gameHasBegun = false;
          this.cardsRemembered = 0;
          this.correct = false;
          this.wrong = false;
          this.formIsHidden = true;
          this.formSuites = ["club", "heart", "diamond", "spade"];
          this.suiteIsSelected = false;
          this.answerCards = [];
          this.cardCount = 0;
          this.lost = false;
          this.chipsAreDisabled = false;
          this.submitIsTrue = false;
          this.cardCountIsHidden = false;
          this.gameno = 2;
          this.startButtonIsDisabled = false;
          this.isFaded = 'faded';
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
          this.cardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
          this.database = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        }

        _createClass(CardSpanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // gets a pre-existing level and score if it exists from the database
            var levelscore = this.gameService.getLevelScore(this.gameno, this.excerciseMode);
            this.gameService.getLevelScore(this.gameno, this.excerciseMode);
            this.database = this.eventemitter.databaseemitter.subscribe(function (value) {
              if (value.level) {
                _this.cardService.level = value.level;
              }

              if (value.score) {
                _this.cardService.score = value.score;
              }
            }); // gets the call to animate from the service

            this.eventemitter.animate.subscribe(function (value) {
              if (value === 'brighten') {
                // this.brighten()
                // setTimeout(() => {
                // this.isFaded = 'bright'
                // console.log('bright') 
                setTimeout(function () {
                  _this.brighten();
                }, 100); // }, 150)
              }

              if (value === 'fade') {
                setTimeout(function () {
                  _this.fade();
                }, 1000);
              }
            }); // gets the call to shift to the selecting screen from the service

            this.eventemitter.form.subscribe(function (value) {
              if (value === 'disappear') {
                _this.formIsHidden = true;
              }

              if (value === 'reappear') {
                _this.formIsHidden = false;

                _this.gameService.startTimer();

                _this.wrong = false;
                _this.correct = false;
              }
            }); // gets the current card type from the service for example queen of spades

            this.cardSubscription = this.eventemitter.CurrentCardRoute.subscribe(function (value) {
              console.log(value);
              _this.cardRoute = value;
              setTimeout(function () {
                _this.fade();
              }, 300);
              setTimeout(function () {
                _this.brighten();
              }, 1000);
            }); // gets the different game function calls like start, end game, restart, resume, quit

            this.subscription = this.eventemitter.gameStateSubj.subscribe(function (value) {
              console.log(value);

              switch (value) {
                case 'start':
                  _this.onStart();

                  break;

                case 'restart':
                  _this.startButtonIsDisabled = true;

                  _this.onEndGame();

                  setTimeout(function () {
                    _this.onRestart();
                  }, 700);
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

                case 'stop':
                  _this.onEndGame();

                  break;
              }
            }); // sets level if it is in excerciseMode (meaning it is part of excercise set)

            if (this.excerciseMode) {
              this.cardService.level = this.levels[0];
              this.cardService.score = 0;
            }
          } // goes back to home screen

        }, {
          key: "onQuit",
          value: function onQuit() {
            this.gameHasBegun = false;
            this.router.navigate(['/home']);
          } // starts the game with the popup

        }, {
          key: "onStart",
          value: function onStart() {
            var _this2 = this;

            console.log("cardspanstart");
            this.alertCtrl.create({
              header: 'Level: ' + this.getLevelandScore()[0],
              message: 'You need ' + (this.gameService.scoringconstant - this.getLevelandScore()[1]) + ' points to go to the next level',
              buttons: [{
                text: 'Continue',
                role: 'Continue',
                handler: function handler() {
                  _this2.gameHasBegun = true;

                  _this2.cardService.generateCards();

                  _this2.lost = false;
                  _this2.cardsRemembered = 0;
                  _this2.cardCountIsHidden = false;
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          } // fade animation

        }, {
          key: "fade",
          value: function fade() {
            // this.opacity = 'fade'
            this.isFaded = 'bright'; // console.log('bright')
            // const fade = this.animationCtrl.create()
            // .addElement(this.currentCardView.nativeElement)
            // .duration(500)
            // .iterations(1)
            // .fromTo('opacity', '1', '0');
            // fade.play()
          } // brighten animation

        }, {
          key: "brighten",
          value: function brighten() {
            this.isFaded = 'faded'; // console.log('faded')
            // this.opacity = 'bright'
            // const brighten = this.animationCtrl.create()
            // .addElement(this.currentCardView.nativeElement)
            // .duration(900)
            // .iterations(1)
            // .fromTo('opacity', '0', '1');
            // brighten.play()
          } // pauses game

        }, {
          key: "onPause",
          value: function onPause() {
            this.cardService.onPause();
            this.gameService.pauseTimer();
          } //resumes game

        }, {
          key: "onResume",
          value: function onResume() {
            this.cardService.onResume(this.formIsHidden);
            this.gameService.startTimer();
          } // when someone selects a suite then it opens up the options for the suite

        }, {
          key: "onSelectCard",
          value: function onSelectCard(suite) {
            this.selectedCard = suite;
            this.suiteIsSelected = true;
            this.cardsArray = this.cardService.getCards(suite);
          } // when submit is clicked, then the suite near the middle of the screen is reset for the end of the next game

        }, {
          key: "onResetSuite",
          value: function onResetSuite() {
            this.selectedCard = '';
            this.suiteIsSelected = false;
          } // legacy code
          // checkIfRow(index, number) {
          //   if (index > number) {
          //     return false
          //   } else {
          //     return true
          //   }
          // }
          // what happens when restart button is clicked

        }, {
          key: "onRestart",
          value: function onRestart() {
            var _this3 = this;

            setTimeout(function () {
              _this3.onStart();

              _this3.startButtonIsDisabled = false;
            }, 300);
          } // when the a card is clicked then it is added to the picked cards area

        }, {
          key: "onChipClicked",
          value: function onChipClicked(suite, name, imgURL) {
            if (this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
              this.answerCards.push(new _card_model__WEBPACK_IMPORTED_MODULE_3__.Card(imgURL, name, suite));
              this.cardCount++;
              this.cardCountIsHidden = true;
            }

            if (!this.cardService.ChipsSubmit(this.cardCount)) {
              this.answerCards.push(new _card_model__WEBPACK_IMPORTED_MODULE_3__.Card(imgURL, name, suite));
              this.cardCount++;
            }
          } // when the submit button is clicked then the data is stored in the data base and the score and excercise mode is checked and based on that the level is increased
          // it also starts a new round

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            this.cardRoute = '';
            var timer = this.gameService.clearTimer();
            console.log(timer);
            var formCorrect = this.cardService.submitAnswer(this.answerCards, this.cardCount);

            if (this.excerciseMode !== true) {
              this.gameService.storeLevelScore(this.gameno, this.cardService.score, this.cardService.level, this.excerciseMode, timer / 1000, formCorrect.wrongs, formCorrect.prevscore, formCorrect.prevlevel);
            } else {
              this.cardService.level++;
            }

            this.answerCards = [];
            this.cardCount = 0;
            this.cardsRemembered++;
            this.cardCountIsHidden = false;
            var scoreneeded;

            if (this.excerciseMode === true) {
              scoreneeded = null;

              if (this.cardService.level > this.levels[1]) {
                this.eventemitter.onRoundFinished({
                  "continue": true,
                  score: this.cardService.score
                });
              }
            } else {
              scoreneeded = this.gameService.scoringconstant - this.cardService.getLevelandScore()[1];
            }

            this.alertCtrl.create({
              header: 'Level: ' + this.getLevelandScore()[0],
              message: this.cardService.alertmessage + '\n' + 'You need ' + scoreneeded + ' points to go to the next level',
              buttons: [{
                text: 'Continue',
                role: 'Continue',
                handler: function handler() {
                  _this4.cardService.generateCards();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            }); // this.correct = true
          } // onPopup() {
          //   this.onPause()
          //   let scoreneeded = 200 - this.cardService.getLevelandScore()[1]
          //   this.alertCtrl.create({
          //     header: 'Level: ' + this.getLevelandScore()[0],
          //     message: 'You need ' + scoreneeded + ' points to go to the next level',
          //     buttons: [{
          //       text: 'Continue',
          //       role: 'Continue',
          //       handler: () => {
          //         this.onResume()
          //     }}]}).then(alert=> alert.present())
          // }
          // the game is ended when the person returns to the home screen

        }, {
          key: "onEndGame",
          value: function onEndGame() {
            var _this5 = this;

            this.cardService.endGame();
            setTimeout(function () {
              _this5.answerCards = [];
              _this5.cardCount = 0;
              _this5.formIsHidden = true;
              _this5.gameHasBegun = false;
              _this5.correct = false;
              _this5.wrong = false;
              _this5.suiteIsSelected = false;
              _this5.cardRoute = null;

              _this5.onResetSuite();
            }, 500);
          } // returns the color class based on the suite input for the chips

        }, {
          key: "getColor",
          value: function getColor(suite) {
            if (suite === 'club' || suite === 'spade') {
              return 'dark';
            }

            if (suite === 'diamond' || suite === 'heart') {
              return 'danger';
            }
          } // when a chip is clicked in the picked chips section then it is deleted from the array

        }, {
          key: "onDeleteItem",
          value: function onDeleteItem(index) {
            this.answerCards.splice(index, 1);
            this.cardCount--;

            if (this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
              this.submitIsTrue = false;
              this.cardCountIsHidden = false;
            }
          } // if the number of chips is right then the submit button is enabled or disabled

        }, {
          key: "submitButton",
          value: function submitButton() {
            if (!this.cardService.ChipsSubmit(this.cardCount) || this.cardService.ChipsSubmit(this.cardCount) === "cardCount") {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "getI",
          value: function getI() {
            return this.cardService.i;
          } // unsubscribes from subscriptions when the component is destroyed

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
            this.cardSubscription.unsubscribe(); // console.log("unsubscribed")
            // this.cardSubscription.unsubscribe()
            // this.eventemitter.form.unsubscribe()
            // this.eventemitter.animate.unsubscribe()
            // this.eventemitter.CurrentCardRoute.unsubscribe()
          } // unsubscribes from subscriptions when the component is left 

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.subscription.unsubscribe();
            console.log("unsubscribed");
            this.cardSubscription.unsubscribe();
          } // gets the level and score from the service 

        }, {
          key: "getLevelandScore",
          value: function getLevelandScore() {
            return this.cardService.getLevelandScore();
          }
        }]);

        return CardSpanPage;
      }();

      _CardSpanPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _card_span_service__WEBPACK_IMPORTED_MODULE_2__.CardSpanService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AnimationController
        }, {
          type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_4__.EventemitterService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _shared_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService
        }];
      };

      _CardSpanPage.propDecorators = {
        currentCardView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['currentNumber', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef,
            "static": true
          }]
        }],
        excerciseMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ['excerciseSet']
        }],
        levels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ['levels']
        }]
      };
      _CardSpanPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-card-span',
        template: _raw_loader_card_span_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('cardFade', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('bright', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
          opacity: 1
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('* => faded', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(900)]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('* => bright', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(500)]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('faded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
          opacity: 0
        }))])],
        styles: [_card_span_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CardSpanPage);
      /***/
    },

    /***/
    82820:
    /*!***********************************************************!*\
      !*** ./src/app/games-list/card-span/card-span.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardSpanService": function CardSpanService() {
          return (
            /* binding */
            _CardSpanService
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


      var _card_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./card.model */
      58397);
      /* harmony import */


      var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/eventemitter.service */
      64874);
      /* harmony import */


      var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/game.service */
      5162);

      var _CardSpanService = /*#__PURE__*/function () {
        function CardSpanService(eventemitter, gameService) {
          _classCallCheck(this, CardSpanService);

          this.eventemitter = eventemitter;
          this.gameService = gameService;
          this.cardRoute = "../../assets/cards";
          this.cardsArrayAnswers = [];
          this.cardsArrayDisplayed = [];
          this.level = 1;
          this.score = 0;
          this.paused = false;
          this.cards = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        } // creates a random card and returns it


        _createClass(CardSpanService, [{
          key: "getRandomCard",
          value: function getRandomCard() {
            var randomSuite = Math.floor(Math.random() * 3);
            var randomNumber = Math.floor(Math.random() * 12);
            var cardSuite;
            var cardNumber;

            switch (randomSuite) {
              case 0:
                cardSuite = "club";
                break;

              case 1:
                cardSuite = "diamond";
                break;

              case 2:
                cardSuite = "heart";
                break;

              case 3:
                cardSuite = "spade";
                break;
            }

            switch (randomNumber) {
              case 0:
                cardNumber = "A";
                break;

              default:
                cardNumber = JSON.stringify(randomNumber + 1);
                break;

              case 10:
                cardNumber = "J";
                break;

              case 11:
                cardNumber = "Q";
                break;

              case 12:
                cardNumber = "K";
                break;
            }

            var cardFinalRoute = this.cardRoute + '/' + cardSuite + '/' + cardNumber + '.jpg';
            this.cardsArrayAnswers.push(new _card_model__WEBPACK_IMPORTED_MODULE_0__.Card('/' + cardSuite + '.png', cardNumber, cardSuite));
            this.cardsArrayDisplayed.push(cardFinalRoute);
          } // starts the timer and clears the previous array

        }, {
          key: "generateCards",
          value: function generateCards() {
            this.clearCards();

            for (var i = 0; i < this.level + 2; i++) {
              this.getRandomCard();

              if (this.cardsArrayDisplayed[i] === this.cardsArrayDisplayed[i - 1]) {
                this.cardsArrayAnswers.splice(i);
                this.cardsArrayDisplayed.splice(i);
                i--;
              }
            }

            this.i = 0;
            this.runSeries();
          } // starts the series which generates random cards on an interval and tells the component when to animate and when the length is done then it stops

        }, {
          key: "runSeries",
          value: function runSeries() {
            var _this6 = this;

            this.eventemitter.onForm('disappear');

            if (this.paused !== true) {
              if (this.i <= this.level + 1) {
                this.eventemitter.onCurrentCardRoute(this.cardsArrayDisplayed[this.i]); // this.eventemitter.onAnimate('brighten') 
                // this.eventemitter.onAnimate('fade')  

                setTimeout(function () {
                  if (_this6.i <= _this6.level) {
                    _this6.i++;

                    _this6.runSeries();
                  } else {
                    setTimeout(function () {
                      _this6.eventemitter.onAnimate('fade');

                      _this6.eventemitter.onForm('reappear');
                    }, 600);
                  }
                }, 2000);
              } // else {
              // }

            }
          } // formats the card data and gives it to the component

        }, {
          key: "getCards",
          value: function getCards(suite) {
            var cardsArray = [];

            var _iterator = _createForOfIteratorHelper(this.cards),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var card = _step.value;
                cardsArray.push(new _card_model__WEBPACK_IMPORTED_MODULE_0__.Card('/' + suite + '.png', card, suite));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return cardsArray;
          } // deals with level and score when submit is clicked

        }, {
          key: "submitAnswer",
          value: function submitAnswer(cardsArray, cardCount) {
            if (this.level + 2 === cardCount) {
              var wrongs = 0;
              var prevscore = this.score;
              var prevlevel = this.level;

              for (var i = 0; i < this.cardsArrayAnswers.length; i++) {
                if (this.cardsArrayAnswers[i].name !== cardsArray[i].name || this.cardsArrayAnswers[i].suite !== cardsArray[i].suite) {
                  console.log(this.cardsArrayAnswers[i], cardsArray[i]);
                  wrongs++;
                }
              }

              var currentscore = this.gameService.getScore(this.cardsArrayAnswers.length, wrongs);
              this.score = this.score + currentscore;

              if (this.score >= this.gameService.scoringconstant) {
                this.level++;
                this.score = 0;
              }

              if (wrongs === 0) {
                this.alertmessage = "Correct!";
              } else {
                var alertstring = '';

                var _iterator2 = _createForOfIteratorHelper(this.cardsArrayAnswers),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;
                    var suite = '';

                    switch (item.suite) {
                      case "club":
                        suite = "♣️";
                        break;

                      case "diamond":
                        suite = "♦️";
                        break;

                      case "spade":
                        suite = "♠️";
                        break;

                      case "heart":
                        suite = "♥️";
                        break;
                    }

                    alertstring = alertstring + " " + suite + item.name + ",";
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                this.alertmessage = "The correct answers were:" + alertstring + ".";
              }

              return {
                beginNewRound: true,
                wrongs: wrongs,
                prevscore: currentscore,
                prevlevel: prevlevel
              };
            }
          } // deals with submit button being disabled and length of the card count

        }, {
          key: "ChipsSubmit",
          value: function ChipsSubmit(cardCount) {
            if (cardCount === this.level + 2) {
              return true;
            }

            if (cardCount === this.level + 1) {
              return 'cardCount';
            }
          } // clears the cards array

        }, {
          key: "clearCards",
          value: function clearCards() {
            this.cardsArrayAnswers = [];
            this.cardsArrayDisplayed = [];
          }
        }, {
          key: "endGame",
          value: function endGame() {
            this.level = 1;
            this.clearCards();
            this.currentCard = '';
          } // pauses the game

        }, {
          key: "onPause",
          value: function onPause() {
            this.paused = true;
          } // resumes the game after a pause

        }, {
          key: "onResume",
          value: function onResume(formIsHidden) {
            this.paused = false;

            if (formIsHidden === true) {
              this.runSeries();
            }
          } // passes level and score to the component

        }, {
          key: "getLevelandScore",
          value: function getLevelandScore() {
            return [this.level, this.score];
          }
        }]);

        return CardSpanService;
      }();

      _CardSpanService.ctorParameters = function () {
        return [{
          type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_1__.EventemitterService
        }, {
          type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService
        }];
      };

      _CardSpanService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _CardSpanService);
      /***/
    },

    /***/
    58397:
    /*!****************************************************!*\
      !*** ./src/app/games-list/card-span/card.model.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Card": function Card() {
          return (
            /* binding */
            _Card
          );
        }
        /* harmony export */

      });

      var _Card = function _Card(imgURL, name, suite) {
        _classCallCheck(this, _Card);

        this.imgURL = imgURL;
        this.name = name;
        this.suite = suite;
      };
      /***/

    },

    /***/
    16365:
    /*!**********************************************************!*\
      !*** ./src/app/games-list/card-span/card-span.page.scss ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtc3Bhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBO0VBQ0ksNENBQUE7RUFDQSxnQkFBQTtBQXJCSiIsImZpbGUiOiJjYXJkLXNwYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNsdWIge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4vLyB9XG5cbi8vIC5kaWFtb25kIHtcbi8vICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbi8vICAgICBmb250LXNpemU6IGxhcmdlO1xuLy8gICAgIGNvbG9yOiByZWQ7XG4vLyB9XG5cbi8vIC5oZWFydCB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4vLyAgICAgZm9udC1zaXplOiBsYXJnZTtcbi8vICAgICBjb2xvcjogcmVkO1xuLy8gfVxuXG4vLyAuc3BhZGUge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4vLyB9XG5cbi5jYXJkIHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4vLyAuYnJpZ2h0IHtcbi8vICAgICBhbmltYXRpb24tbmFtZTogYnJpZ2h0ZW47XG4vLyAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcbi8vIH1cblxuLy8gLmZhZGUge1xuLy8gICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuLy8gICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgYnJpZ2h0ZW4ge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIH1cblxuLy8gICAgIHRvIHtcbi8vICAgICAgICAgb3BhY2l0eTogMTtcbi8vICAgICB9IFxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIGZhZGUge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIH1cblxuLy8gICAgIHRvIHtcbi8vICAgICAgICAgb3BhY2l0eTogMDtcbi8vICAgICB9XG4vLyB9XG4iXX0= */";
      /***/
    },

    /***/
    19404:
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/card-span/card-span.page.html ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-header>\n\n<app-description [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-description>\n\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"getLevelandScore()[0]\" [(score)]=\"getLevelandScore()[1]\"></app-score>\n\n<ion-content *ngIf=\"!gameHasBegun && !excerciseMode\"></ion-content>\n\n<!-- This game is mostly complete but the menu functions need to be tested and figured out. -->\n\n<!-- the game itself -->\n<ion-content *ngIf=\"gameHasBegun\">\n\n    <!-- <ion-item color=\"danger\" *ngIf=\"wrong\">\n      <ion-label class=\"ion-text-center\">Incorrect Answer!</ion-label>\n    </ion-item> -->\n    <!-- <ion-item color=\"dark\" *ngIf=\"correct\" >\n      <ion-label class=\"ion-text-center\" >Good Job! Correct Answer!</ion-label>\n    </ion-item> -->\n\n    <!-- This part is the selecting screen of the game after the cards are displayed -->\n    <ion-row *ngIf=\"!cardCountIsHidden\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label>Card: {{ formIsHidden ? getI() + 1 : cardCount + 1 }}</ion-label>\n      </ion-col>\n    </ion-row>\n  <ion-grid *ngIf=\"gameHasBegun && !formIsHidden\">\n      <ion-row>\n        <ion-col *ngFor=\"let suite of formSuites\" size-md=\"2\" offset-md=\"0.75\" offset-lg=\"1.5\" size-lg=\"1\">\n          <ion-card button=\"true\" [disabled]=\"selectedCard === suite\" (click)=\"onSelectCard(suite)\" >\n            <img [src]=\"'../../assets/cards/card-suites' + '/' + suite + '.png'\">            \n          </ion-card>\n        </ion-col>\n      </ion-row>\n    <div *ngIf=\"suiteIsSelected\">\n        <ion-row class=\"ion-text-center\">\n          <ion-col *ngFor=\"let card of cardsArray\"  size-md=\"2\" offset-md=\"0.75\">\n            <div class=\"ion-text-center\">\n              <ion-chip [color]=\"getColor(card.suite)\" outline style=\"background-color: white\" (click)=\"onChipClicked(card.suite, card.name, card.imgURL)\">\n                <!-- <ion-avatar>\n                  <img [src]=\"'../../assets/cards/card-suites/' + card.imgURL\"> >\n                </ion-avatar> -->\n                <div class=\"card\">\n                  <ion-label>{{ card.name }}</ion-label>\n                </div>                  \n              </ion-chip>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-text-center\">\n          <ion-row>\n            <ion-col>\n              <ion-label>Picked Cards (Click to delete):</ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n          <ion-row>\n            <ion-col (click)=\"onDeleteItem(i)\" *ngFor=\"let card of answerCards; let i = index\" size=\"3\" size-md=\"2\" offset-md=\"0.75\">\n              <ion-chip [color]=\"getColor(card.suite)\" outline style=\"background-color: white\">\n                <ion-avatar>\n                  <img [src]=\"'../../assets/cards/card-suites/' + card.imgURL\"> >\n                </ion-avatar>\n                <div class=\"card\">\n                  <ion-label>{{ card.name }}</ion-label>\n                </div> \n                <!-- <ion-icon name=\"close-sharp\" ></ion-icon>                 -->\n              </ion-chip>\n            </ion-col>\n          </ion-row>    \n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\">\n              <ion-button color=\"light\" (click)=\"onSubmit()\" [disabled]=\"submitButton()\">Submit</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n    </div>\n  </ion-grid>\n\n  <!-- This part makes up the cards that are animated through angular animations -->\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"auto\" [class]=\"opacity\" #currentNumber [@cardFade]=\"isFaded\" offset=\"1\" size=\"10\" size-md=\"6\" size-lg=\"4\" >\n        <div *ngIf=\"gameHasBegun && formIsHidden\">\n          <ion-card>\n            <img  width-md=\"480\" height-md=\"733.5\" [src]=\"cardRoute\">\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- <ion-footer *ngIf=\"gameHasBegun\">\n  <ion-toolbar>\n    <ion-title>\n      Level: {{ getLevelandScore()[0] }}; Score: {{ getLevelandScore()[1] }} \n    </ion-title>\n    <ion-buttons slot=\"end\"><ion-button (click)=\"onPopup()\"></ion-button></ion-buttons>\n    <ion-buttons>\n      <ion-button (click)=\"onPopup()\"> </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->\n\n<!-- Common element -->\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"gameHasBegun\" ></app-menu>\n  <app-start [(gameHasBegun)]=\"gameHasBegun\" [(gameno)]=\"gameno\"></app-start>\n</ion-footer>\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_games-list_card-span_card-span_module_ts-es5.js.map