import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Map} from "../../../interfaces/map";
import {MapService} from "../../../services/map.service";

import * as $ from 'jquery';
@Component({
  selector: 'map-options',
  templateUrl: './map.component.html',
  inputs:['selectedMap'],




})
export class MapComponent implements OnInit {

  constructor(private _mapService:MapService) { }

  ngOnInit() {
  }

  private selectedMap: Map;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();


  public formChange(){
    $("#mapStyles").html('<style>' +
        this._mapService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public setMapText(){
    $('#'+this.selectedMap.id).html(this.selectedMap.code);
  }


  public addClasses(){
    $('#'+this.selectedMap.id).addClass(this.selectedMap.style.class);
  }



  public eventLoad(){
    this.modelShow.emit(true);
  }
}
