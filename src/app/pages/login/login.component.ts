import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AngularFire, AuthMethods, AuthProviders} from "angularfire2";
import {Router} from "@angular/router";
import { moveIn, fallIn } from '../router.animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}

})
export class LoginComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFire,private router: Router,) {
    this.af.auth.subscribe(auth => { 
        if(auth) {
            this.router.navigateByUrl('projects');
        }
    });
  }

  

  ngOnInit() {
   // this.af.auth.subscribe((auth)=>{
   //   if(auth){
   //     this.router.navigate(['projects']);
   //   }

   // })
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

  public onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['projects']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
}
