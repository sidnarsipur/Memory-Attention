(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    45393:
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    80107:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      76770);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      21339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/data.service */
      10954);
      /* harmony import */


      var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/eventemitter.service */
      64874);
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login.service */
      30294);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(loginService, router, datastorage, eventemitter) {
          _classCallCheck(this, LoginPage);

          this.loginService = loginService;
          this.router = router;
          this.datastorage = datastorage;
          this.eventemitter = eventemitter;
          this.loginMode = true;
          this.forgotPasswordMode = false;
          this.isLoading = true;
        } // navigates to the main page if logged in


        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var loggedIn = localStorage.getItem('loggedIn');

            if (loggedIn) {
              this.router.navigate(['/home/main']);
            }
          } // what happens when the form with email and password is submitted

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            if (this.loginMode === true) {
              this.loginService.login(this.email, this.password).subscribe(function (resData) {
                _this.datastorage.storeLocalID(resData.localId, resData.idToken, resData.email, resData.refreshToken, new Date().valueOf() + +resData.expiresIn);

                _this.isLoading = true;
                var subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
                subscription = _this.eventemitter.loading.subscribe(function (value) {
                  if (value === true) {
                    _this.router.navigate(['/home/main']);

                    subscription.unsubscribe();
                  } else {
                    console.log('an error has occurred');
                  }
                });

                _this.datastorage.onLogin();
              }, function (error) {
                console.log(error);

                _this.loginService.handleError(error.error.error.message);
              });
            }

            if (this.loginMode === false) {
              this.loginService.signUp(this.email, this.password).subscribe(function (resData) {
                _this.loginService.presentAlert('Sign Up Successful!', "Now login to get started.");

                _this.loginMode = true;
              }, function (error) {
                console.log(error);

                _this.loginService.handleError(error.error.error.message);
              });
            }
          } // forgot password function

        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            this.loginService.forgotPassword(this.email);
            this.forgotPasswordMode = false;
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__.EventemitterService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    30294:
    /*!****************************************!*\
      !*** ./src/app/login/login.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginService": function LoginService() {
          return (
            /* binding */
            _LoginService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoginService = /*#__PURE__*/function () {
        function LoginService(http, AlertCtrl) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.AlertCtrl = AlertCtrl;
          this.API_KEY = 'AIzaSyCf59OjdjdHXpM_bkjz6wElQAQCJLBxsEA';
        } // onLogin(email: string, password: string) {
        // let currentemail = localStorage.getItem('credential1')
        // let currentpassword = localStorage.getItem('credential2')
        // if (email === currentemail && password === currentpassword) {
        //   console.log(true)
        //   localStorage.setItem('isLoggedIn', 'true')
        //   return true
        // } 
        // }
        // sign up function from database


        _createClass(LoginService, [{
          key: "signUp",
          value: function signUp(email, password) {
            return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.API_KEY, {
              email: email,
              password: password,
              returnSecureToken: true
            });
          } // login function from database

        }, {
          key: "login",
          value: function login(email, password) {
            console.log('login');
            return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + this.API_KEY, {
              email: email,
              password: password,
              returnSecureToken: true
            });
          } // in case of an error, shows the message

        }, {
          key: "handleError",
          value: function handleError(error) {
            var message;
            var errorm;
            console.log(error);

            switch (error) {
              case 'EMAIL_EXISTS':
                errorm = "Email Exists";
                message = "The email address is already in use by another account.";
                break;

              case 'INVALID_EMAIL':
                errorm = "Invalid Email";
                message = "This email does not exist. Please enter a valid email.";
                break;

              case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorm = "Too Many Attempts";
                message = "We have blocked all requests from this device due to unusual activity. Try again later.";
                break;

              case 'EMAIL_NOT_FOUND':
                errorm = "Email Not Found";
                message = "There is no user record corresponding to this identifier. The user may have been deleted.";
                break;

              case 'INVALID_PASSWORD':
                errorm = "Invalid Password";
                message = "The password is invalid.";
                break;

              case 'USER_DISABLED':
                errorm = "User Disabled";
                message = "The user account has been disabled by an administrator.";
                break;
            }

            this.presentAlert(errorm, message);
          } // presents the error

        }, {
          key: "presentAlert",
          value: function presentAlert(error, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.AlertCtrl.create({
                        header: error,
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // forgot password function from the database

        }, {
          key: "forgotPassword",
          value: function forgotPassword(email) {
            this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + this.API_KEY, {
              requestType: "PASSWORD_RESET",
              email: email
            }).subscribe(function (value) {
              console.log(value);
            });
          }
        }]);

        return LoginService;
      }();

      _LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _LoginService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _LoginService);
      /***/
    },

    /***/
    21339:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    76770:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- has the forgot password function and title of the page -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"!forgotPasswordMode\">{{ loginMode ? \"Log In\" : \"Sign Up\" }}</ion-title>\n    <ion-title *ngIf=\"forgotPasswordMode\">Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- the login page with the email and password and the submit button -->\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(); f.reset()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"form-group\">\n            <ion-item>\n              <ion-label for=\"email\" position=\"floating\">\n                E-mail\n              </ion-label>   \n              <ion-input\n              type=\"email\"\n              email\n              required\n              [(ngModel)]=\"email\"\n              name=\"email\"\n              id=\"email\"\n              class=\"form-control\"></ion-input>         \n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!forgotPasswordMode\">\n        <ion-col>\n          <div class=\"form-group\">\n            <ion-item>\n              <ion-label for=\"password\" position=\"floating\">\n                Password\n              </ion-label>   \n              <ion-input\n              type=\"password\"\n              required\n              [(ngModel)]=\"password\"\n              name=\"password\"\n              id=\"password\"\n              class=\"form-control\"\n              minlength=\"6\"></ion-input>         \n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-button *ngIf=\"!forgotPasswordMode\" [disabled]=\"!f.valid\" type=\"submit\">{{ loginMode ? \"Log In\" : \"Sign Up\"}}</ion-button>\n            <ion-label *ngIf=\"!forgotPasswordMode\" class=\"ion-padding\"> {{ loginMode ? \"Don't have an account?\" : \"Already have an account?\"}} <a (click)=\"loginMode = !loginMode\">{{ loginMode ? \"Sign Up\" : \"Log In\" }}</a></ion-label>\n            <ion-button *ngIf=\"forgotPasswordMode\"  (click)=\"forgotPassword()\">Submit</ion-button>\n            <a class=\"ion-padding\" (click)=\"forgotPasswordMode = !forgotPasswordMode\" *ngIf=\"loginMode\">{{ !forgotPasswordMode ? \"Forgot Password?\" : \"Back\"}}</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map