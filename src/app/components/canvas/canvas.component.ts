import {Component, OnInit, Renderer, ElementRef, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import {ElementProviderService} from "../../services/element-provider.service";
import {Button} from "../../interfaces/button";
import {COMPONENTS} from "../../data/component-data";
import {ButtonService} from "../../services/button.service";
import {ModalDirective} from "ng2-bootstrap";
import {Switch} from "../../interfaces/switch";
import {SwitchService} from "../../services/switch.service";



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ElementProviderService, ButtonService,SwitchService ],



})
export class CanvasComponent implements OnInit {

  private skin;
  private device = "Android";
  private components;
  private componentSprite;

  private selectedButton: Button;
  private selectedSwitch: Switch;


  text:string ;
  @ViewChild('lgModal') public lgModel:ModalDirective;

  constructor(private dragulaService: DragulaService,
              private _elRef: ElementRef,
              private _elprovider: ElementProviderService,
              private _buttonService: ButtonService,
              private _switchService: SwitchService,

  ) {


    dragulaService.setOptions('first-bag', {
      revertOnSpill: true,
      copy: function (el, handle) {
        return el.localName == "li";
      },
      copySortSource: true,
      accepts: function (el, handle) {
        console.log(handle.id);
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
        this.genElement(value[1], this._elprovider.getSwitchInList(),

          (id)=>{
            let el=$("#"+id);
            let defaults:Switch={
              id:id,
              text:{
                text:el.find('.list__item__center').html(),
                color:el.find('.list__item__center').css('color'),
                size:el.find('.list__item__center').css('font-size')
              },
              style:{
                background:el.css("background-color"),
                padding:el.css('padding'),
                margin:el.css('margin'),
                switchBg: el.find(".switch__toggle").css('background-color'),
                borderColor:el.css('border-color'),
                borderThickness:el.css('border-width'),
                class:""
              }
            }

            this._switchService.add(defaults);
            this.selectedSwitch=defaults;

          },

          (event) =>{
            console.log(event.toElement.offsetParent.id);
            this.selectedSwitch= this._switchService.get(event.toElement.offsetParent.id);
            //this.text=this.selectedButton.script;
          })



    }


    if (key == "button") {

      this.genElement(value[1], this._elprovider.getButton(),

        (id) => {

          let el=$("#"+id);
          let defaults: Button = {
            id: id,
            link: "#",
            text: {
              text: el.html(),
              size: el.css('font-size'),
              align: "center",
              color: el.css('color')
            },
            style: {
              width:el.css('width'),
              height: el.css('height'),
              background: el.css('background-color'),
              padding:el.css('padding'),
              margin:el.css('margin'),
              radius: el.css('border-radius'),
              borderColor:el.css('border-color'),
              borderThickness:el.css('border-width'),
              class: ""

            },
            type:"default",
            script:"var btn_"+id+" = $('#"+id+"');"
          }

          this._buttonService.add(defaults);
          this.selectedButton=defaults;
          this.text=defaults.script;

        },

        (event) => {

          this.selectedButton = this._buttonService.get(event.toElement.id);
          this.text=this.selectedButton.script;

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

  public showEventLoader(event){
    console.log(event);
    if(event){
       this.lgModel.show();
    }
  }

  private rgbToHex(rgb){
    return '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
  }

}
