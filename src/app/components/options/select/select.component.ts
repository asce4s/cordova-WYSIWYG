import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Select} from "../../../interfaces/select";
import {SelectService} from "../../../services/select.service";

import * as $ from 'jquery';
@Component({
  selector: 'select-options',
  templateUrl: './select.component.html',
  inputs:['selectedSelect'],




})
export class SelectComponent implements OnInit {

  constructor(private _selectService:SelectService) { }

  ngOnInit() {
  }

  private selectedSelect: Select;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#selectStyles").html('<style>' +
        this._selectService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public addClasses(){
    $('#'+this.selectedSelect.id).addClass(this.selectedSelect.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }
}
