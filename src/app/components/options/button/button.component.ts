import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Button} from "../../../interfaces/button";
import {ButtonService} from "../../../services/button.service";

import * as $ from 'jquery';
@Component({
  selector: 'button-options',
  templateUrl: './button.component.html',
  inputs:['selectedButton'],




})
export class ButtonComponent implements OnInit {

  constructor(private _buttonService:ButtonService) { }

  ngOnInit() {
  }

  private selectedButton: Button;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#styles").html('<style>' +
      this._buttonService.getStyles()+
      '</style>');
    this.addClasses();
  }

  public setButtonText(){
    $('#'+this.selectedButton.id).html(this.selectedButton.text.text);
  }

  public addClasses(){
    $('#'+this.selectedButton.id).addClass(this.selectedButton.style.class);
  }

  public addButtonType(){
    let type=this.selectedButton.type;
    if(type!="default")
      $('#'+this.selectedButton.id).addClass(type)
    else
      $('#'+this.selectedButton.id).removeClass("button--material")
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }
}
