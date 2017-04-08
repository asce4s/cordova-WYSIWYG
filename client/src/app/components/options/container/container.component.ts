import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Container} from "../../../interfaces/container";
import {ContainerService} from "../../../services/container.service";

import * as $ from 'jquery';
@Component({
  selector: 'container-options',
  templateUrl: './container.component.html',
  inputs:['selectedContainer'],




})
export class ContainerComponent implements OnInit {

  constructor(private _containerService:ContainerService) { }

  ngOnInit() {
  }

  private selectedContainer: Container;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#containerStyles").html('<style>' +
        this._containerService.getStyles()+
        '</style>');
    this.addClasses();
  }



  public addClasses(){
    $('#'+this.selectedContainer.id).addClass(this.selectedContainer.style.class);
  }


  public eventLoad(){
    this.modelShow.emit(true);
  }
}
