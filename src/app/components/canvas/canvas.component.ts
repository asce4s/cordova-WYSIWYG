import {Component, OnInit, Renderer, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import {ElementProviderService} from "../../services/element-provider.service";
import {Button} from "../../interfaces/button";
import {BUTTON} from "../../data-containers/button-data";



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ElementProviderService],

})
export class CanvasComponent implements OnInit {

  private skin;
  private device = "Android";
  public selectedButton:Button={
    id:""
  };


  constructor(private dragulaService: DragulaService, private _elRef: ElementRef, private _elprovider: ElementProviderService) {
    dragulaService.setOptions('first-bag', {
      removeOnSpill: true,
      copy: function (el,handle) {
        return el.localName=="fa";
      },
      copySortSource: true,
    });

    
   dragulaService.drop.subscribe((value) => {
        this.getOptions(value);

    });



  }


  ngOnInit() {
    this.skin = require('../../../assets/img/android-skin.png');
    let containerHeight = $('#elements').innerHeight();
    $('#pages,#components').height(containerHeight / 2);



  }


  skinChange() {
    if (this.device == "Android") {
      this.skin = require('../../../assets/img/android-skin.png');
    } else {
      this.skin = require('../../../assets/img/iphone-skin.png');
    }
  }

  private getOptions(value) {

    let key = value[1].accessKey;
    if (key == "switch") {
      /*this.genElement(value[1],this._elprovider.getSwitch(),function(){

      })*/
    }

    if (key == "button") {

      this.genElement(value[1],this._elprovider.getButton(),BUTTON ,(event)=> {

        var x:Button={
          id:event.toElement.id,
        }
        this.selectedButton=x;
        //console.log(event)
      })
    }






  }

  private genElement(rElement,nElement,dataArray,func){
    let newEl = $(nElement);
    let id = this.genID();
    if(rElement.localName=="fa") {

      newEl.attr('id', id);
      $(rElement).replaceWith(newEl);

      dataArray.push({id: id});
      this._elRef.nativeElement.querySelector('#'+id).addEventListener('click',func);
    }else {
      this._elRef.nativeElement.querySelector('#' + rElement.id).removeEventListener('click');
      console.log("dsfds");
      this._elRef.nativeElement.querySelector('#'+ rElement.id).addEventListener('click',func);
    }

  }


  private genID() {

    let length = 10;
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

}
