import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  loadedFeature='recipe';
  onNavigate(feature : string){
    this.loadedFeature = feature;

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAqU9TXKLsTPiq4UgP7_k1GXsQAXivFOjw",
      authDomain: "recipe-book-4dcb9.firebaseapp.com"
    });
  }
}
