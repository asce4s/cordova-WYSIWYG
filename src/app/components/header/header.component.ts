import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FirebaseListObservable, AngularFire} from 'angularfire2';
import {ActivatedRoute} from '@angular/router';
import {RADIO} from '../../data/radio-data';
import * as $ from 'jquery';
import {BUTTON} from '../../data/button-data';
import {NAVBAR} from '../../data/navbar-data';
import {CHECKBOX} from '../../data/checkbox-data';
import {CONTAINER} from '../../data/container-data';
import {HEADING} from '../../data/heading-data';
import {HTML} from '../../data/html-data';
import {IMAGE} from '../../data/image-data';
import {INPUT} from '../../data/input-data';
import {LIST} from '../../data/list-data';
import {MAP} from '../../data/map-data';
import {PARAGRAPH} from '../../data/paragraph-data';
import {RANGE} from '../../data/range-data';
import {SWITCH} from '../../data/switch-data';
import {TEXTAREA} from '../../data/textarea-data';
import {SELECT} from '../../data/select-data';

import {BuildService} from '../../services/build.service';
import {PageService} from '../../services/page.service';
import {page} from '../../interfaces/page';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [BuildService]

})
export class HeaderComponent implements OnInit {

  private db: any;
  private id: any;

  @Output() downloamodelShow: EventEmitter<any> = new EventEmitter();
  @Output() downloadmodelData: EventEmitter<any> = new EventEmitter();

  constructor(private af: AngularFire,
              private route: ActivatedRoute,
              private  _buildService: BuildService,
              private _pageService: PageService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];

    });


  }

  saveDesign() {
    this.db = this.af.database.object('/options/' + this.id);
    const data = {
      radio: RADIO,
      button: BUTTON,
      navbar: NAVBAR,
      checkbox: CHECKBOX,
      container: CONTAINER,
      heading: HEADING,
      html: HTML,
      image: IMAGE,
      input: INPUT,
      list: LIST,
      map: MAP,
      paragraph: PARAGRAPH,
      range: RANGE,
      switch: SWITCH,
      textarea: TEXTAREA,
      select: SELECT,
    };
    this.db.set(data);

    const pages = this.af.database.object('/pages/' + this.id);
    const pageData: page[] = [];

    this._pageService.getAllPages().then((value) => {
      value.forEach((v) => {
        pageData.push({
          id: v.id,
          elements: v.elements,
          home: v.home,
          html: $('#' + v.id).html()
        });
      });
      console.log({pageData});
      pages.set(pageData).then((v) => {
        console.log('success');
        console.log(v);

      }).catch((e) => {
        console.log('error');
        console.log(e);
      });
    });





  }

  public buidApp() {
    this.downloamodelShow.emit(true);
    this._buildService.build().subscribe((v) => {
      this.downloadmodelData.emit(v);
    });
  }


}

