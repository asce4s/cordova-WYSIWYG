import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {ActivatedRoute} from '@angular/router';
import {RADIO} from "../../data/radio-data";
import * as $ from 'jquery'
import {BUTTON} from "../../data/button-data";
import {NAVBAR} from "../../data/navbar-data";
import {CHECKBOX} from "../../data/checkbox-data";
import {CONTAINER} from "../../data/container-data";
import {HEADING} from "../../data/heading-data";
import {HTML} from "../../data/html-data";
import {IMAGE} from "../../data/image-data";
import {INPUT} from "../../data/input-data";
import {LIST} from "../../data/list-data";
import {MAP} from "../../data/map-data";
import {PARAGRAPH} from "../../data/paragraph-data";
import {RANGE} from "../../data/range-data";
import {SWITCH} from "../../data/switch-data";
import {TEXTAREA} from "../../data/textarea-data";


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
        checkbox:CHECKBOX,
        container:CONTAINER,
        heading:HEADING,
        html:HTML,
        image:IMAGE,
        input:INPUT,
        list:LIST,
        map:MAP,
        paragraph:PARAGRAPH,
        range:RANGE,
        switch:SWITCH,
        textarea:TEXTAREA,

        design:$("#designArea").html().toString()}
      )

  }

}
