(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_shared_data_service_ts"], {
    /***/
    10954:
    /*!****************************************!*\
      !*** ./src/app/shared/data.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _eventemitter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./eventemitter.service */
      64874);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476); // needs a database sync function and needs to store data from the new games and the images and data from the database


      var _DataService = /*#__PURE__*/function () {
        function DataService(http, eventemitter, sqlite, platform) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.eventemitter = eventemitter;
          this.sqlite = sqlite;
          this.platform = platform;
          this.link = "https://memoryattention-1.firebaseio.com/";
          this.imglink = "gs://memoryattention-1.appspot.com/";
        }

        _createClass(DataService, [{
          key: "take1",
          value: function take1() {
            this.http.get('https://firebasestorage.googleapis.com/v0/b/memoryattention-1.appspot.com/o/download-8.jpg?alt=media&token=5d723f86-5887-4049-bfaa-fcfd686725ed', {}).subscribe(function (value) {
              console.log(value);
            });
          } // this function stores level and score in the database as well as session data

        }, {
          key: "getTriviaData",
          value: function getTriviaData() {
            this.gameinfoget('Trivia');
          }
        }, {
          key: "getMatrixReasoningData",
          value: function getMatrixReasoningData() {
            this.gameinfoget('MatrixReasoning');
          }
        }, {
          key: "storeLevelScore",
          value: function storeLevelScore(gamename, score, level, excerciseSetMode, time, wrongs, prevscore, prevlevel) {
            this.getLocalID('storeLevelScore(', [gamename, score, level, excerciseSetMode]);
            var path = '';

            if (excerciseSetMode === true) {
              path = "excerciseset";
            } else {
              path = "gameslist";
            }

            this.put('score/' + gamename + '/' + path, score).subscribe(function (value) {
              console.log(value);
            }, function (error) {
              console.log(error);
            });
            this.put('level/' + gamename + '/' + path, level).subscribe(function (value) {
              console.log(value);
            }, function (error) {
              console.log(error);
            });

            if (this.platform.is('capacitor') === true) {
              var excerciseMode = excerciseSetMode ? 1 : 0;
              this.sqlite.create({
                name: this.localID + '.db',
                location: 'default'
              }).then(function (db) {
                db.executeSql('create table [' + gamename + ' score] (excerciseMode boolean, score float)', []).then(function () {
                  db.executeSql('insert into [' + gamename + ' score] (excerciseMode, score) values (' + excerciseMode + ',' + score + ')').then()["catch"](function (e) {
                    console.log(e);
                  });
                })["catch"](function (e) {
                  console.log(e);
                  db.executeSql('update [' + gamename + ' score] set score =' + score + ' where excerciseMode = ' + excerciseMode, []).then(function (value) {
                    console.log(value);
                  })["catch"](function () {
                    db.executeSql('insert into [' + gamename + ' score] (excerciseMode, score) values (' + excerciseMode + ',' + score + ')').then()["catch"](function (e) {
                      console.log(e);
                    });
                  });
                });
                db.executeSql('create table [' + gamename + ' level] (excerciseMode boolean, level int)', []).then(function () {
                  db.executeSql('insert into [' + gamename + ' level] (excerciseMode, level) values (' + excerciseMode + ',' + level + ')').then()["catch"](function (e) {
                    console.log(e);
                  });
                })["catch"](function (e) {
                  console.log(e);
                  db.executeSql('update [' + gamename + ' level] set level =' + level + ' where excerciseMode = ' + excerciseMode, []).then(function (value) {
                    console.log(value);
                  })["catch"](function () {
                    db.executeSql('insert into [' + gamename + ' level] (excerciseMode, level) values (' + excerciseMode + ',' + level + ')').then()["catch"](function (e) {
                      console.log(e);
                    });
                  });
                });
              });
            }

            if (time !== null && wrongs !== null && prevlevel !== null && prevscore !== null) {
              var date = new Date();
              var sessiondata = {
                time: time,
                date: date,
                score: prevscore,
                level: prevlevel,
                wrongs: wrongs
              };
              this.http.post(this.link + 'users/' + this.localID + '/sessiondata/' + gamename + this.idPath, sessiondata).subscribe();

              if (this.platform.is("capacitor") === true) {
                // sessiondata stored as (gameName VARCHAR(64), date date, level int, score float, time float, wrongs int)
                this.sqlite.create({
                  name: this.localID + '.db',
                  location: 'default'
                }).then(function (db) {
                  db.executeSql('create table sessiondata (gameName VARCHAR(64), date VARCHAR(64), level int, score float, time float, wrongs int)', []).then(function () {
                    db.executeSql('insert into sessiondata (gameName, date, level, score, time, wrongs) values ( "' + gamename + '", "' + date + '", ' + prevlevel + ', ' + prevscore + ', ' + time + ', ' + wrongs + ')', []).then()["catch"](function (e) {
                      console.log(e);
                    });
                  })["catch"](function (e) {
                    console.log(e);
                    db.executeSql('insert into sessiondata (gameName, date, level, score, time, wrongs) values ( "' + gamename + '", "' + date + '", ' + prevlevel + ', ' + prevscore + ', ' + time + ', ' + wrongs + ')', []).then()["catch"](function (e) {
                      console.log(e);
                    });
                  });
                });
              }
            }
          } // this function gets the level and score from the database

        }, {
          key: "getLevelScore",
          value: function getLevelScore(gamename, excerciseSetMode) {
            var _this = this;

            this.getLocalID('getLevelScore(', [gamename, excerciseSetMode]);
            var path = '';

            if (excerciseSetMode === true) {
              path = "excerciseset";
            } else {
              path = "gameslist";
            }

            this.get('score/' + gamename + '/' + path).subscribe(function (value) {
              console.log(value);

              if (value) {
                _this.eventemitter.onDatabase({
                  score: value
                });
              }
            }, function (error) {
              console.log(error);

              if (_this.platform.is("capacitor") === true) {
                var excerciseMode = excerciseSetMode ? 1 : 0;

                _this.sqlite.create({
                  name: _this.localID + '.db',
                  location: 'default'
                }).then(function (db) {
                  db.executeSql('select * from [' + gamename + ' score] where excerciseMode = ' + excerciseMode, []).then(function (resData) {
                    _this.eventemitter.onDatabase({
                      score: resData.rows.item(0).score
                    });
                  });
                })["catch"](function () {
                  _this.eventemitter.onDatabase({
                    score: null
                  });
                });
              }
            });
            this.get('level/' + gamename + '/' + path).subscribe(function (value) {
              console.log(value);

              if (value) {
                _this.eventemitter.onDatabase({
                  level: value
                });
              }
            }, function (error) {
              console.log(error);

              if (_this.platform.is("capacitor") === true) {
                var excerciseMode = excerciseSetMode ? 1 : 0;

                _this.sqlite.create({
                  name: _this.localID + '.db',
                  location: 'default'
                }).then(function (db) {
                  db.executeSql('select * from [' + gamename + ' level] where excerciseMode = ' + excerciseMode, []).then(function (resData) {
                    console.log(resData.rows.item(0));

                    _this.eventemitter.onDatabase({
                      level: resData.rows.item(0).level
                    });
                  });
                })["catch"](function () {
                  _this.eventemitter.onDatabase({
                    level: null
                  });
                });
              }
            });
          } // this function gets sessiondata

        }, {
          key: "getSessionData",
          value: function getSessionData() {
            var _this2 = this;

            this.getLocalID('getSessionData('); // if (this.platform.is("capacitor") === true) {
            //   console.log('sessiondata')
            //   let emittedObject = []
            //   this.sqlite.create(
            //     {
            //       name: this.localID + '.db',
            //       location: 'default'
            //     }).then((db: SQLiteObject) => {
            //       db.executeSql('select * from [sessiondata]')
            //       .then(value => {
            //         console.log(value.rows.item(0))
            //         if (value.rows.item(0)) {
            //           for (let i = 0; i < value.rows.length; i++) {
            //             value.rows.item(i).date = new Date(value.rows.item(i).date)
            //             emittedObject.push(value.rows.item(i))
            //           }
            //           // this.eventemitter.onDatabase(emittedObject)
            //           console.log(emittedObject)
            //         } else {
            //           console.log(emittedObject)
            //           // this.eventemitter.onDatabase(emittedObject)
            //         }
            //       })
            //       .catch(e => {
            //         console.log("an error has occurred", e)
            //         console.log(e.rows.item(0))
            //         if (e.rows.item(0)) {
            //           for (let i = 0; i < e.rows.length; i++) {
            //             e.rows.item(i).date = new Date(e.rows.item(i).date)
            //             emittedObject.push(e.rows.item(i))
            //           }
            //           // this.eventemitter.onDatabase(emittedObject)
            //           console.log(emittedObject)
            //           console.log("emittedObject")
            //         } else {
            //           console.log(emittedObject)
            //           console.log("emittedObject")
            //           // this.eventemitter.onDatabase(emittedObject)
            //         }
            //       })
            //     })
            // }

            this.http.get(this.link + 'users/' + this.localID + '/sessiondata' + this.idPath).subscribe(function (value) {
              var emittedObject = [];

              for (var game in value) {
                for (var sessionID in value[game]) {
                  var object = {
                    game: game,
                    date: value[game][sessionID].date,
                    level: value[game][sessionID].level,
                    score: value[game][sessionID].score,
                    time: value[game][sessionID].time,
                    wrongs: value[game][sessionID].wrongs
                  };
                  emittedObject.push(object);
                }
              }

              _this2.eventemitter.onDatabase(emittedObject);
            }, function (error) {
              if (_this2.platform.is("capacitor") === true) {
                console.log('sessiondata23');
                var emittedObject = [];

                _this2.sqlite.create({
                  name: _this2.localID + '.db',
                  location: 'default'
                }).then(function (db) {
                  db.executeSql('select * from [sessiondata]').then(function (value) {
                    console.log(value.rows.item(0));

                    if (value.rows.item(0)) {
                      for (var i = 0; i < value.rows.length; i++) {
                        var theobject = value.rows.item(i);
                        value.rows.item(i).date = new Date(value.rows.item(i).date);
                        var object = {
                          game: theobject.gameName,
                          date: theobject.date,
                          level: theobject.level,
                          score: theobject.score,
                          time: theobject.time,
                          wrongs: theobject.wrongs
                        };
                        emittedObject.push(object);
                      }

                      _this2.eventemitter.onDatabase(emittedObject);
                    } else {
                      _this2.eventemitter.onDatabase(emittedObject);
                    }
                  })["catch"](function (e) {
                    console.log("an error has occurred", e);
                    console.log(e.rows.item(0));

                    if (e.rows.item(0)) {
                      for (var i = 0; i < e.rows.length; i++) {
                        var theobject = e.rows.item(i);
                        e.rows.item(i).date = new Date(e.rows.item(i).date);
                        var object = {
                          game: theobject.gameName,
                          date: theobject.date,
                          level: theobject.level,
                          score: theobject.score,
                          time: theobject.time,
                          wrongs: theobject.wrongs
                        };
                        emittedObject.push(object);
                      }

                      _this2.eventemitter.onDatabase(emittedObject);
                    } else {
                      _this2.eventemitter.onDatabase(emittedObject);
                    }
                  });
                });
              }
            });
          } //this function clears localstorage after the user logs out

        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
          } // after the user is authenticated or after a new refreshtoken is issued, this function runs and the localID gets stored in localStorage

        }, {
          key: "storeLocalID",
          value: function storeLocalID(localID, idToken, email, refreshtoken, expiresIn) {
            var autoLogin = {
              email: email,
              idToken: idToken,
              refreshToken: refreshtoken,
              localID: localID,
              expiresIn: expiresIn
            };
            localStorage.setItem('loggedIn', JSON.stringify(autoLogin));
          } // this function gets the localID from localstorage and should be run before every function accessing the database
          // this is because if the user's timer runs out and is no longer authenticated, this function runs the refreshToken function

        }, {
          key: "getLocalID",
          value: function getLocalID(funcname, funcparams) {
            var autoLogin = JSON.parse(localStorage.getItem('loggedIn'));
            var expiresIn = autoLogin.expiresIn;
            this.localID = JSON.parse(localStorage.getItem('loggedIn')).localID;
            this.idToken = JSON.parse(localStorage.getItem('loggedIn')).idToken;
            this.idPath = '.json?auth=' + this.idToken;
            console.log(this.localID);

            if (new Date().valueOf() > expiresIn) {
              this.refreshToken(funcname, funcparams);
            }
          } // this function gets refreshtokens from the database and reaunthenticate the user

        }, {
          key: "refreshToken",
          value: function refreshToken(funcname, funcparams) {
            var _this3 = this;

            var autoLogin = JSON.parse(localStorage.getItem('loggedIn'));
            this.http.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAXQtQdjbu_Sq341mRWn_s_jaqV9LxtftM", {
              grant_type: "refresh_token",
              refresh_token: autoLogin.refreshToken
            }).subscribe(function (resData) {
              autoLogin.idToken = resData.id_token;
              autoLogin.refreshToken = resData.refresh_token;
              autoLogin.expiresIn = new Date().valueOf() + +resData.expires_in * 1000;
              localStorage.setItem('loggedIn', JSON.stringify(autoLogin));
              console.log('refreshtoken');

              if (funcname) {
                if (funcparams) {
                  var params = "";

                  var _iterator = _createForOfIteratorHelper(funcparams),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var object = _step.value;
                      params = params + JSON.stringify(object);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _this3[funcname + funcparams + ")"];
                } else {
                  _this3[funcname + ')'];
                }
              }
            });
          } // this function puts user data like score, level or sessions into the database

        }, {
          key: "put",
          value: function put(path, storedvar) {
            return this.http.put(this.link + 'users/' + this.localID + '/' + path + this.idPath, storedvar);
          } // this function gets user data like score or level or can get previously played sessions

        }, {
          key: "get",
          value: function get(path) {
            return this.http.get(this.link + 'users/' + this.localID + '/' + path + this.idPath);
          } //This command can be used to get something from gameinfo
          // To call it just put this.gameinfoget('Word Pairs/pair1'), this would pull from "https://memoryattention-1.firebaseio.com/gameinfo/WordPairs/pair1.json"

        }, {
          key: "gameinfoget",
          value: function gameinfoget(path) {
            var _this4 = this;

            this.http.get(this.link + 'gameinfo/' + path + this.idPath).subscribe(function (value) {
              _this4.eventemitter.onDatabase({
                path: path,
                value: value
              });
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            var _this5 = this;

            this.getLocalID('onLogin(');
            this.http.get(this.link + 'users/' + this.localID + this.idPath).subscribe(function (value) {
              console.log(value);

              if (_this5.platform.is("capacitor") === true && value) {
                // SQLite sync with the database occurs in this code
                // The db.executeSql statements run sql code and add to the sql database and the database is stored under localID
                // The firebase structure is users/{localID}/(score, level, sessiondata) (3 separate folders)
                _this5.sqlite.create({
                  name: _this5.localID + '.db',
                  location: 'default'
                }).then(function (db) {
                  if (value.level) {
                    var _loop = function _loop(game) {
                      db.executeSql('create table [' + game + ' level]' + ' (excerciseMode boolean, level int)', []).then(function (resData) {
                        console.log(value.level[game] + "LEVEL STUFF HERE");
                        console.log(value.level + 'level');
                        console.log(resData);

                        if (value.level[game].excerciseset) {
                          db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (1, ' + value.level[game].excerciseset + ')').then(function (resData) {
                            console.log(resData);
                          });
                        }

                        if (value.level[game].gameslist) {
                          db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (0, ' + value.level[game].gameslist + ')').then(function (resData) {
                            console.log(resData);
                          });
                        }
                      })["catch"](function (e) {
                        console.log(e);

                        if (value.level[game].excerciseset) {
                          db.executeSql('update [' + game + ' level] set level = ' + value.level[game].excerciseset + ' where excerciseMode = 1', []).then(function (resData) {
                            console.log(resData);
                          })["catch"](function () {
                            db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (1, ' + value.level[game].excerciseset + ')').then()["catch"](function (e) {
                              console.log(e);
                            });
                          });
                        }

                        if (value.score[game].gameslist) {
                          db.executeSql('update [' + game + ' level] set level = ' + value.level[game].gameslist + ' where excerciseMode = 1', []).then(function (resData) {
                            console.log(resData);
                          })["catch"](function () {
                            db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (1, ' + value.level[game].gameslist + ')').then()["catch"](function (e) {
                              console.log(e);
                            });
                          });
                        }
                      });
                    };

                    for (var game in value.level) {
                      _loop(game);
                    }
                  }

                  if (value.score) {
                    var _loop2 = function _loop2(_game) {
                      console.log(value.score[_game]);
                      db.executeSql('create table [' + _game + ' score]' + ' (excerciseMode boolean, score float)', []).then(function () {
                        if (value.level[_game].excerciseset) {
                          db.executeSql('insert into [' + _game + ' score]' + ' (excerciseMode, score) values (1, ' + value.score[_game].excerciseset + ')').then(function (resData) {
                            console.log(resData);
                          });
                        }

                        if (value.level[_game].gameslist) {
                          db.executeSql('insert into [' + _game + ' score]' + ' (excerciseMode, score) values (0, ' + value.score[_game].gameslist + ')').then(function (resData) {
                            console.log(resData);
                          });
                        }
                      })["catch"](function (e) {
                        console.log(e);

                        if (value.score[_game].excerciseset) {
                          db.executeSql('update [' + _game + ' score] set score = ' + value.score[_game].excerciseset + ' where excerciseMode = 1', []).then(function (resData) {
                            console.log(resData);
                          })["catch"](function (error) {
                            db.executeSql('insert into [' + _game + ' score]' + ' (excerciseMode, score) values (1, ' + value.score[_game].excerciseset + ')').then()["catch"](function (e) {
                              console.log(e);
                            });
                          });
                        }

                        if (value.score[_game].gameslist) {
                          db.executeSql('update [' + _game + ' score] set score = ' + value.score[_game].gameslist + ' where excerciseMode = 1', []).then(function (resData) {
                            console.log(resData);
                          })["catch"](function (error) {
                            db.executeSql('insert into [' + _game + ' score]' + ' (excerciseMode, score) values (1, ' + value.score[_game].gameslist + ')').then()["catch"](function (e) {
                              console.log(e);
                            });
                          });
                        }
                      });
                    };

                    for (var _game in value.score) {
                      _loop2(_game);
                    }
                  } // sessiondata stored as (gameName VARCHAR(64), date date, level int, score float, time float, wrongs int)


                  if (value.sessiondata) {
                    db.executeSql('create table [sessiondata] (id integer primary key, gameName VARCHAR(64), date VARCHAR(64), level int, score float, time float, wrongs int)', []).then(function () {
                      console.log(value.sessiondata);

                      for (var _game2 in value.sessiondata) {
                        console.log(_game2);

                        for (var sessionID in value.sessiondata[_game2]) {
                          var gameinfo = value.sessiondata[_game2][sessionID];
                          db.executeSql('insert into sessiondata (gameName, date, level, score, time, wrongs) values ("' + _game2 + '", "' + gameinfo.date + '", ' + gameinfo.level + ', ' + gameinfo.score + ', ' + gameinfo.time + ', ' + gameinfo.wrongs + ')', []).then(function (resData) {
                            console.log(resData);
                          })["catch"](function (e) {
                            console.log(e);
                          });
                        }
                      }
                    })["catch"](function (e) {
                      console.log(e);

                      for (var _game3 in value.sessiondata) {
                        console.log(_game3);

                        for (var sessionID in value.sessiondata[_game3]) {
                          var gameinfo = value.sessiondata[_game3][sessionID]; // db.executeSql('update sessiondata set date = "' + gameinfo.date + '", gameName = "' + game + '", level = ' + gameinfo.level + ', score = ' + gameinfo.score + ', time = ' + gameinfo.time + ', wrongs = ' + gameinfo.wrongs + ' where date = "' + gameinfo.date + '" and time = ' + gameinfo.time + ' and gameName = "' + game + '"', []).then().catch(e => {
                          //   console.log(e)

                          db.executeSql('insert or replace into [sessiondata] values ( "' + _game3 + '", "' + gameinfo.date + '", ' + gameinfo.level + ', ' + gameinfo.score + ', ' + gameinfo.time + ', ' + gameinfo.wrongs + ')', []).then(function (resData) {
                            console.log(resData);
                          })["catch"](function (e) {
                            console.log(e);
                          }); // })
                        }
                      }
                    });
                  }
                }).then(function () {
                  _this5.eventemitter.onLoading(true);
                });
              } else {
                _this5.eventemitter.onLoading(true);
              }
            }, function (error) {
              console.log(error);

              _this5.eventemitter.onLoading(false);
            });
          }
        }]);

        return DataService;
      }();

      _DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _eventemitter_service__WEBPACK_IMPORTED_MODULE_0__.EventemitterService
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _DataService);
      /***/
    },

    /***/
    64874:
    /*!************************************************!*\
      !*** ./src/app/shared/eventemitter.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventemitterService": function EventemitterService() {
          return (
            /* binding */
            _EventemitterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _EventemitterService = /*#__PURE__*/function () {
        function EventemitterService() {
          _classCallCheck(this, EventemitterService);

          this.animate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // CurrentCardRoute = new EventEmitter<string>();

          this.form = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // gameState = new EventEmitter<string>();

          this.CurrentCardRoute = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.gameStateSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.RoundFinished = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.memorizedItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.databaseemitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        } // has the different subjects and event emitters that are used in the app


        _createClass(EventemitterService, [{
          key: "onAnimate",
          value: function onAnimate(string) {
            this.animate.emit(string);
          }
        }, {
          key: "onCurrentCardRoute",
          value: function onCurrentCardRoute(string) {
            this.CurrentCardRoute.next(string);
          }
        }, {
          key: "onForm",
          value: function onForm(string) {
            this.form.emit(string);
          }
        }, {
          key: "onGameState",
          value: function onGameState(string) {
            // this.gameState.emit(string)
            this.gameStateSubj.next(string);
          }
        }, {
          key: "onRoundFinished",
          value: function onRoundFinished(any) {
            this.RoundFinished.next(any);
          }
        }, {
          key: "onMemorizedItems",
          value: function onMemorizedItems(array) {
            this.memorizedItems.next(array);
          }
        }, {
          key: "onDatabase",
          value: function onDatabase(object) {
            this.databaseemitter.next(object);
          }
        }, {
          key: "onLoading",
          value: function onLoading(_boolean) {
            this.loading.next(_boolean);
          }
        }]);

        return EventemitterService;
      }();

      _EventemitterService.ctorParameters = function () {
        return [];
      };

      _EventemitterService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _EventemitterService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_shared_data_service_ts-es5.js.map