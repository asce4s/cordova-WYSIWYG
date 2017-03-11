import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {ActivatedRoute} from '@angular/router';
import {RADIO} from "../../data/radio-data";
import * as $ from 'jquery'
import {BUTTON} from "../../data/button-data";
import {NAVBAR} from "../../data/navbar-data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private db: any;
  private id: any;

  constructor(private af: AngularFire, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];

    });


  }

  saveDesign() {
    this.db = this.af.database.object('/options/' + this.id);
    this.db.set(
      { radio:RADIO,
        button:BUTTON,
        navbar:NAVBAR,
        design:$("#designArea").html().toString()}
      )

  }

}
