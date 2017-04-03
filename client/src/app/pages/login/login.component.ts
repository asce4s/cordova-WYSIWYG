import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";
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
     if(auth){
       this.router.navigate(['projects']);
     }

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
   /* this.af.auth.login().then((data)=>{
      this.router.navigate(['projects']);
    }).catch((data)=>{

    })*/

   this.af.auth.login({
     provider: AuthProviders.Google,
     method: AuthMethods.Popup
   }).then((data)=>{
     this.router.navigate(['projects']);
   }).catch((data)=>{

   })


  }

  public fbLogin(){
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then((data)=>{
      this.router.navigate(['projects']);
    }).catch((data)=>{

    })
  }
}
