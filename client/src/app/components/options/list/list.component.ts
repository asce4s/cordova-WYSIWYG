import {Component, OnInit,  EventEmitter, Output} from '@angular/core';
import {ListService} from "../../../services/list.service";
import * as $ from 'jquery';
import {List} from "../../../interfaces/list";

@Component({
  selector: 'list-options',
  templateUrl: './list.component.html',
  inputs:['selectedList'],
})
export class ListComponent implements OnInit {

  constructor(private _listService:ListService) { }

  private selectedList:List;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  public formChange(){
    $("#listStyles").html('<style>' +
        this._listService.getStyles()+
        '</style>');
    this.addClasses();
  }

 // public setListText(){
   // $('#'+this.selectedList.id+" .list__item__cente").html(this.selectedList.text.text);
  //}

  public addClasses(){
    $('#'+this.selectedList.id).addClass(this.selectedList.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }


  public setItems(){
    let items = this.selectedList.items.split('\n');
    let el=``;
    items.forEach((item)=>{
      el+=`<li class="list__item" >
                <div class="list__item__center">`+item+`</div>
              </li>`
    })

    $("#"+this.selectedList.id).html(el)
  }




}
