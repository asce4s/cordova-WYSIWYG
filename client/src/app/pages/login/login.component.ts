import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire,private router: Router,) { }

  ngOnInit() {
   this.af.auth.subscribe((auth)=>{
     console.log(auth);

   })
  }

  signUpShow(){
    $('#loginbox').hide(); $('#signupbox').show();
    return false;
  }

  signInshow(){
    $('#signupbox').hide(); $('#loginbox').show();
    return false;
  }

  public googleLogin(){
    this.af.auth.login().then((data)=>{
      this.router.navigate(['projects']);
    }).catch((data)=>{

    })

  }
}
