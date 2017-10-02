import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/angularfire2";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

// @Injectable()
// export class AuthService {

//     constructor(public af: AngularFire,private router: Router) {
//     }

//     public logout() {
//         this.af.auth.logout();
//         this.router.navigate(['/']);

//     }

//     public googleLogin(){
//         this.af.auth.login({
//             provider: AuthProviders.Google,
//             method: AuthMethods.Popup
//         }).then((data)=>{
//             this.router.navigate(['projects']);
//         }).catch((data)=>{

//         })


//     }

//     public fbLogin(){
//         this.af.auth.login({
//             provider: AuthProviders.Facebook,
//             method: AuthMethods.Popup
//         }).then((data)=>{
//             this.router.navigate(['projects']);
//         }).catch((data)=>{

//         })
//     }

// }
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return Observable.from(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      })
    }
 
}