(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["default-src_app_shared_data_service_ts"],{

/***/ 10954:
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _eventemitter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventemitter.service */ 64874);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
// needs a database sync function and needs to store data from the new games and the images and data from the database






let DataService = class DataService {
    constructor(http, eventemitter, sqlite, platform) {
        this.http = http;
        this.eventemitter = eventemitter;
        this.sqlite = sqlite;
        this.platform = platform;
        this.link = "https://memoryattention-1.firebaseio.com/";
        this.imglink = "gs://memoryattention-1.appspot.com/";
    }
    take1() {
        this.http.get('https://firebasestorage.googleapis.com/v0/b/memoryattention-1.appspot.com/o/download-8.jpg?alt=media&token=5d723f86-5887-4049-bfaa-fcfd686725ed', {}).subscribe(value => { console.log(value); });
    }
    // this function stores level and score in the database as well as session data
    getTriviaData() {
        this.gameinfoget('Trivia');
    }
    getMatrixReasoningData() {
        this.gameinfoget('MatrixReasoning');
    }
    storeLevelScore(gamename, score, level, excerciseSetMode, time, wrongs, prevscore, prevlevel) {
        this.getLocalID('storeLevelScore(', [gamename, score, level, excerciseSetMode]);
        let path = '';
        if (excerciseSetMode === true) {
            path = "excerciseset";
        }
        else {
            path = "gameslist";
        }
        this.put('score/' + gamename + '/' + path, score).subscribe(value => {
            console.log(value);
        }, error => {
            console.log(error);
        });
        this.put('level/' + gamename + '/' + path, level).subscribe(value => {
            console.log(value);
        }, error => {
            console.log(error);
        });
        if (this.platform.is('capacitor') === true) {
            let excerciseMode = excerciseSetMode ? 1 : 0;
            this.sqlite.create({
                name: this.localID + '.db',
                location: 'default'
            }).then((db) => {
                db.executeSql('create table [' + gamename + ' score] (excerciseMode boolean, score float)', [])
                    .then(() => {
                    db.executeSql('insert into [' + gamename + ' score] (excerciseMode, score) values (' + excerciseMode + ',' + score + ')').then().catch(e => { console.log(e); });
                })
                    .catch(e => {
                    console.log(e);
                    db.executeSql('update [' + gamename + ' score] set score =' + score + ' where excerciseMode = ' + excerciseMode, []).then(value => {
                        console.log(value);
                    }).catch(() => {
                        db.executeSql('insert into [' + gamename + ' score] (excerciseMode, score) values (' + excerciseMode + ',' + score + ')').then().catch(e => { console.log(e); });
                    });
                });
                db.executeSql('create table [' + gamename + ' level] (excerciseMode boolean, level int)', [])
                    .then(() => {
                    db.executeSql('insert into [' + gamename + ' level] (excerciseMode, level) values (' + excerciseMode + ',' + level + ')').then().catch(e => { console.log(e); });
                })
                    .catch(e => {
                    console.log(e);
                    db.executeSql('update [' + gamename + ' level] set level =' + level + ' where excerciseMode = ' + excerciseMode, []).then(value => {
                        console.log(value);
                    }).catch(() => {
                        db.executeSql('insert into [' + gamename + ' level] (excerciseMode, level) values (' + excerciseMode + ',' + level + ')').then().catch(e => { console.log(e); });
                    });
                });
            });
        }
        if ((time !== null && wrongs !== null) && (prevlevel !== null && prevscore !== null)) {
            let date = new Date();
            let sessiondata = {
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
                }).then((db) => {
                    db.executeSql('create table sessiondata (gameName VARCHAR(64), date VARCHAR(64), level int, score float, time float, wrongs int)', []).then(() => {
                        db.executeSql('insert into sessiondata (gameName, date, level, score, time, wrongs) values ( "' + gamename + '", "' + date + '", ' + prevlevel + ', ' + prevscore + ', ' + time + ', ' + wrongs + ')', []).then().catch(e => { console.log(e); });
                    }).catch(e => {
                        console.log(e);
                        db.executeSql('insert into sessiondata (gameName, date, level, score, time, wrongs) values ( "' + gamename + '", "' + date + '", ' + prevlevel + ', ' + prevscore + ', ' + time + ', ' + wrongs + ')', []).then().catch(e => { console.log(e); });
                    });
                });
            }
        }
    }
    // this function gets the level and score from the database
    getLevelScore(gamename, excerciseSetMode) {
        this.getLocalID('getLevelScore(', [gamename, excerciseSetMode]);
        let path = '';
        if (excerciseSetMode === true) {
            path = "excerciseset";
        }
        else {
            path = "gameslist";
        }
        this.get('score/' + gamename + '/' + path).subscribe(value => {
            console.log(value);
            if (value) {
                this.eventemitter.onDatabase({ score: value });
            }
        }, error => {
            console.log(error);
            if (this.platform.is("capacitor") === true) {
                let excerciseMode = excerciseSetMode ? 1 : 0;
                this.sqlite.create({
                    name: this.localID + '.db',
                    location: 'default'
                }).then((db) => {
                    db.executeSql('select * from [' + gamename + ' score] where excerciseMode = ' + excerciseMode, []).then(resData => {
                        this.eventemitter.onDatabase({ score: resData.rows.item(0).score });
                    });
                }).catch(() => {
                    this.eventemitter.onDatabase({ score: null });
                });
            }
        });
        this.get('level/' + gamename + '/' + path).subscribe(value => {
            console.log(value);
            if (value) {
                this.eventemitter.onDatabase({ level: value });
            }
        }, error => {
            console.log(error);
            if (this.platform.is("capacitor") === true) {
                let excerciseMode = excerciseSetMode ? 1 : 0;
                this.sqlite.create({
                    name: this.localID + '.db',
                    location: 'default'
                }).then((db) => {
                    db.executeSql('select * from [' + gamename + ' level] where excerciseMode = ' + excerciseMode, []).then(resData => {
                        console.log(resData.rows.item(0));
                        this.eventemitter.onDatabase({ level: resData.rows.item(0).level });
                    });
                }).catch(() => {
                    this.eventemitter.onDatabase({ level: null });
                });
            }
        });
    }
    // this function gets sessiondata
    getSessionData() {
        this.getLocalID('getSessionData(');
        // if (this.platform.is("capacitor") === true) {
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
        this.http.get(this.link + 'users/' + this.localID + '/sessiondata' + this.idPath).subscribe(value => {
            let emittedObject = [];
            for (let game in value) {
                for (let sessionID in value[game]) {
                    let object = {
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
            this.eventemitter.onDatabase(emittedObject);
        }, error => {
            if (this.platform.is("capacitor") === true) {
                console.log('sessiondata23');
                let emittedObject = [];
                this.sqlite.create({
                    name: this.localID + '.db',
                    location: 'default'
                }).then((db) => {
                    db.executeSql('select * from [sessiondata]')
                        .then(value => {
                        console.log(value.rows.item(0));
                        if (value.rows.item(0)) {
                            for (let i = 0; i < value.rows.length; i++) {
                                let theobject = value.rows.item(i);
                                value.rows.item(i).date = new Date(value.rows.item(i).date);
                                let object = {
                                    game: theobject.gameName,
                                    date: theobject.date,
                                    level: theobject.level,
                                    score: theobject.score,
                                    time: theobject.time,
                                    wrongs: theobject.wrongs
                                };
                                emittedObject.push(object);
                            }
                            this.eventemitter.onDatabase(emittedObject);
                        }
                        else {
                            this.eventemitter.onDatabase(emittedObject);
                        }
                    })
                        .catch(e => {
                        console.log("an error has occurred", e);
                        console.log(e.rows.item(0));
                        if (e.rows.item(0)) {
                            for (let i = 0; i < e.rows.length; i++) {
                                let theobject = e.rows.item(i);
                                e.rows.item(i).date = new Date(e.rows.item(i).date);
                                let object = {
                                    game: theobject.gameName,
                                    date: theobject.date,
                                    level: theobject.level,
                                    score: theobject.score,
                                    time: theobject.time,
                                    wrongs: theobject.wrongs
                                };
                                emittedObject.push(object);
                            }
                            this.eventemitter.onDatabase(emittedObject);
                        }
                        else {
                            this.eventemitter.onDatabase(emittedObject);
                        }
                    });
                });
            }
        });
    }
    //this function clears localstorage after the user logs out
    logout() {
        localStorage.clear();
    }
    // after the user is authenticated or after a new refreshtoken is issued, this function runs and the localID gets stored in localStorage
    storeLocalID(localID, idToken, email, refreshtoken, expiresIn) {
        let autoLogin = {
            email: email,
            idToken: idToken,
            refreshToken: refreshtoken,
            localID: localID,
            expiresIn: expiresIn
        };
        localStorage.setItem('loggedIn', JSON.stringify(autoLogin));
    }
    // this function gets the localID from localstorage and should be run before every function accessing the database
    // this is because if the user's timer runs out and is no longer authenticated, this function runs the refreshToken function
    getLocalID(funcname, funcparams) {
        let autoLogin = JSON.parse(localStorage.getItem('loggedIn'));
        let expiresIn = autoLogin.expiresIn;
        this.localID = JSON.parse(localStorage.getItem('loggedIn')).localID;
        this.idToken = JSON.parse(localStorage.getItem('loggedIn')).idToken;
        this.idPath = '.json?auth=' + this.idToken;
        console.log(this.localID);
        if (new Date().valueOf() > expiresIn) {
            this.refreshToken(funcname, funcparams);
        }
    }
    // this function gets refreshtokens from the database and reaunthenticate the user
    refreshToken(funcname, funcparams) {
        let autoLogin = JSON.parse(localStorage.getItem('loggedIn'));
        this.http.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAXQtQdjbu_Sq341mRWn_s_jaqV9LxtftM", {
            grant_type: "refresh_token",
            refresh_token: autoLogin.refreshToken
        }).subscribe(resData => {
            autoLogin.idToken = resData.id_token;
            autoLogin.refreshToken = resData.refresh_token;
            autoLogin.expiresIn = new Date().valueOf() + +resData.expires_in * 1000;
            localStorage.setItem('loggedIn', JSON.stringify(autoLogin));
            console.log('refreshtoken');
            if (funcname) {
                if (funcparams) {
                    let params = "";
                    for (let object of funcparams) {
                        params = params + JSON.stringify(object);
                    }
                    this[funcname + funcparams + ")"];
                }
                else {
                    this[funcname + ')'];
                }
            }
        });
    }
    // this function puts user data like score, level or sessions into the database
    put(path, storedvar) {
        return this.http.put(this.link + 'users/' + this.localID + '/' + path + this.idPath, storedvar);
    }
    // this function gets user data like score or level or can get previously played sessions
    get(path) {
        return this.http.get(this.link + 'users/' + this.localID + '/' + path + this.idPath);
    }
    //This command can be used to get something from gameinfo
    // To call it just put this.gameinfoget('Word Pairs/pair1'), this would pull from "https://memoryattention-1.firebaseio.com/gameinfo/WordPairs/pair1.json"
    gameinfoget(path) {
        this.http.get(this.link + 'gameinfo/' + path + this.idPath).subscribe(value => {
            this.eventemitter.onDatabase({ path: path, value: value });
        });
    }
    onLogin() {
        this.getLocalID('onLogin(');
        this.http.get(this.link + 'users/' + this.localID + this.idPath).subscribe(value => {
            console.log(value);
            if (this.platform.is("capacitor") === true && value) {
                // SQLite sync with the database occurs in this code
                // The db.executeSql statements run sql code and add to the sql database and the database is stored under localID
                // The firebase structure is users/{localID}/(score, level, sessiondata) (3 separate folders)
                this.sqlite.create({
                    name: this.localID + '.db',
                    location: 'default'
                }).then((db) => {
                    if (value.level) {
                        for (let game in value.level) {
                            db.executeSql('create table [' + game + ' level]' + ' (excerciseMode boolean, level int)', []).then(resData => {
                                console.log(value.level[game] + "LEVEL STUFF HERE");
                                console.log(value.level + 'level');
                                console.log(resData);
                                if (value.level[game].excerciseset) {
                                    db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (1, ' + value.level[game].excerciseset + ')').then(resData => {
                                        console.log(resData);
                                    });
                                }
                                if (value.level[game].gameslist) {
                                    db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (0, ' + value.level[game].gameslist + ')').then(resData => {
                                        console.log(resData);
                                    });
                                }
                            })
                                .catch(e => {
                                console.log(e);
                                if (value.level[game].excerciseset) {
                                    db.executeSql('update [' + game + ' level] set level = ' + value.level[game].excerciseset + ' where excerciseMode = 1', []).then(resData => {
                                        console.log(resData);
                                    })
                                        .catch(() => {
                                        db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (1, ' + value.level[game].excerciseset + ')').then().catch(e => { console.log(e); });
                                    });
                                }
                                if (value.score[game].gameslist) {
                                    db.executeSql('update [' + game + ' level] set level = ' + value.level[game].gameslist + ' where excerciseMode = 1', []).then(resData => {
                                        console.log(resData);
                                    })
                                        .catch(() => {
                                        db.executeSql('insert into [' + game + ' level]' + ' (excerciseMode, level) values (1, ' + value.level[game].gameslist + ')').then().catch(e => { console.log(e); });
                                    });
                                }
                            });
                        }
                    }
                    if (value.score) {
                        for (let game in value.score) {
                            console.log(value.score[game]);
                            db.executeSql('create table [' + game + ' score]' + ' (excerciseMode boolean, score float)', [])
                                .then(() => {
                                if (value.level[game].excerciseset) {
                                    db.executeSql('insert into [' + game + ' score]' + ' (excerciseMode, score) values (1, ' + value.score[game].excerciseset + ')').then(resData => {
                                        console.log(resData);
                                    });
                                }
                                if (value.level[game].gameslist) {
                                    db.executeSql('insert into [' + game + ' score]' + ' (excerciseMode, score) values (0, ' + value.score[game].gameslist + ')').then(resData => {
                                        console.log(resData);
                                    });
                                }
                            })
                                .catch(e => {
                                console.log(e);
                                if (value.score[game].excerciseset) {
                                    db.executeSql('update [' + game + ' score] set score = ' + value.score[game].excerciseset + ' where excerciseMode = 1', []).then(resData => {
                                        console.log(resData);
                                    })
                                        .catch(error => {
                                        db.executeSql('insert into [' + game + ' score]' + ' (excerciseMode, score) values (1, ' + value.score[game].excerciseset + ')').then().catch(e => { console.log(e); });
                                    });
                                }
                                if (value.score[game].gameslist) {
                                    db.executeSql('update [' + game + ' score] set score = ' + value.score[game].gameslist + ' where excerciseMode = 1', []).then(resData => {
                                        console.log(resData);
                                    })
                                        .catch(error => {
                                        db.executeSql('insert into [' + game + ' score]' + ' (excerciseMode, score) values (1, ' + value.score[game].gameslist + ')').then().catch(e => { console.log(e); });
                                    });
                                }
                            });
                        }
                    }
                    // sessiondata stored as (gameName VARCHAR(64), date date, level int, score float, time float, wrongs int)
                    if (value.sessiondata) {
                        db.executeSql('create table [sessiondata] (id integer primary key, gameName VARCHAR(64), date VARCHAR(64), level int, score float, time float, wrongs int)', [])
                            .then(() => {
                            console.log(value.sessiondata);
                            for (let game in value.sessiondata) {
                                console.log(game);
                                for (let sessionID in value.sessiondata[game]) {
                                    let gameinfo = value.sessiondata[game][sessionID];
                                    db.executeSql('insert into sessiondata (gameName, date, level, score, time, wrongs) values ("' + game + '", "' + gameinfo.date + '", ' + gameinfo.level + ', ' + gameinfo.score + ', ' + gameinfo.time + ', ' + gameinfo.wrongs + ')', []).then(resData => {
                                        console.log(resData);
                                    }).catch(e => { console.log(e); });
                                }
                            }
                        })
                            .catch(e => {
                            console.log(e);
                            for (let game in value.sessiondata) {
                                console.log(game);
                                for (let sessionID in value.sessiondata[game]) {
                                    let gameinfo = value.sessiondata[game][sessionID];
                                    // db.executeSql('update sessiondata set date = "' + gameinfo.date + '", gameName = "' + game + '", level = ' + gameinfo.level + ', score = ' + gameinfo.score + ', time = ' + gameinfo.time + ', wrongs = ' + gameinfo.wrongs + ' where date = "' + gameinfo.date + '" and time = ' + gameinfo.time + ' and gameName = "' + game + '"', []).then().catch(e => {
                                    //   console.log(e)
                                    db.executeSql('insert or replace into [sessiondata] values ( "' + game + '", "' + gameinfo.date + '", ' + gameinfo.level + ', ' + gameinfo.score + ', ' + gameinfo.time + ', ' + gameinfo.wrongs + ')', []).then(resData => {
                                        console.log(resData);
                                    }).catch(e => { console.log(e); });
                                    // })
                                }
                            }
                        });
                    }
                }).then(() => {
                    this.eventemitter.onLoading(true);
                });
            }
            else {
                this.eventemitter.onLoading(true);
            }
        }, error => {
            console.log(error);
            this.eventemitter.onLoading(false);
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _eventemitter_service__WEBPACK_IMPORTED_MODULE_0__.EventemitterService },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 64874:
/*!************************************************!*\
  !*** ./src/app/shared/eventemitter.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventemitterService": function() { return /* binding */ EventemitterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);



let EventemitterService = class EventemitterService {
    constructor() {
        this.animate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // CurrentCardRoute = new EventEmitter<string>();
        this.form = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // gameState = new EventEmitter<string>();
        this.CurrentCardRoute = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.gameStateSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.RoundFinished = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.memorizedItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.databaseemitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    // has the different subjects and event emitters that are used in the app
    onAnimate(string) {
        this.animate.emit(string);
    }
    onCurrentCardRoute(string) {
        this.CurrentCardRoute.next(string);
    }
    onForm(string) {
        this.form.emit(string);
    }
    onGameState(string) {
        // this.gameState.emit(string)
        this.gameStateSubj.next(string);
    }
    onRoundFinished(any) {
        this.RoundFinished.next(any);
    }
    onMemorizedItems(array) {
        this.memorizedItems.next(array);
    }
    onDatabase(object) {
        this.databaseemitter.next(object);
    }
    onLoading(boolean) {
        this.loading.next(boolean);
    }
};
EventemitterService.ctorParameters = () => [];
EventemitterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], EventemitterService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_data_service_ts-es2015.js.map