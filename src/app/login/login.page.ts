import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
import { EventemitterService } from '../shared/eventemitter.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;
  loginMode = true;
  forgotPasswordMode = false;
  isLoading = true
  constructor(
    private loginService: LoginService,
    private router: Router,
    private datastorage: DataService,
    private eventemitter: EventemitterService) { }

    // navigates to the main page if logged in
  ngOnInit() {
    let loggedIn = localStorage.getItem('loggedIn')
    if (loggedIn) {
      this.router.navigate(['/home/main'])
    }
  }

  // what happens when the form with email and password is submitted
  onSubmit() {
    if (this.loginMode === true) {
      this.loginService.login(this.email, this.password).subscribe(resData => {
        this.datastorage.storeLocalID(resData.localId, resData.idToken, resData.email, resData.refreshToken, new Date().valueOf() + +resData.expiresIn)
        this.isLoading = true
        let subscription = new Subscription()
        subscription = this.eventemitter.loading.subscribe(value => {
          if (value === true) {
            this.router.navigate(['/home/main'])
            subscription.unsubscribe()
          } else {
            console.log('an error has occurred')
          }
        })
        this.datastorage.onLogin()
      }, error => {
        console.log(error)
        this.loginService.handleError(error.error.error.message)
      })

    }
    if (this.loginMode === false) {
      this.loginService.signUp(this.email, this.password).subscribe(resData => {
        this.loginService.presentAlert('Sign Up Successful!', "Now login to get started.")
        this.loginMode = true
      }, error => {
        console.log(error)
        this.loginService.handleError(error.error.error.message)
      })
    }
  }

  // forgot password function
  forgotPassword() {
    this.loginService.forgotPassword(this.email)
    this.forgotPasswordMode = false
  }
}
