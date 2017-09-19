import {Component, OnInit,  EventEmitter, Output} from '@angular/core';
import {SwitchService} from "../../../services/switch.service";
import * as $ from 'jquery';
import {Switch} from "../../../interfaces/switch";

@Component({
  selector: 'switch-options',
  templateUrl: './switch.component.html',
  inputs:['selectedSwitch'],
})
export class SwitchComponent implements OnInit {

  constructor(private _switchService:SwitchService) { }

  private selectedSwitch:Switch;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  public formChange(){
    $("#switchStyles").html('<style>' +
      this._switchService.getStyles()+
      '</style>');
    this.addClasses();
  }

  public setSwitchText(){
    $('#'+this.selectedSwitch.id+" .list__item__center").html(this.selectedSwitch.text.text);
  }

  public addClasses(){
    $('#'+this.selectedSwitch.id).addClass(this.selectedSwitch.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }

}
