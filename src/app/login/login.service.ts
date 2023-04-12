import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  }

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_KEY = 'AIzaSyCf59OjdjdHXpM_bkjz6wElQAQCJLBxsEA'

  constructor(private http: HttpClient, private AlertCtrl: AlertController) { }

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
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.API_KEY,
      {
          email: email,
          password: password,
          returnSecureToken: true
      }
  )
  }

  // login function from database
  login(email: string, password: string) {
    console.log('login')
    return this.http
      .post<AuthResponseData>(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + this.API_KEY,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
}

// in case of an error, shows the message
handleError(error) {
  let message: string;
  let errorm: string;
  console.log(error)
  switch(error) {
    case 'EMAIL_EXISTS':
      errorm = "Email Exists"
      message = "The email address is already in use by another account."
      break
    case 'INVALID_EMAIL':
      errorm = "Invalid Email"
      message = "This email does not exist. Please enter a valid email."
      break
    case 'TOO_MANY_ATTEMPTS_TRY_LATER':
      errorm = "Too Many Attempts"
      message = "We have blocked all requests from this device due to unusual activity. Try again later."
      break
    case 'EMAIL_NOT_FOUND':
      errorm = "Email Not Found"
      message = "There is no user record corresponding to this identifier. The user may have been deleted."
      break
    case 'INVALID_PASSWORD':
      errorm = "Invalid Password"
      message = "The password is invalid."
      break
    case 'USER_DISABLED':
      errorm = "User Disabled"
      message = "The user account has been disabled by an administrator."
      break
  }
  this.presentAlert(errorm, message)
}

// presents the error
async presentAlert(error, message) {
  const alert = await this.AlertCtrl.create({
    header: error,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

// forgot password function from the database
forgotPassword(email) {
  this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + this.API_KEY, {
    requestType: "PASSWORD_RESET",
    email: email
  }).subscribe(value => {
    console.log(value)
  })
}

  // onSignUp(email, password) {

    // localStorage.setItem('credential1', this.encode(email))
    // localStorage.setItem('credential2', this.encode(password))
  // }

  // encode(string) {
  //   let hex
  //   let result = "";
  //   for (let i = 0; i < string.length; i++) {
  //       hex = ''+string.charCodeAt(i).toString(16);
  //       result += ("000"+hex).slice(-4);
  //   }
  //   return result
  // }

  // decode(string) {
  //   let hex  = string.toString();
  //   let str = '';
  //   for (var n = 0; n < hex.length; n += 4) {
  //     str += String.fromCharCode(parseInt(hex.substr(n, 4), 16));
  //   }
  //   return str;
  // }

}
