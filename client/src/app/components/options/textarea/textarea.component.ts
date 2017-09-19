import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Textarea} from "../../../interfaces/textarea";
import {TextareaService} from "../../../services/textarea.service";

import * as $ from 'jquery';
@Component({
  selector: 'textarea-options',
  templateUrl: './textarea.component.html',
  inputs:['selectedTextarea'],




})
export class TextareaComponent implements OnInit {

  constructor(private _textareaService:TextareaService) { }

  ngOnInit() {
  }

  private selectedTextarea: Textarea;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#textareaStyles").html('<style>' +
        this._textareaService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public setTextareaText(){
    $('#'+this.selectedTextarea.id).html(this.selectedTextarea.text.text);
  }

  public addClasses(){
    $('#'+this.selectedTextarea.id).addClass(this.selectedTextarea.style.class);
  }



  public eventLoad(){
    this.modelShow.emit(true);
  }
}
