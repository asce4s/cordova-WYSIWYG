import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Paragraph} from "../../../interfaces/paragraph";
import {ParagraphService} from "../../../services/paragraph.service";

import * as $ from 'jquery';
@Component({
  selector: 'paragraph-options',
  templateUrl: './paragraph.component.html',
  inputs:['selectedParagraph'],




})
export class ParagraphComponent implements OnInit {

  constructor(private _paragraphService:ParagraphService) { }

  ngOnInit() {
  }

  private selectedParagraph: Paragraph;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#paragraphStyles").html('<style>' +
        this._paragraphService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public setParagraphText(){
    $('#'+this.selectedParagraph.id).html(this.selectedParagraph.text.text);
  }

  public addClasses(){
    $('#'+this.selectedParagraph.id).addClass(this.selectedParagraph.style.class);
  }


  public eventLoad(){
    this.modelShow.emit(true);
  }
}
