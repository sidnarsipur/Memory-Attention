(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_games-list_word-to-images_word-to-images_module_ts"], {
    /***/
    37201:
    /*!****************************************************************************!*\
      !*** ./src/app/games-list/word-to-images/word-to-images-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WordToImagesPageRoutingModule": function WordToImagesPageRoutingModule() {
          return (
            /* binding */
            _WordToImagesPageRoutingModule
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


      var _word_to_images_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./word-to-images.page */
      62337);

      var routes = [{
        path: '',
        component: _word_to_images_page__WEBPACK_IMPORTED_MODULE_0__.WordToImagesPage
      }];

      var _WordToImagesPageRoutingModule = function WordToImagesPageRoutingModule() {
        _classCallCheck(this, WordToImagesPageRoutingModule);
      };

      _WordToImagesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WordToImagesPageRoutingModule);
      /***/
    },

    /***/
    3926:
    /*!********************************************************************!*\
      !*** ./src/app/games-list/word-to-images/word-to-images.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WordToImagesPageModule": function WordToImagesPageModule() {
          return (
            /* binding */
            _WordToImagesPageModule
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


      var _word_to_images_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./word-to-images-routing.module */
      37201);
      /* harmony import */


      var _word_to_images_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./word-to-images.page */
      62337);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);

      var _WordToImagesPageModule = function WordToImagesPageModule() {
        _classCallCheck(this, WordToImagesPageModule);
      };

      _WordToImagesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _word_to_images_routing_module__WEBPACK_IMPORTED_MODULE_0__.WordToImagesPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_word_to_images_page__WEBPACK_IMPORTED_MODULE_1__.WordToImagesPage],
        exports: [_word_to_images_page__WEBPACK_IMPORTED_MODULE_1__.WordToImagesPage]
      })], _WordToImagesPageModule);
      /***/
    },

    /***/
    62337:
    /*!******************************************************************!*\
      !*** ./src/app/games-list/word-to-images/word-to-images.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WordToImagesPage": function WordToImagesPage() {
          return (
            /* binding */
            _WordToImagesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_word_to_images_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./word-to-images.page.html */
      12052);
      /* harmony import */


      var _word_to_images_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./word-to-images.page.scss */
      38351);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/eventemitter.service */
      64874);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/game.service */
      5162); // import { AppComponent } from '../app.component';
      // import { BrowserModule } from '@angular/platform-browser';
      // import { FormsModule } from '@angular/forms';
      // import { AngularDelegate } from '@ionic/angular';
      // import { Injectable, EventEmitter } from '@angular/core';
      // import { NumberFormatStyle } from '@angular/common';


      var _WordToImagesPage = /*#__PURE__*/function () {
        // paths = "gs://memoryattention-1.appspot.com/WordToImages/Animals/Ant.jpeg"
        function WordToImagesPage(eventemitter, router, gameService) {
          _classCallCheck(this, WordToImagesPage);

          this.eventemitter = eventemitter;
          this.router = router;
          this.gameService = gameService;
          this.excerciseMode = false;
          this.choosingArray = [];
          this.animals = [];
          this.fullanimal = ["bird", "bear", "snake", "frog", "deer", "dolphin", "tiger", "lion", "cat", "leopard", "dog", "turtle"];
          this.animalImage = ["https://ibb.co/3rhRHMq"];
          this.emptyArr = [];
          this.gameHasBegun = false;
          this.formsIsHidden = false;
          this.realGameStart = false;
          this.winScreen = false;
          this.loseScreen = false;
          this.memorize = "memorize these words";
          this.checked = false;
          this.chosenArray = [];
          this.isDisabled = false;
          this.areSelected = false;
          this.i = 0;
          this.copyArray = [];
          this.spliced12 = ["a", "b", "c"];
          this.level = 1;
          this.aniList = [];
          this.aniList1 = [];
          this.aniList2 = [];
          this.anime = "faded";
          this.imgToWord = true;
          this.randy = 0;
          this.image_first = true;
          this.image_last = true;
          this.toggle = true;
          this.status = 'Enable';
          this.answer1 = "";
          this.extraArray = [];
          this.indexAnim = 0;
          this.wordArray = [];
          this.arr = [];
          this.asdf = [];
          this.scoring = 0;
          this.timeconstant = 2000; // arrgs = [
          //   { name: "birds",val: 'birds',vals: '0.jpg', isChecked: false },
          //   { name: "bear",val: 'bear',vals: '1.jpg', isChecked: false },
          //   { name: "cow",val: 'cow',vals: '2.jpg', isChecked: false },
          //   { name: "frog",val: 'frog',vals: '3.jpg', isChecked: false },
          //   { name: "deer",val: 'deer',vals: '4.jpg', isChecked: false },
          //   { name: "dolphin",val: 'dolphin',vals: '5.jpg', isChecked: false },
          //   { name: "tiger",val: 'tiger',vals: '6.jpg', isChecked: false },
          //   { name: "lion",val: 'lion',vals: '7.jpg', isChecked: false }, 
          //   { name: "cat",val: 'cat',vals: '8.jpg', isChecked: false },
          //   { name: "leopard",val: 'leopard',vals: '9.jpg', isChecked: false },
          //   { name: "dog",val: 'dog',vals: '10.jpg', isChecked: false },
          //   { name: "turtle",val: 'turtle',vals: '11.jpg', isChecked: false }
          // ];

          this.photoaddress = "../assets/word-to-images/";
          this.gameno = 6;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
          this.database = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
          this.numberChecked = 0;
          this.gameIsPlayed = false;
          this.ctr = 0;
          this.scoringCap = this.gameService.getScoringConstant();
          this.datapath = "WordtoImages/words";
          this.tests1 = [];
          this.jpe = ".jpeg";
          this.categoryname = "Animals";
        }

        _createClass(WordToImagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.gameService.gameinfoget(this.datapath);
            this.gameService.getLevelScore(this.gameno, this.excerciseMode);
            this.database = this.eventemitter.databaseemitter.subscribe(function (value) {
              console.log(value);
              console.log("value level and score    " + value.level + "        " + value.score);

              if (!_this.excerciseMode) {
                if (value.level) {
                  _this.level = value.level;
                  _this.prevLevel = _this.level;
                  console.log("Level:", _this.level);
                }

                if (value.score) {
                  _this.scoring = value.score;
                  _this.prevScore = _this.scoring;
                  console.log("Score:", _this.scoring);
                }
              }

              if (_this.excerciseMode) {
                _this.level = _this.levels[_this.spclVar];
                console.log(_this.levels, _this.level);
              }

              if (value.value) {
                _this.categoriesandpaths = value.value;
                console.log(_this.categoriesandpaths); // switch(this.level) {
                //   case 1:
                //     if (value.value.Animals){
                //     console.log(value.value.Animals)
                //     this.tests1 = Object.values(value.value.Animals)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //     }
                //     break;
                //   case 2: 
                //     if(value.value.Clothing){
                //       console.log(value.value.Clothing)
                //       this.tests1 = Object.values(value.value.Clothing)
                //       console.log(this.tests1, " <--------- test if database got stuff")
                //     }
                //     break;
                //   case 3: 
                //     if(value.value.Colors){
                //       console.log(value.value.Colors)
                //       this.tests1 = Object.values(value.value.Colors)
                //       console.log(this.tests1, " <--------- test if database got stuff")
                //     }
                //   break;
                //   case 4: if(value.value.Emotions){
                //     console.log(value.value.Emotions)
                //     this.tests1 = Object.values(value.value.Emotions)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //   }
                //   break;
                //   case 5: if(value.value.Flowers){
                //     console.log(value.value.Flowers)
                //     this.tests1 = Object.values(value.value.Flowers)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //   }
                //   break;
                //   case 6: if(value.value.Fruits){
                //     console.log(value.value.Fruits)
                //     this.tests1 = Object.values(value.value.Fruits)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //   }
                //   break;
                //   case 7: if(value.value.Grocery){
                //     console.log(value.value.Grocery)
                //     this.tests1 = Object.values(value.value.Grocery)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //   }
                //   break;
                //   //Case 8 needs to have an underscore in the database so it will work
                //   case 8: if(value.value.Household_Items){
                //     console.log(value.value.Household_Items)
                //     this.tests1 = Object.values(value.value.Household_Items)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //   }
                //   break;
                //   case 9: if(value.value.Parts_of_Body){
                //     console.log(value.value.Parts_of_Body)
                //     this.tests1 = Object.values(value.value.Parts_of_Body)
                //     console.log(this.tests1, " <--------- test if database got stuff")
                //   }
                //   break;
                // }
              }
            });
            this.subscription = this.eventemitter.gameStateSubj.subscribe(function (value) {
              console.log(value);

              switch (value) {
                case 'start':
                  _this.buttonClick();

                  break;

                case 'restart':
                  break;

                case 'resume':
                  break;

                case 'quit':
                  _this.router.navigate(['/home']);

                  break;

                case 'pause':
                  break;
                //   case 'stop':
                //     this.onEndGame()
                //     break
              }
            });
          }
        }, {
          key: "enableDisableRule",
          value: function enableDisableRule(job) {
            this.toggle = !this.toggle; //this.status = this.toggle ? 'Enable ' : 'Disable ';

            this.status = this.toggle ? 'green ' : 'red ';
          }
        }, {
          key: "testClick",
          value: function testClick() {
            console.log("Testing the Click");
          }
        }, {
          key: "func",
          value: function func(a, b) {
            return 0.64 - Math.random();
          }
        }, {
          key: "random_Images",
          value: function random_Images() {
            var arr = [];

            while (arr.length < 8) {
              var r = Math.floor(Math.random() * 12);
              if (arr.indexOf(r) === -1) arr.push(r);
            }

            console.log(arr);
            return arr;
          }
        }, {
          key: "changeImgToWord",
          value: function changeImgToWord() {
            if (this.imgToWord == true) {
              this.imgToWord = false;
              console.log("shows words then choose the image");
            } else {
              this.imgToWord = true;
              console.log("shows images then choose the words");
            }
          }
        }, {
          key: "randomForImageToWord",
          value: function randomForImageToWord() {
            console.log("this is randy - " + this.randy);
            this.randy = Math.floor(Math.random() * (5 - 1) + 1);

            if (this.excerciseMode) {
              this.randy = (this.levels[this.spclVar] + 3) % 4 + 1;
            }

            console.log("this is randy - " + this.randy);

            switch (this.randy) {
              case 1:
                this.image_first = true;
                this.image_last = false;
                break;

              case 2:
                this.image_first = false;
                this.image_last = true;
                break;

              case 3:
                this.image_first = false;
                this.image_last = false;
                break;

              case 4:
                this.image_first = true;
                this.image_last = true;
                break;
            }

            console.log(this.imgToWord + "    the IMg to word is      this is randy - " + this.randy); //   if(this.randy == 1)
            //   {
            //     //this.imgToWord = true;
            //     this.image_first = true;
            //     this.image_last = false;
            //   }
            //   else if(this.randy == 2){
            //     //this.imgToWord = false;
            //     this.image_first = false;
            //     this.image_last = true;
            //   }
            //   else if(this.randy == 3){
            //     //this.imgToWord = false;
            //     this.image_first = true;
            //     this.image_last = true;
            //   }
            //   else {
            //     //this.imgToWord = false;
            //     this.image_first = false;
            //     this.image_last = false;
            //     console.log(this.imgToWord+ "    the IMg to word is      this is randy - " + this.randy);
            //   }
          }
        }, {
          key: "clearAnimals",
          value: function clearAnimals() {
            this.animals = [];
          }
        }, {
          key: "clearRandomDisplayWords",
          value: function clearRandomDisplayWords() {
            this.choosingArray = [];
            this.choosingArray.length = 0;
            this.choosingArray.splice(0, this.choosingArray.length);
          }
        }, {
          key: "clearaniList",
          value: function clearaniList() {
            this.aniList = [];
            this.aniList.length = 0;
            this.aniList.splice(0, this.aniList.length);
          }
        }, {
          key: "buttonClick",
          value: function buttonClick() {
            var _this2 = this;

            this.categoryname = "";
            var categories = [];

            for (var item in this.categoriesandpaths) {
              categories.push(item);
            }

            console.log(categories);
            this.categoryname = categories[Math.round(Math.random() * categories.length) - 1];
            this.tests1 = this.categoriesandpaths[this.categoryname];
            this.categoryname = this.categoryname.split(" ").join("_");
            console.log(this.tests1);
            this.numberChecked = 0;
            this.realGameStart = false;

            if (this.ctr > 0) {
              // console.log("THE WOOOORD")
              // if(this.level >= 1 && this.level < 2) 
              // {
              console.log("Not a whole number to stay the same");
              this.gameHasBegun = true;
              this.loseScreen = false;
              this.winScreen = false;
              this.formsIsHidden = true;
              this.realGameStart = true;

              if (this.randy === 1 || this.randy === 2 || this.randy === 3 || this.randy === 4) {
                this.formsIsHidden = false;

                if (this.randy === 1 || this.randy === 3) {
                  this.runSeries(0);
                } else {
                  this.runSeriesWord(0);
                }

                setTimeout(function () {
                  _this2.formsIsHidden = true;
                  console.log("forms is hidden = false");
                }, this.timeconstant * (this.level + 2));
              }
            } else {
              console.log("BUSSSSSSSSS");
              this.clearaniList();
              this.clearAnimals();
              this.clearRandomDisplayWords();
              this.animals = [];
              this.animals.length = 0;
              this.animals.splice(0, this.animals.length);
              this.arr = [];
              this.aniList = [];
              this.randImage = [];
              this.gameHasBegun = true;
              this.loseScreen = false;
              this.winScreen = false;
              this.randomForImageToWord(); // if(this.level === 1)
              // {

              if (this.level > 1) {
                this.animals = [];
                this.animals.length = 0;
                this.animals.splice(0, this.animals.length);
              }

              this.answerCreation();
              setTimeout(function () {
                console.log(_this2.aniList + "  <---- anilist array");
                console.log(_this2.animals + "  <---- animals array");
                _this2.formsIsHidden = true;
              }, this.timeconstant * (this.level + 2));
              this.realGameStart = true;
              console.log(this.arr + "<--- arr array");
            }
          }
        }, {
          key: "answerCreation",
          value: function answerCreation() {
            console.log("level is equal to 1");
            console.log(this.tests1.length + " length");
            console.log(this.tests1 + " tests1");
            var displayimglength = this.level * 2 + 4;

            if (displayimglength > this.tests1.length) {
              displayimglength = this.tests1.length;
            }

            console.log(displayimglength);
            var displayImg = this.createValues(displayimglength, this.tests1.length);
            this.asdf = this.createValues(this.level + 2, displayimglength); // let displayImg:any[] = this.createValues(this.level*2 + 4, this.tests1.length);
            // this.asdf = this.createValues(this.level + 2, this.tests1.length);

            var _iterator = _createForOfIteratorHelper(this.asdf),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                this.arr.push(this.tests1[displayImg[item]]); //console.log(this.arr.push(this.arrgs[displayImg[item]]))
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            for (var i = 0; i < displayImg.length; i++) {
              displayImg[i] = this.tests1[displayImg[i]]; //console.log(this.arrgs[displayImg[i]])
            }

            for (var index = 0; index < displayImg.length; index++) {
              var element = displayImg[index];
              this.choosingArray.push({
                name: element,
                isChecked: false
              });
            }

            this.randImage = this.arr; // this.choosingArray = displayImg

            console.log(displayImg, "  displayimg");
            console.log(this.arr + "<-- arr");
            console.log(this.choosingArray);
            console.log("value 1 be " + this.tests1[this.asdf[0]], "  " + this.asdf[0]);
            console.log("value 2 be " + this.tests1[this.asdf[1]], "  " + this.asdf[1]);
            console.log("value 3 be " + this.tests1[this.asdf[2]], "  " + this.asdf[2]);

            for (var _i = 0; _i < this.arr.length; _i++) {
              this.animals.push(this.arr[_i]); //console.log(this.arr[i].name)
            }

            for (var _i2 = 0; _i2 < this.arr.length; _i2++) {
              this.aniList.push(this.arr[_i2]); //console.log( this.aniList.push(this.arr[i].name))
            }

            console.log("Animals is " + this.animals);
            console.log(this.randImage);

            if (this.randy === 1 || this.randy === 3) {
              this.runSeries(0);
            } else {
              this.runSeriesWord(0);
            }
          }
        }, {
          key: "getClass",
          value: function getClass(i) {
            if (this.choosingArray[i].isChecked === true) {
              return false;
            }

            if (this.choosingArray[i].isChecked === false) {
              return true;
            }
          }
        }, {
          key: "onClick",
          value: function onClick(index) {
            if (this.choosingArray[index].isChecked === true) {
              this.choosingArray[index].isChecked = false;
              this.numberChecked--;
            } else if (this.numberChecked < this.level + 2 && this.choosingArray[index].isChecked === false) {
              this.numberChecked++;
              this.choosingArray[index].isChecked = !this.choosingArray[index].isChecked;
            }
          }
        }, {
          key: "createValues",
          value: function createValues(numberofvalues, totalposs) {
            var possibilities = [];
            var values = [];

            for (var i = 0; i < totalposs; i++) {
              possibilities.push(i);
            }

            for (var _i3 = 0; _i3 < numberofvalues; _i3++) {
              var value = Math.floor(Math.random() * possibilities.length);
              values.push(possibilities[value]);
              possibilities.splice(value, 1);
            }

            console.log(values);
            return values;
          }
        }, {
          key: "runSeries",
          value: function runSeries(i) {
            console.log(this.aniList); // this.seriesRun(i, this.aniList, 1900 - 400*(this.level - 1))

            this.seriesRun(i, this.aniList, this.timeconstant);
          }
        }, {
          key: "runSeriesWord",
          value: function runSeriesWord(i) {
            // this.seriesRun(i, this.animals, 1900 - 400*(this.level - 1))
            this.seriesRun(i, this.animals, this.timeconstant);
          }
        }, {
          key: "seriesRun",
          value: function seriesRun(i, array, time) {
            var _this3 = this;

            console.log(this.currentItem);

            if (i < array.length) {
              console.log(i);
              this.currentItem = array[i];
              console.log(this.currentItem);
              setTimeout(function () {
                _this3.anime = "brighten";
              }, 100);
              setTimeout(function () {
                _this3.anime = "faded";
              }, 1000);
              setTimeout(function () {
                i++;

                _this3.seriesRun(i, array, time);
              }, time);
            }
          }
        }, {
          key: "startGame",
          value: function startGame() {
            var _this4 = this;

            this.loseScreen = false;
            this.winScreen = false; //var s = this.arrgs.sort(this.func); 
            //var szz = this.imgzz.sort(this.func); 

            this.gameHasBegun = true;
            this.currentArray = this.animals;
            this.memorize;
            setTimeout(function () {
              _this4.currentArray = _this4.emptyArr; //this.choosingArray = s; 

              console.log(_this4.choosingArray + "  <---- choosing array"); //this.randImage = szz;

              _this4.formsIsHidden = true;
            }, 3000);
            this.realGameStart = true;
          }
        }, {
          key: "countInArray",
          value: function countInArray(array, what) {
            var count = 0;

            for (var i = 0; i < array.length; i++) {
              if (array[i] === what) {
                count++;
              }
            }

            return count;
          }
        }, {
          key: "onlyUnique",
          value: function onlyUnique(valuex, index, self) {
            return self.indexOf(valuex) === index;
          }
        }, {
          key: "sign",
          value: function sign() {
            this.chosenArray = [];
            this.chosenArray.length = 0;
            this.chosenArray.splice(0, this.chosenArray.length);
            console.log(this.asdf.length + "<-- asdf length ");
            var counter = 0;
            console.log(this.chosenArray.length + " <---length is    counter is---->" + counter);

            for (var i = 0; i < this.choosingArray.length; i++) {
              if (this.choosingArray[i].isChecked === true) {
                this.chosenArray.push(this.choosingArray[i]);
              }
            }

            console.log(this.chosenArray + " is chosen array"); // if(this.asdf.length != this.chosenArray.length)
            // {
            //   this.areSelected = false;
            //   console.log("the asdf length is not equal to chosen array length")
            //   console.log("You Lost")
            //   this.formsIsHidden = false;
            //   this.loseScreen = true;
            //   this.level = 1;
            //   this.animals = []
            //   this.aniList = []
            //   this.scoring = 0;
            //   return
            // }

            var wrongs = 0;
            wrongs = this.determineWrongs();
            console.log(wrongs);
            var currentscore = 0;

            if (!this.excerciseMode) {
              currentscore = this.gameService.getScore(this.level + 2, wrongs);
              this.scoring = this.scoring + currentscore;
              console.log("score --->" + this.scoring);

              if (this.scoring >= this.scoringCap) {
                this.scoring = 0;
                this.level++;
              }

              this.gameService.storeLevelScore(this.gameno, this.scoring, this.level, this.excerciseMode);
            }

            console.log(this.gameService.getScore(this.animals, wrongs) + " < -------- --- --- -- --");
            wrongs = 0; // for(let i = 0; i < this.chosenArray.length; i++)
            // {
            //   if(this.chosenArray.includes(this.arr[i].name))
            //   {
            //     counter++
            //     console.log(counter)
            //     // console.log(this.chosenArray.length + " <---length is    counter is---->" + counter)
            //     if(counter = this.chosenArray.length)
            //     {
            //       this.areSelected = true;
            //       this.scoring = this.scoring + 33.33333333333333333333333333333333333333333333;
            //     }
            //   }
            //   else if(this.chosenArray.includes(this.animals[i].name))
            //   {
            //     this.areSelected = true;
            //     this.scoring = this.scoring + 33.33333333333333333333333333333333333333333333;
            //     console.log("ANIMALS AND CHOSEN ARRAY WORK");
            //   }
            //   else{
            //     this.areSelected = false;
            //   }
            // }

            for (var _i4 = 0; _i4 < this.choosingArray.length; _i4++) {
              this.choosingArray[_i4].isChecked = false;
            } // if(this.areSelected)
            // {
            //   console.log("WIIIIIIIIIIIIIIIN")


            this.formsIsHidden = false;
            this.winScreen = true; //this.level = this.level + 1;
            //   console.log(this.level + "<----level ");
            // }
            // else{
            //   console.log("LOOOOOOOOSSSSEEEEEE")
            //   this.formsIsHidden = false;
            //   this.loseScreen = true;
            //this.level = 1;
            // }

            if (this.excerciseMode === true) {
              this.ctr++;
              console.log(this.ctr);

              if (this.ctr > 0) {
                var choices = [];

                if (this.image_last === true) {
                  var _iterator2 = _createForOfIteratorHelper(this.choosingArray),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var choice = _step2.value;
                      choices.push({
                        name: choice.name,
                        val: this.categoryname + '/' + choice.name + ".jpeg"
                      });
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                if (this.image_last === false) {
                  var _iterator3 = _createForOfIteratorHelper(this.choosingArray),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _choice = _step3.value;
                      choices.push({
                        name: _choice.name,
                        val: _choice.name
                      });
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }

                this.eventemitter.onMemorizedItems({
                  correct: this.animals,
                  choices: choices
                });
                this.eventemitter.onRoundFinished({
                  "continue": true
                });
              }
            } // if (this.excerciseMode === true && this.ctr > 2) {
            //   this.eventemitter.onMemorizedItems({correct: this.animals, choices: this.choosingArray})
            //   this.eventemitter.onRoundFinished(true)
            // }

          }
        }, {
          key: "determineWrongs",
          value: function determineWrongs() {
            var wrongs = 0;

            var _iterator4 = _createForOfIteratorHelper(this.animals),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var answer = _step4.value;
                wrongs++;

                var _iterator5 = _createForOfIteratorHelper(this.chosenArray),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var response = _step5.value;
                    console.log(answer, response);

                    if (answer === response.name) {
                      wrongs--;
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return wrongs;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
            this.database.unsubscribe();
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.subscription.unsubscribe();
            this.database.unsubscribe();
          }
        }]);

        return WordToImagesPage;
      }();

      _WordToImagesPage.ctorParameters = function () {
        return [{
          type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_2__.EventemitterService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService
        }];
      };

      _WordToImagesPage.propDecorators = {
        excerciseMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
          args: ['excerciseSet']
        }],
        spclVar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
          args: ['spclVar']
        }],
        levels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input,
          args: ['levels']
        }]
      };
      _WordToImagesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-word-to-images',
        template: _raw_loader_word_to_images_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('anime', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('bright', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => faded', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(500)]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => bright', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(500)]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('faded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        }))])],
        styles: [_word_to_images_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WordToImagesPage);
      /***/
    },

    /***/
    38351:
    /*!********************************************************************!*\
      !*** ./src/app/games-list/word-to-images/word-to-images.page.scss ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".maxopacity {\n  opacity: 0.25;\n}\n\n.displaycontainer {\n  position: relative;\n}\n\n.bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  background-color: #ffffff;\n}\n\n.button {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 10px;\n  letter-spacing: 0.25em;\n  color: #FFFDFD;\n}\n\n.fonts {\n  font-family: \"Lato-Light\";\n  font-weight: \"Bold\";\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmQtdG8taW1hZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBQUo7O0FBRUk7RUFDRSx5QkFBQTtFQUNGLG1CQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJ3b3JkLXRvLWltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4b3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgfVxuICBcbiAgLmRpc3BsYXljb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmJvdHRvbXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDpmaXQtY29udGVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcbiAgICBcbiAgICBjb2xvcjogI0ZGRkRGRDtcbiAgICB9XG4gICAgLmZvbnRze1xuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvLUxpZ2h0JztcbiAgICBmb250LXdlaWdodDogJ0JvbGQnO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    12052:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games-list/word-to-images/word-to-images.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Words to Images\n    </ion-title>  \n  </ion-toolbar>\n</ion-header> -->\n\n<app-header [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"realGameStart\" ></app-header>\n\n<app-score *ngIf=\"gameHasBegun\" [(level)]=\"level\" [(score)]=\"scoring\"></app-score>\n\n<ion-content>\n  <!-- <input type=\"image\" style=\"width: 125px; height: 125px;\" src = \"../assets/word-to-images/1_Animals/Lion.jpeg\"/> Restart -->\n  <app-description [(gameno)]=\"gameno\" [(gameHasBegun)]=\"realGameStart\" ></app-description>\n  <ion-grid>\n    <!-- <div>\n      <ion-row *ngIf=\"!realGameStart\">\n        <ion-col>\n          <ion-item button (click)=\"buttonClick()\">\n            <ion-label>\n              Start \n            </ion-label>\n          </ion-item>\n          <ion-item button (click)=\"changeImgToWord()\">\n            <ion-label>Change the image to words</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    -->\n    <div *ngIf=\"gameHasBegun && !formsIsHidden && image_first && !winScreen\">\n      <ion-row>\n        <ion-col [@anime]=\"anime\" class=\"ion-text-center\">\n          <!-- <ion-card >\n            <ion-text color = danger>\n             <ion-card-content>  -->\n              <img [src]=\"photoaddress + categoryname + '/' + currentItem + jpe\" height=\"180\">  \n              <!-- </ion-card-content> -->\n            <!-- </ion-text>  -->\n          <!-- </ion-card> -->\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <div #currentWord>\n      <ion-label class=\"ion-text-center\" *ngIf=\"gameHasBegun && !formsIsHidden && !image_first\">\n        <h1 class=\"text-large\">{{ currentWord }}</h1>\n      </ion-label>\n    </div> -->\n\n    <!-- other option would be currentWord for the animations alse try ani list instead of animals in the runSeriesWord -->\n    <div *ngIf=\"gameHasBegun && !formsIsHidden && !image_first && !winScreen\">\n      <ion-row > \n        <ion-col [@anime]=\"anime\" class=\"ion-text-center\"> \n          <ion-label class =\"fonts\" color=\"danger\"> <h1>{{currentItem.split(\"_\").join(\" \")}}</h1></ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n    \n    \n\n\n    <div *ngIf=\"formsIsHidden && image_last\">\n      <ion-row >\n        <ion-col size=\"4\" offset=\"0\" *ngFor=\"let entry of choosingArray; index as i\" (click)=\"onClick(i)\">\n          <div>\n            <img [src]=\"photoaddress + categoryname + '/' + entry.name + jpe\"  [class]=\"getClass(i) === true ? '' : 'maxopacity'\">\n            <div class=\"container bottomright\" *ngIf=\"getClass(i) === true ? false : true\"><ion-icon name=\"checkmark-circle\"></ion-icon></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row >\n        <ion-col *ngFor = \"let entry of choosingArray\" size = \"6\">\n          <ion-card>\n            <ion-list>\n              <ion-item>\n                <img [src]=\"'../../assets/photos' + '/' + entry.vals \" height = \"100\" width = \"120\">  \n                <ion-checkbox slot=\"end\" (ionChange)=\"onChange(entry.name)\" ></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button color=\"danger\" (click)=\"sign()\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"formsIsHidden && !image_last\">\n      <ion-row >\n        <ion-col size=\"4\" offset=\"0\" *ngFor=\"let item of choosingArray; index as i\">\n          <div>\n            <!-- <label class = \"fonts\" (click)=\"onClick(i)\" [class]=\"getClass(i) === true ? '' : 'maxopacity'\">{{entry.val}}</label> -->\n            <h3 class = \"fonts\" [class]=\"getClass(i) === true ? '' : 'maxopacity'\"  (click)=\"onClick(i)\">{{item.name.split(\"_\").join(\" \")}}</h3>\n            <div class=\"container bottomright\" *ngIf=\"getClass(i) === true ? false : true\">\n              <ion-icon name=\"checkmark-circle\"></ion-icon>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row >\n        <ion-col *ngFor = \"let entry of choosingArray \" size = \"6\">\n            <ion-list>\n                <ion-item>\n                  <ion-label>{{entry.val}}</ion-label>\n                <ion-checkbox (ionChange)=\"onChange(entry.val)\" ></ion-checkbox>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <ion-button color=\"danger\" (click)=\"sign()\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n    <div *ngIf=\"winScreen\"> \n      <ion-row> \n        <ion-col class=\"ion-text-center\"> \n          <ion-button (click)=\"buttonClick()\">Next Round</ion-button>  \n        </ion-col> \n      </ion-row>\n    </div> \n    <!-- <div *ngIf=\"loseScreen\"> \n      <ion-row> \n        <ion-col> \n          <ion-item button (click)=\"buttonClick()\">\n            <ion-label>\n              Start\n            </ion-label>\n          </ion-item>\n        </ion-col> \n      </ion-row>\n    </div> -->\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <app-menu [(gamenumber)]=\"gameno\" [(gameHasBegun)]=\"realGameStart\" ></app-menu>\n  <app-start [(gameno)]=\"gameno\" [(gameHasBegun)]=\"realGameStart\" ></app-start>\n</ion-footer>\n\n<!-- <div class=\"footer\" *ngIf=\"!gameHasBegun\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"11\" offset=\"0.5\" size-md=\"8\" offset-md=\"2\">\n        <ion-button  color=\"start\" size= expand=\"full\" (click)=\"onStart()\">START</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    \n</div> -->\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_games-list_word-to-images_word-to-images_module_ts-es5.js.map