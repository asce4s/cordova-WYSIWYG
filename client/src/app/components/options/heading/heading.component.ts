import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Heading} from "../../../interfaces/heading";
import {HeadingService} from "../../../services/heading.service";

import * as $ from 'jquery';
@Component({
  selector: 'heading-options',
  templateUrl: './heading.component.html',
  inputs:['selectedHeading'],




})
export class HeadingComponent implements OnInit {

  constructor(private _headingService:HeadingService) { }

  ngOnInit() {
  }

  private selectedHeading: Heading;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#headingStyles").html('<style>' +
        this._headingService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public setHeadingText(){
    $('#'+this.selectedHeading.id).html(this.selectedHeading.text.text);
  }

  public addClasses(){
    $('#'+this.selectedHeading.id).addClass(this.selectedHeading.style.class);
  }


  public eventLoad(){
    this.modelShow.emit(true);
  }
}
