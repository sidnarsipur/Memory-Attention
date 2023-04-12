(self["webpackChunkmemory"] = self["webpackChunkmemory"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ 10954);
/* harmony import */ var _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/eventemitter.service */ 64874);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ 30294);









let LoginPage = class LoginPage {
    constructor(loginService, router, datastorage, eventemitter) {
        this.loginService = loginService;
        this.router = router;
        this.datastorage = datastorage;
        this.eventemitter = eventemitter;
        this.loginMode = true;
        this.forgotPasswordMode = false;
        this.isLoading = true;
    }
    // navigates to the main page if logged in
    ngOnInit() {
        let loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn) {
            this.router.navigate(['/home/main']);
        }
    }
    // what happens when the form with email and password is submitted
    onSubmit() {
        if (this.loginMode === true) {
            this.loginService.login(this.email, this.password).subscribe(resData => {
                this.datastorage.storeLocalID(resData.localId, resData.idToken, resData.email, resData.refreshToken, new Date().valueOf() + +resData.expiresIn);
                this.isLoading = true;
                let subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
                subscription = this.eventemitter.loading.subscribe(value => {
                    if (value === true) {
                        this.router.navigate(['/home/main']);
                        subscription.unsubscribe();
                    }
                    else {
                        console.log('an error has occurred');
                    }
                });
                this.datastorage.onLogin();
            }, error => {
                console.log(error);
                this.loginService.handleError(error.error.error.message);
            });
        }
        if (this.loginMode === false) {
            this.loginService.signUp(this.email, this.password).subscribe(resData => {
                this.loginService.presentAlert('Sign Up Successful!', "Now login to get started.");
                this.loginMode = true;
            }, error => {
                console.log(error);
                this.loginService.handleError(error.error.error.message);
            });
        }
    }
    // forgot password function
    forgotPassword() {
        this.loginService.forgotPassword(this.email);
        this.forgotPasswordMode = false;
    }
};
LoginPage.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _shared_eventemitter_service__WEBPACK_IMPORTED_MODULE_3__.EventemitterService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 30294:
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);




let LoginService = class LoginService {
    constructor(http, AlertCtrl) {
        this.http = http;
        this.AlertCtrl = AlertCtrl;
        this.API_KEY = 'AIzaSyCf59OjdjdHXpM_bkjz6wElQAQCJLBxsEA';
    }
    // onLogin(email: string, password: string) {
    // let currentemail = localStorage.getItem('credential1')
    // let currentpassword = localStorage.getItem('credential2')
    // if (email === currentemail && password === currentpassword) {
    //   console.log(true)
    //   localStorage.setItem('isLoggedIn', 'true')
    //   return true
    // } 
    // }
    // sign up function from database
    signUp(email, password) {
        return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        });
    }
    // login function from database
    login(email, password) {
        console.log('login');
        return this.http
            .post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + this.API_KEY, {
            email: email,
            password: password,
            returnSecureToken: true
        });
    }
    // in case of an error, shows the message
    handleError(error) {
        let message;
        let errorm;
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
    }
    // presents the error
    presentAlert(error, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: error,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // forgot password function from the database
    forgotPassword(email) {
        this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + this.API_KEY, {
            requestType: "PASSWORD_RESET",
            email: email
        }).subscribe(value => {
            console.log(value);
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- has the forgot password function and title of the page -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"!forgotPasswordMode\">{{ loginMode ? \"Log In\" : \"Sign Up\" }}</ion-title>\n    <ion-title *ngIf=\"forgotPasswordMode\">Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- the login page with the email and password and the submit button -->\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(); f.reset()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"form-group\">\n            <ion-item>\n              <ion-label for=\"email\" position=\"floating\">\n                E-mail\n              </ion-label>   \n              <ion-input\n              type=\"email\"\n              email\n              required\n              [(ngModel)]=\"email\"\n              name=\"email\"\n              id=\"email\"\n              class=\"form-control\"></ion-input>         \n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!forgotPasswordMode\">\n        <ion-col>\n          <div class=\"form-group\">\n            <ion-item>\n              <ion-label for=\"password\" position=\"floating\">\n                Password\n              </ion-label>   \n              <ion-input\n              type=\"password\"\n              required\n              [(ngModel)]=\"password\"\n              name=\"password\"\n              id=\"password\"\n              class=\"form-control\"\n              minlength=\"6\"></ion-input>         \n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-button *ngIf=\"!forgotPasswordMode\" [disabled]=\"!f.valid\" type=\"submit\">{{ loginMode ? \"Log In\" : \"Sign Up\"}}</ion-button>\n            <ion-label *ngIf=\"!forgotPasswordMode\" class=\"ion-padding\"> {{ loginMode ? \"Don't have an account?\" : \"Already have an account?\"}} <a (click)=\"loginMode = !loginMode\">{{ loginMode ? \"Sign Up\" : \"Log In\" }}</a></ion-label>\n            <ion-button *ngIf=\"forgotPasswordMode\"  (click)=\"forgotPassword()\">Submit</ion-button>\n            <a class=\"ion-padding\" (click)=\"forgotPasswordMode = !forgotPasswordMode\" *ngIf=\"loginMode\">{{ !forgotPasswordMode ? \"Forgot Password?\" : \"Back\"}}</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map