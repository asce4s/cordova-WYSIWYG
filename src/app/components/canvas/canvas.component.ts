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
import {Checkbox} from "../../interfaces/checkbox";
import {CheckboxService} from "../../services/checkbox.service";
import {Radio} from "../../interfaces/Radio";
import {RadioService} from "../../services/radio.service";


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ElementProviderService,
    ButtonService,
    SwitchService,
    CheckboxService,
    RadioService],


})
export class CanvasComponent implements OnInit {

  private skin;
  private device = "Android";
  private components;
  private componentSprite;

  private selectedButton: Button;
  private selectedSwitch: Switch;
  private selectedCheckbox: Checkbox;
  private selectedRadio:Radio;

  text: string;
  @ViewChild('lgModal') public lgModel: ModalDirective;

  constructor(private dragulaService: DragulaService,
              private _elRef: ElementRef,
              private _elprovider: ElementProviderService,
              private _buttonService: ButtonService,
              private _switchService: SwitchService,
              private _checkboxService: CheckboxService,
              private _radioService: RadioService) {


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

        (id) => {
          let el = $("#" + id);
          let defaults: Switch = {
            id: id,
            text: {
              text: el.find('.list__item__center').html(),
              color: el.find('.list__item__center').css('color'),
              size: el.find('.list__item__center').css('font-size')
            },
            style: {
              background: el.css("background-color"),
              padding: el.css('padding'),
              margin: el.css('margin'),
              switchBg: el.find(".switch__toggle").css('background-color'),
              borderColor: el.css('border-color'),
              borderThickness: el.css('border-width'),
              class: ""
            }
          }
          this.toFalse();
          this._switchService.add(defaults);
          this.selectedSwitch = defaults;

        },

        (event) => {

          this.toFalse();
          console.log(event.toElement.offsetParent.id);
          this.selectedSwitch = this._switchService.get(event.toElement.offsetParent.id);
          this.text=this.selectedButton.script;
        })


    }

    if (key == "button") {

      this.genElement(value[1], this._elprovider.getButton(),

        (id) => {

          let el = $("#" + id);
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
              width: el.css('width'),
              height: el.css('height'),
              background: el.css('background-color'),
              padding: el.css('padding'),
              margin: el.css('margin'),
              radius: el.css('border-radius'),
              borderColor: el.css('border-color'),
              borderThickness: el.css('border-width'),
              class: ""

            },
            type: "default",
            script: "var btn_" + id + " = $('#" + id + "');"
          }

          this.toFalse();
          this._buttonService.add(defaults);
          this.selectedButton = defaults;
          this.text = defaults.script;

        },

        (event) => {

          this.toFalse();
          this.selectedButton = this._buttonService.get(event.toElement.id);
          this.text = this.selectedButton.script;

        })
    }

    if (key == "checkbox") {
      this.genElement(value[1], this._elprovider.getCheckBox(),

        (id) => {
          let el = $("#" + id);
          let defaults: Checkbox = {
            id: id,
            text: {
              text: el.find('.checkbox-label').html(),
              size: el.find('.checkbox-label').css('font-size'),
              align: "center",
              color: el.find('.checkbox-label').css('color')
            },
            style: {
              padding: el.css('padding'),
              margin: el.css('margin'),
              color: 'rgba(24,103,194,0.81)',
              class: ""

            },
            script: "var btn_" + id + " = $('#" + id + "');"
          }

          this.toFalse();
          this._checkboxService.add(defaults);
          this.selectedCheckbox = defaults;
          this.text = defaults.script;


        },
        (event) => {
        console.log(event);
          this.toFalse();
          this.selectedCheckbox=this._checkboxService.get(event.toElement.offsetParent.id);
          this.text=this.selectedCheckbox.script;

        }
      );
    }

    if (key == "radio") {
      this.genElement(value[1], this._elprovider.getRadioButton(),

        (id) => {
          let el = $("#" + id);
          let defaults: Radio = {
            id: id,
            group:el.find('.radio-button__input').attr('name'),
            text: {
              text: el.find('.radio-label').html(),
              size: el.find('.radio-label').css('font-size'),
              align: "center",
              color: el.find('.radio-label').css('color')
            },
            style: {
              padding: el.css('padding'),
              margin: el.css('margin'),
              color: 'rgba(24,103,194,0.81)',
              class: ""

            },
            script: "var btn_" + id + " = $('#" + id + "');"
          }

          this.toFalse();
          this._radioService.add(defaults);
          this.selectedRadio = defaults;
          this.text = defaults.script;


        },
        (event) => {

        console.log(event);
          this.toFalse();
          this.selectedRadio=this._radioService.get(event.toElement.offsetParent.id);
          this.text=this.selectedRadio.script;

        }
      );
    }

    if (key == "navbar") {
      this.genElement(value[1], this._elprovider.getNavigationBarItem(),


        (id) => {


        },
        (event) => {


        }
      );
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

  public showEventLoader(event) {
    console.log(event);
    if (event) {
      this.lgModel.show();
    }
  }

  private rgbToHex(rgb) {
    return '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
  }

  private toFalse() {
    this.selectedButton = null;
    this.selectedSwitch = null;
    this.selectedCheckbox=null;
    this.selectedRadio=null;
  }

}
