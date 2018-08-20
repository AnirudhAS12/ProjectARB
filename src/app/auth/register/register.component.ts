import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/Router'
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthService) { } 

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    const email =form.value.email;
    const password = form.value.password;
    this.auth.signupForm(email,password);
    // this.router.navigate(['/']);

  }  
  

}
