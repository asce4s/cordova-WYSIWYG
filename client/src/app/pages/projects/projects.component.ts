import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ModalDirective} from "ng2-bootstrap";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: []
})
export class ProjectsComponent implements OnInit {

  db: FirebaseListObservable<any>;
  private imgLoader=true;
  private currentUser;
  @ViewChild('smModal') public smModel: ModalDirective;

  constructor(private af: AngularFire) {



  }

  ngOnInit() {
    this.af.auth.subscribe((auth)=>{
      this.currentUser=auth.uid;
      this.db=this.af.database.list('/projects/'+this.currentUser);
      this.db.subscribe((key)=>{
        this.imgLoader=false;
      })
    });



  }

  private form={
    title:'',
    description:'',
    user:''
  }

  createNew(){

    this.form.user=this.currentUser;

    this.db.push(this.form).then((key)=>{
      if(key){
        this.form={
          title:'',
          description:'',
          user:''
        }
        this.smModel.hide();
      }
    });

  }

  removeProject(key){
    if(confirm("Are you sure ?")){
      this.db.remove(key);
    }
  }

}
