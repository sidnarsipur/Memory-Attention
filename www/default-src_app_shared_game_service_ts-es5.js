(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_shared_game_service_ts"], {
    /***/
    48963:
    /*!**************************************!*\
      !*** ./src/app/shared/game.model.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Game": function Game() {
          return (
            /* binding */
            _Game
          );
        }
        /* harmony export */

      });

      var _Game = function _Game(name, catchphrase, description, thumbnailURL, startURL) {
        _classCallCheck(this, _Game);

        this.name = name;
        this.catchphrase = catchphrase;
        this.description = description;
        this.thumbnailURL = thumbnailURL;
        this.startURL = startURL;
      };
      /***/

    },

    /***/
    5162:
    /*!****************************************!*\
      !*** ./src/app/shared/game.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameService": function GameService() {
          return (
            /* binding */
            _GameService
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data.service */
      10954);
      /* harmony import */


      var _game_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./game.model */
      48963);

      var _GameService = /*#__PURE__*/function () {
        function GameService(dataService, platform) {
          _classCallCheck(this, GameService);

          this.dataService = dataService;
          this.platform = platform;
          this.timer = 0;
          this.pausetimer = 0;
          this.scoreconstant = 50;
          this.scoringconstant = 200; // defines the levels and types of the exercise sets

          this.excerciseSets = [{
            type: 1,
            level: [1, 2]
          }, {
            type: 2,
            level: [1, 2]
          }, {
            type: 1,
            level: [3, 4]
          }, {
            type: 2,
            level: [3, 4]
          }, {
            type: 1,
            level: [5, 6]
          }, {
            type: 2,
            level: [5, 6]
          }, {
            type: 1,
            level: [7, 8]
          }, {
            type: 2,
            level: [7, 8]
          }, {
            type: 1,
            level: [9, 10]
          }, {
            type: 2,
            level: [9, 10]
          }];
          this.excerciseSetsDescription = [{
            gameIndexes: [{
              number: 6,
              spclVar: 0
            }, 0, 1, 4, 3, {
              number: 5,
              spclVar: 0
            }, 8, 9, 10]
          }, {
            gameIndexes: [{
              number: 6,
              spclVar: 1
            }, 2, 1, 9, 7, {
              number: 5,
              spclVar: 1
            }, 8, 9, 10]
          }]; // array of game names, taglines and descriptions and asset URls

          this.gamesArray = [new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Digit Span', 'Test your memory!', // 'growing list of numbers and letters that are shown which the user has to repeat',
          "This game tests your short-term memory.\n\n            Goal: to recall lists of numbers as they appear on the screen.\n            \n            How to Play:\n             - Numbers will appear in a sequence on the screen, one at a time\n             - Memorize them\n             - Select the numbers in the order they appeared\n             - Select Submit\n             - Earn 200 points to advance to the next level\n             - The number of digits will increase with levels\n\n            Good Luck! \n            Are you Ready?", '../../assets/game-icons/digit-span-icon.png', '../../assets/start-images/digit-span.png'), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Trivia', 'Under Development, not in a condition to be tested.', // 'riddles from a database are shown and the user has to answer',
          "This game tests your long-term memory\n\n            Goal: respond to general knowledge questions\n            \n            How to Play:\n             - Read the question carefully\n             - Select your answer choice\n             - Select submit\n             - Click on \u2018Next Question\u2019 to proceed\n             - Earn 200 points to advance to next the next level\n            \n            Good Luck! \n            Are you Ready?", '../../assets/game-icons/riddles-icon.png', ''), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Card Span', "What's your favorite suite?", // 'Cards from a deck of 52 are shown and the user has to input which cards they saw afterward',
          "This game tests your short term memory and attention\n\n            Goal: respond quickly to the color given\n            \n            How to Play:\n             - Memorize the cards that appear on the screen\n             - Recall and select the suit and rank\n             - Select submit\n             - Earn 200 points to advance to next the next level\n            \n            Good Luck! \n            Are you Ready?", '../../assets/game-icons/card-span-icon.png', '../../assets/start-images/card-span.png'), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Traffic Light', "Catchphrase has to be added.", "This game tests your reflex\n\n            Goal: respond quickly to the color given\n            \n            How to Play:\n             - 3 circles appear on the screen\n             - Read the directions on top for color\n             - Select the circle only when the desired color appears\n             - Earn ____ points to advance to next the next level\n            \n            Good Luck! \n            Are you Ready?", '../../assets/game-icons/traffic-light-icon.png', '../../assets/start-images/traffic-light.png'), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Number Sort', "", "This game tests your attention \n\n            Goal: sort or categorize numbers and/or letters in the order given within the time limit.\n            \n            How to Play:\n             - Numbers or letters will be scattered on the screen\n             - Select the correct numbers or letters in the order\n             - Earn 50 points for correct selection\n             - Earn 200 points to advance to the next level\n             - Incorrect selection will result in losing 4 points\n\n            Good Luck! \n            Are you Ready?", '../../assets/game-icons/sort-them-icon.png', '../../assets/start-images/sort-them.png'), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Word Pairs', "Catchphrase has to be added.", "This game tests your short-term memory.\n\n            Goal: to remember and rematch word pairs in record time. \n            \n            How to Play:\n             - Memorize the pairs of words that flash on the screen\n             - Match the pair by selecting\n             - Click or touch \u2018submit\u2019 button\n             - Earn 200 points to advance to the next level\n\n            Good Luck! \n            Are you Ready?", '../../assets/game-icons/word-pairs-icon.png', ''), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game('Word to Images', "Catchphrase has to be added.", "This game tests your short-term memory\n\n            Goal: match the correct words to their corresponding images\n            \n            How to Play:\n             - List of words or images appear on screen once\n             - Memorize them\n             - Click or touch \u2018submit\u2019 button\n             - Earn 200 points to advance to the next level\n\n            Good Luck!", '../../assets/game-icons/word-to-images-icon.png', ''), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game("Stroop Game", "", "Welcome to Stroop Test! This game tests your ability to improve your selective attention  and control of  cognitive interference.\n\n            The goal of the game is to click on all the words that fit the criteria given and improve your time for each round. \n            \n            Good Luck! \n            ", "../../assets/game-icons/stroop-icon.png", ''), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game("Word Finder", "Under Development", "This game tests your vocabulary and long term memory\n\n            Goal: find all the possible words using the letters in a given word\n            \n            How to Play:\n             - Make words with three or more letters\n             - Select the desired letters\n             - Select \u2018add word\u2019 \n             - Select \u2018submit\u2019 when ready\n             - Earn 200 points to advance to the next level\n             \n            Good Luck! \n            Are you Ready?", "../../assets/game-icons/word-finder-icon.png", ''), new _game_model__WEBPACK_IMPORTED_MODULE_1__.Game("Matrix Reasoning", "Under Development", "This game tests your reasoning\n\n            Goal: to complete the pattern correctly\n            \n            How to Play:\n             - Examine the pattern carefully\n             - Select the number that matches the answer choice\n             - Select submit\n             - Earn 200 points to advance to next the next level\n            \n            Good Luck! \n            Are you Ready?", "../../assets/game-icons/visual-puzzles-icon.png", '')]; // dataService.take1()
          // dataService.testRequest()

          dataService.getLocalID();

          if (platform.is("capacitor") === true) {}
        } // returns the array of games


        _createClass(GameService, [{
          key: "getGames",
          value: function getGames() {
            return this.gamesArray;
          }
        }, {
          key: "trivia",
          value: function trivia() {
            this.dataService.getTriviaData();
          }
        }, {
          key: "matrixreasoning",
          value: function matrixreasoning() {
            this.dataService.getMatrixReasoningData();
          } // starts the common timer function

        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this = this;

            this.timer = 0;

            if (this.timerfunc) {
              clearInterval(this.timerfunc);
              this.pausetimer = 0;
            }

            this.timer = this.timer + this.pausetimer;
            this.pausetimer = 0;
            this.timerfunc = setInterval(function () {
              _this.timer = _this.timer + 1000;
            }, 1000);
          } // pauses the timer function

        }, {
          key: "pauseTimer",
          value: function pauseTimer() {
            clearInterval(this.timerfunc);
            this.timerfunc = undefined;
            this.pausetimer = this.timer;
          } // clears the timer and returns the time

        }, {
          key: "clearTimer",
          value: function clearTimer() {
            clearInterval(this.timerfunc);
            this.timerfunc = undefined;
            this.pausetimer = 0;
            return this.timer;
          } // common score function

        }, {
          key: "getScore",
          value: function getScore(totalnumber, wrongs) {
            var gamescore = Math.round(this.scoreconstant - this.scoreconstant * wrongs / totalnumber);

            if (gamescore < 0) {
              gamescore = 0;
            }

            return gamescore;
          } // stores level and score and other data in the database

        }, {
          key: "storeLevelScore",
          value: function storeLevelScore(gameno, score, level, excerciseSetMode, time, wrongs, prevscore, prevlevel) {
            this.dataService.storeLevelScore(this.gamesArray[gameno].name, score, level, excerciseSetMode, time, wrongs, prevscore, prevlevel);
          } // gets level and score from the database

        }, {
          key: "getLevelScore",
          value: function getLevelScore(gameno, excerciseMode) {
            this.dataService.getLevelScore(this.gamesArray[gameno].name, excerciseMode);
          }
        }, {
          key: "getSessionData",
          value: function getSessionData() {
            this.dataService.getSessionData();
          } // gets information for games such as key word pairs etc using the path

        }, {
          key: "gameinfoget",
          value: function gameinfoget(path) {
            this.dataService.gameinfoget(path);
          } // just returns the scoring constant which is a variable at which the game proceeds to the next level if the score is greater than or equal to it

        }, {
          key: "getScoringConstant",
          value: function getScoringConstant() {
            return this.scoringconstant;
          }
        }]);

        return GameService;
      }();

      _GameService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
        }];
      };

      _GameService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _GameService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_shared_game_service_ts-es5.js.map