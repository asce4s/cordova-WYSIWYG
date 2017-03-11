import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Input} from "../../../interfaces/input";
import {InputService} from "../../../services/input.service";
import * as $ from 'jquery';

@Component({
  selector: 'input-options',
  templateUrl: './input.component.html',
  inputs:['selectedInput'],
})
export class InputComponent implements OnInit {

  constructor(private _inputService: InputService) { }

  ngOnInit() {

  }

  private selectedInput:Input;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();

  public formChange(){
    $("#inputStyles").html('<style>' +
        this._inputService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public addClasses(){
    $('#'+this.selectedInput.id).addClass(this.selectedInput.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }

  public setInputText(){
    $('#'+this.selectedInput.id).html(this.selectedInput.text.text);
  }


}
