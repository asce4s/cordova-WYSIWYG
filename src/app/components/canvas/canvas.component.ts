import {Component, OnInit, Renderer, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import {ElementProviderService} from "../../services/element-provider.service";
import {Button} from "../../interfaces/button";
import {COMPONENTS} from "../../data/component-data";
import {ButtonService} from "../../services/button.service";



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ElementProviderService, ButtonService],


})
export class CanvasComponent implements OnInit {

  private skin;
  private device = "Android";
  private components;
  private componentSprite;

  private selectedButton: Button;



  constructor(private dragulaService: DragulaService,
              private _elRef: ElementRef,
              private _elprovider: ElementProviderService,
              private _buttonService: ButtonService) {


    dragulaService.setOptions('first-bag', {
      revertOnSpill: true,
      copy: function (el, handle) {
        return el.localName == "li";
      },
      copySortSource: true,
      accepts: function (el, handle) {
        return handle.id == "designArea";
      }
    });


    dragulaService.drop.subscribe((value) => {

      this.getOptions(value);


    });


  }




  ngOnInit() {
    this.skin = require('../../../assets/img/android-skin.png');
    this.componentSprite = require('../../../assets/img/components-sprite.png');

    let containerHeight = $('#elements').innerHeight();
    $('#pages,#components').height(containerHeight / 2);

    this.components = COMPONENTS;


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
      //  this.genElement(value[1], this._elprovider.getSwitch(), function () {

      // });
    }

    if (key == "button") {

      this.genElement(value[1], this._elprovider.getButton(),

        (id) => {

          let el=$("#"+id);
          let x: Button = {
            id: id,
            link: "#",
            text: {
              text: el.html(),
              size: el.css('font-size'),
              align: el.css('text-align'),
              color: el.css('color')
            },
            style: {
              width:el.css('width'),
              height: el.css('height'),
              background: el.css('background-color'),
              radius: el.css('border-radius'),
              class: ""

            },
            type:"default"
          }

          this._buttonService.add(x);
          this.selectedButton=x;

        },

        (event) => {
          this.selectedButton = this._buttonService.get(event.toElement.id);


        })
    }


  }

  private genElement(rElement, nElement, elFunc, clickfunc) {
    let newEl = $(nElement);
    let id = this.genID();
    if (rElement.localName == "li") {

      newEl.attr('id', id);
      $(rElement).replaceWith(newEl);

      elFunc(id);


      this._elRef.nativeElement.querySelector('#' + id).addEventListener('click', clickfunc);
    } else {
      this._elRef.nativeElement.querySelector('#' + rElement.id).removeEventListener('click');
      this._elRef.nativeElement.querySelector('#' + rElement.id).addEventListener('click', clickfunc);
    }

  }


  private genID() {

    let length = 10;
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  private rgbToHex(rgb){
    return '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
  }

}
