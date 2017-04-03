import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    constructor(public af: AngularFire,private router: Router) {
    }

    public logout() {
        this.af.auth.logout();
        this.router.navigate(['/']);

    }

    public googleLogin(){
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
