
import * as firebase from 'firebase';

// import {Injectable} from '@angular/core';

// @Injectable()

export class AuthService
{

  signupForm(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
        error => console.log(error)
    )
  }

  signinForm(email : string, password : string){
      firebase.auth().signInWithEmailAndPassword(email,password).then(
          response => console.log(response)
      ).catch(
          error => console.log(error)
      )
  }

}