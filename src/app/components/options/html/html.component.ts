import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Html} from "../../../interfaces/html";
import {HtmlService} from "../../../services/html.service";

import * as $ from 'jquery';
@Component({
  selector: 'html-options',
  templateUrl: './html.component.html',
  inputs:['selectedHtml'],




})
export class HtmlComponent implements OnInit {

  constructor(private _htmlService:HtmlService) { }

  ngOnInit() {
  }

  private selectedHtml: Html;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#htmlStyles").html('<style>' +
        this._htmlService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public setHtmlText(){
    $('#'+this.selectedHtml.id).html(this.selectedHtml.text.text);
  }

  public setHtmlcodes(){
    $('#'+this.selectedHtml.id).html(this.selectedHtml.code);
  }

  public addClasses(){
    $('#'+this.selectedHtml.id).addClass(this.selectedHtml.style.class);
  }



  public eventLoad(){
    this.modelShow.emit(true);
  }
}
