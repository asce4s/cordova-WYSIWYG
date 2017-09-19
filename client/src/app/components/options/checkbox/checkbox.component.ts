import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Checkbox} from "../../../interfaces/checkbox";
import {CheckboxService} from "../../../services/checkbox.service";
import * as $ from 'jquery';

@Component({
  selector: 'checkbox-options',
  templateUrl: './checkbox.component.html',
  inputs:['selectedCheckbox'],
})
export class CheckboxComponent implements OnInit {

  constructor(private _checkboxService: CheckboxService) { }

  ngOnInit() {

  }

  private selectedCheckbox:Checkbox;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();

  public formChange(){
    $("#checkboxStyles").html('<style>' +
      this._checkboxService.getStyles()+
      '</style>');
    this.addClasses();
  }

  public addClasses(){
    $('#'+this.selectedCheckbox.id).addClass(this.selectedCheckbox.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }

  public setCheckboxText(){
    $('#'+this.selectedCheckbox.id+" .checkbox-label").html(this.selectedCheckbox.text.text);
  }

  public addCheckboxType(){

  }
}
