import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ModalDirective} from "ng2-bootstrap";
import {CoolLocalStorage} from "angular2-cool-storage";
import {Router} from "@angular/router";
import {HTTPService} from "../../services/http.service";
import { moveIn, fallIn, moveInLeft } from '../router.animations';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    providers: [HTTPService]
})
export class ProjectsComponent implements OnInit {

    db: FirebaseListObservable<any>;
    private imgLoader = true;
    private currentUser;
    @ViewChild('smModal') public smModel: ModalDirective;

    constructor(private af: AngularFire,
                private _httpService: HTTPService,
                private _localStorage: CoolLocalStorage,
                private _router:Router
    ) {


    }

    logout() {
         this.af.auth.logout();
         console.log('logged out');
         //this._router.navigateByUrl('/');
      window.location.href='/';
    }

    ngOnInit() {
        this.af.auth.subscribe((auth) => {
            this.currentUser = auth.uid;
            this.db = this.af.database.list('/projects/' + this.currentUser);
            this.db.subscribe((key) => {
                this.imgLoader = false;
            })
        });


    }

    private form = {
        title: '',
        description: '',
        user: ''
    }

    createNew() {

        this.form.user = this.currentUser;

        this.db.push(this.form).then((item) => {

            if (item) {
                this.form = {
                    title: '',
                    description: '',
                    user: ''
                }

                this.smModel.hide();
                //this._localStorage.setItem('id', item.key);
              console.log(item.key)
                this._httpService.sendRequest("id=" + item.key, '/new').subscribe((v) => {
                    console.log(v);
                });
            }
        });

    }

    removeProject(key) {
        if (confirm("Are you sure ?")) {
            this.db.remove(key);
            this._httpService.sendRequest("id=" + key, '/delete').subscribe((v) => {
                //console.log(v);
            });
        }
    }


    navi(id){
        /*this._localStorage.setObject('session', {
            appID:id,
            user:this.currentUser
        });*/

        this._localStorage.setItem('appID',id);
        this._localStorage.setItem('user',this.currentUser);
        this._router.navigate(['/builder',id]);

    }

}
