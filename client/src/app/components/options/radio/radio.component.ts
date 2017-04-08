import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Radio} from "../../../interfaces/Radio";
import {RadioService} from "../../../services/radio.service";
import * as $ from 'jquery';

@Component({
  selector: 'radio-options',
  templateUrl: './radio.component.html',
  inputs:['selectedRadio'],
})
export class RadioComponent implements OnInit {

  constructor( private _radioService: RadioService) { }

  ngOnInit() {
  }
  private selectedRadio:Radio;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();

  public formChange(){
    $("#radioStyles").html('<style>' +
      this._radioService.getStyles()+
      '</style>');
    this.addClasses();
  }

  public setGroup(){
    $('#'+this.selectedRadio.id+' .radio-button__input').attr('name',this.selectedRadio.group)
  }
  public addClasses(){
    $('#'+this.selectedRadio.id).addClass(this.selectedRadio.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }

  public setRadioText(){
    $('#'+this.selectedRadio.id+" .radio-label").html(this.selectedRadio.text.text);
  }

  public addRadioType(){

  }

}
