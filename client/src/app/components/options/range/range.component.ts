import {Component, OnInit,  EventEmitter, Output} from '@angular/core';
import {RangeService} from "../../../services/range.service";
import * as $ from 'jquery';
import {Range} from "../../../interfaces/range";

@Component({
  selector: 'range-options',
  templateUrl: './range.component.html',
  inputs:['selectedRange'],
})
export class RangeComponent implements OnInit {

  constructor(private _rangeService:RangeService) { }

  private selectedRange:Range;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  public formChange(){
    $("#rangeStyles").html('<style>' +
        this._rangeService.getStyles()+
        '</style>');
    this.addClasses();
  }



  public addClasses(){
    $('#'+this.selectedRange.id).addClass(this.selectedRange.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }

}
