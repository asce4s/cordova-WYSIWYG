import { Component, OnInit } from '@angular/core';
import {Button} from "../../../interfaces/button";
import {ButtonService} from "../../../services/button.service";
import * as $ from 'jquery';
@Component({
  selector: 'button-options',
  templateUrl: './button.component.html',
  inputs:['selectedButton']
})
export class ButtonComponent implements OnInit {

  constructor(private _buttonService:ButtonService) { }

  ngOnInit() {
  }

  private selectedButton: Button;

  public formChange(){
    $("#styles").html('<style>' +
      this._buttonService.getStyles()+
      '</style>');

  }

  public setButtonText(){
    $('#'+this.selectedButton.id).html(this.selectedButton.text.text);
  }


}
