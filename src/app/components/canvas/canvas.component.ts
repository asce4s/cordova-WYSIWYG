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
import {Navbar} from "../../interfaces/navbar";
import {NavbarService} from "../../services/navbar.service";
import {Range} from "../../interfaces/range";
import {RangeService} from "../../services/range.service";
import {ActivatedRoute} from "@angular/router";
import {AngularFire} from "angularfire2";
import {BUTTON} from "../../data/button-data";

import {Input} from "../../interfaces/input";
import {InputService} from "../../services/input.service";
import {List} from "../../interfaces/list";
import {ListService} from "../../services/list.service";
import {Textarea} from "../../interfaces/textarea";
import {TextareaService} from "../../services/textarea.service";
import {Html} from "../../interfaces/html";
import {HtmlService} from "../../services/html.service";
import {Container} from "../../interfaces/container";
import {ContainerService} from "../../services/container.service";
import {Paragraph} from "../../interfaces/paragraph";
import {ParagraphService} from "../../services/paragraph.service";
import {Heading} from "../../interfaces/heading";
import {HeadingService} from "../../services/heading.service";



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [ElementProviderService,
    ButtonService,
    SwitchService,
    CheckboxService,
    NavbarService,
      ParagraphService,
      RangeService,
      InputService,
      TextareaService,
      HtmlService,
      HeadingService,
      ContainerService,
      ListService,
    RadioService],


})
export class CanvasComponent implements OnInit {

  private skin;
  private device = "Android";
  private components;
  private componentSprite;
  private db: any;
  private id: any;

  private selectedButton: Button;
  private selectedSwitch: Switch;
  private selectedCheckbox: Checkbox;
  private selectedRadio:Radio;
  private selectedList:List;
  private selectedContainer;
  private selectedHtml:Html;
  private selectedHeading:Heading;
  private selectedTextarea:Textarea;
  private selectedRange:Range;
  private selectedInput:Input;
  private selectedParagraph:Paragraph;
  private selectedNavbar:Navbar;

  text: string;
  @ViewChild('lgModal') public lgModel: ModalDirective;

  constructor(private dragulaService: DragulaService,
              private _elRef: ElementRef,
              private af: AngularFire,
              private route: ActivatedRoute,
              private _elprovider: ElementProviderService,
              private _buttonService: ButtonService,
              private _switchService: SwitchService,
              private _htmlService:HtmlService,
              private _headingService:HeadingService,
              private _paragraphService:ParagraphService,
              private _listService:ListService,
              private _checkboxService: CheckboxService,
              private _navbarService: NavbarService,
              private _inputService: InputService,
              private _containerService:ContainerService,
              private _textareaService:TextareaService,
              private _rangeService: RangeService,
              private _radioService: RadioService) {


    dragulaService.setOptions('first-bag', {
      removeOnSpill: true,
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


    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.db = this.af.database.object('/options/' + this.id);


      this.db.subscribe((item) =>{
        this.loadFirebaseData(item);



      })
    });

    console.log(BUTTON);
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
            let el = $("#" + id);
            let defaults: Navbar = {
              id: id,

              text: {
                text: el.find('.navigation-bar__center').html(),
                size: el.find('.navigation-bar__center').css('font-size'),
                align: "center",
                color: el.find('.navigation-bar__center').css('color'),
                iconColor:el.find('.navigation-bar__left .toolbar-button--quiet').css('color'),
                labelColor:el.find('.navigation-bar__right .toolbar-button--quiet').css('color'),
                labelText:el.find('.navigation-bar__right .toolbar-button--quiet').html(),
              },
              style: {
                margin:el.css('margin'),
               backgroundr:el.find(".navigation-bar").css('background'),
                class:""
              },
              script: "var btn_" + id + " = $('#" + id + "');"

            }

            this.toFalse();
            this._navbarService.add(defaults);
            this.selectedNavbar = defaults;
            this.text = defaults.script;

          },
          (event) => {

            console.log(event);
            this.toFalse();
            this.selectedNavbar=this._navbarService.get($(event.toElement).parent().attr("id"));
            this.text=this.selectedNavbar.script;


          }
      );
    }

    if (key == "range") {

      this.genElement(value[1], this._elprovider.getRange(),


          (id) => {
            let el = $("#" + id);
            let defaults: Range = {
              id: id,

              style: {
                width: el.css('width'),
                height:el.css('height'),
                padding:el.css('padding'),
                margin:el.css('margin'),
                color:el.find('.range').css('background-color'),
                class:""
              },
              script: "var btn_" + id + " = $('#" + id + "');"

            }

            this.toFalse();
            this._rangeService.add(defaults);
            this.selectedRange = defaults;
            this.text = defaults.script;

          },
          (event) => {

            console.log(event);
            this.toFalse();
            this.selectedRange=this._rangeService.get(event.toElement.id);
            this.text=this.selectedRange.script;


          }
      );
    }


    if (key == "input") {

      this.genElement(value[1], this._elprovider.getTextInput(),


          (id) => {
            let el = $("#" + id);
            let defaults: Input = {
              id: id,
              text:{
                text:el.find('.text-input--underbar').html(),
                size:el.find('.text-input--underbar').css('font-size'),
                align:"left",
                color:'rgba(0,0,0,0.81)',
              },
              style:{
                width:el.find('.text-input--underbar').css('width'),
                height:el.find('.text-input--underbar').css('height'),
                padding:el.find('.text-input--underbar').css('padding'),
                margin:el.find('.text-input--underbar').css('margin'),
                borderColor:el.find('.text-input--underbar').css('border-bottom'),
                borderThickness:el.find('.text-input--underbar').css('border-bottom'),
                class:""
              },
              script: "var btn_" + id + " = $('#" + id + "');"

            }

            this.toFalse();
            this._inputService.add(defaults);
            this.selectedInput = defaults;
            this.text = defaults.script;

          },
          (event) => {

            console.log(event);
            this.toFalse();
            this.selectedInput=this._inputService.get(event.toElement.id);
            this.text=this.selectedInput.script;


          }
      );
    }

    if (key == "list") {

   this.genElement(value[1], this._elprovider.getList(),


         (id) => {
            let el = $("#" + id);
            let defaults: List = {
              id: id,
              //items:el.find('').css(''),
              style:{
                width:el.find('.list__item').css('width'),
                height:el.find('.list__item').css('height'),
                radius:el.find('.list').css('border-radius'),
                background:el.find('.list__item').css('background-color'),
                padding:el.find('.list').css('padding'),
                margin:el.find('.list').css('margin'),
                borderColor:el.find('.list').css('border'),
                borderThickness:el.find('.list').css('border'),
                listItemPadding:el.find('.list__item').css('padding'),
                listItemMargin:el.find('.list__item').css('margin'),
                listItemBackground:el.find('.list__item').css('color'),
                listItemBorderColor:el.find('.list__item__center').css('background-image'),
                listItemBorderThickness:el.find('.list__item__center').css('-webkit-background-size'),
                class:""
              },
              script: "var btn_" + id + " = $('#" + id + "');"

            }

            this.toFalse();
            this._listService.add(defaults);
           this.selectedList = defaults;
            this.text = defaults.script;

         },
          (event) => {

            console.log(event);
            this.toFalse();
            this.selectedList=this._listService.get($(event.toElement).parent().parent().attr('id'));
            this.text=this.selectedList.script;


         }
      );
    }



    if (key == "textarea") {

      this.genElement(value[1], this._elprovider.getTextArea(),


          (id) => {
            let el = $("#" + id);
            let defaults: Textarea = {
              id: id,
              text:{
                text:el.find('.textarea').html(),
                size:el.find('.textarea').css('font-size'),
                align:"left",
                color:'rgba(0,0,0,0.81)',
              },
              style:{
                width:el.find('.textarea').css('width'),
                height:el.find('.textarea').css('height'),
                padding:el.find('.textarea').css('padding'),
                margin:el.find('.textarea').css('margin'),
                color:el.find('.textarea').css('background-color'),
                borderColor:el.find('.textarea').css('border'),
                borderThickness:el.find('.textarea').css('border'),
                class:""
              },
              script: "var btn_" + id + " = $('#" + id + "');"

            }

            this.toFalse();
            this._textareaService.add(defaults);
            this.selectedTextarea = defaults;
            this.text = defaults.script;

          },
          (event) => {

            console.log(event);
            this.toFalse();
            this.selectedTextarea=this._textareaService.get(event.toElement.id);
            this.text=this.selectedTextarea.script;


          }
      );
    }


    if (key == "html") {

      this.genElement(value[1], this._elprovider.getHTML(),

          (id) => {

            let el = $("#" + id);
            let defaults: Html = {
              id: id,
              code:el.html(),
              text: {
                text: el.html(),
                size: el.css('font-size'),
                align: "center",
                color: el.css('color')
              },
              style: {
                width: el.css('width'),
                height: el.css('height'),
                color: el.css('background-color'),
                padding: el.css('padding'),
                margin: el.css('margin'),
                borderColor: el.css('border-color'),
                borderThickness: el.css('border-width'),
                class: ""

              },

              script: "var btn_" + id + " = $('#" + id + "');"
            }

            this.toFalse();
            this._htmlService.add(defaults);
            this.selectedHtml = defaults;
            this.text = defaults.script;

          },

          (event) => {

            this.toFalse();
            this.selectedHtml = this._htmlService.get(event.toElement.id);
            this.text = this.selectedHtml.script;

          });
    }

      if (key == "container") {

          this.genElement(value[1], this._elprovider.getContainer(),

              (id) => {

                  let el = $("#" + id);
                  let defaults: Container = {
                      id: id,
                      style: {
                          width: el.find('.container-fluid').css('width'),
                          height: el.find('.container-fluid').css('height'),
                          padding: el.find('.container-fluid').css('padding'),
                          margin: el.find('.container-fluid').css('margin'),
                          class: ""

                      },

                  }

                  this.toFalse();
                  this._containerService.add(defaults);
                  this.selectedContainer = defaults;

              },

              (event) => {

                  this.toFalse();
                  this.selectedContainer = this._containerService.get(event.toElement.id);


              });
      }


      if (key == "paragraph") {

          this.genElement(value[1], this._elprovider.getParagraph(),

              (id) => {

                  let el = $("#" + id);
                  let defaults: Paragraph = {
                      id: id,
                      text: {
                          text: el.html(),
                          size: el.css('font-size'),
                          align: "center",
                          color: el.css('color'),
                          lineHeight:el.css('line-height')
                      },
                      style: {
                          width: el.css('width'),
                          height: el.css('height'),
                          padding: el.css('padding'),
                          margin: el.css('margin'),
                          borderColor: el.css('border-color'),
                          borderThickness: el.css('border-width'),
                          overflow:el.css('overflow'),
                          class: ""

                      },

                      script: "var btn_" + id + " = $('#" + id + "');"
                  }

                  this.toFalse();
                  this._paragraphService.add(defaults);
                  this.selectedParagraph = defaults;
                  this.text = defaults.script;

              },

              (event) => {

                  this.toFalse();
                  this.selectedParagraph = this._paragraphService.get(event.toElement.id);
                  this.text = this.selectedParagraph.script;

              });
      }


      if (key == "heading") {

          this.genElement(value[1], this._elprovider.getHeading(),

              (id) => {

                  let el = $("#" + id);
                  let defaults: Heading = {
                      id: id,
                      text: {
                          text: el.html(),
                          size: el.css('font-size'),
                          align: "center",
                          color: el.css('color'),
                          lineHeight:el.css('line-height')
                      },
                      style: {
                          width: el.css('width'),
                          height: el.css('height'),
                          padding: el.css('padding'),
                          margin: el.css('margin'),
                          borderColor: el.css('border-color'),
                          borderThickness: el.css('border-width'),
                          class: ""

                      },

                      script: "var btn_" + id + " = $('#" + id + "');"
                  }

                  this.toFalse();
                  this._headingService.add(defaults);
                  this.selectedHeading = defaults;
                  this.text = defaults.script;

              },

              (event) => {

                  this.toFalse();
                  this.selectedHeading = this._headingService.get(event.toElement.id);
                  this.text = this.selectedHeading.script;

              });
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

  private toFalse() {
    this.selectedButton = null;
    this.selectedSwitch = null;
    this.selectedCheckbox=null;
    this.selectedRadio=null;
    this.selectedNavbar=null;
    this.selectedRange=null;
    this.selectedInput=null;
    this.selectedList=null;
    this.selectedContainer=null;
    this.selectedHtml=null;
    this.selectedParagraph=null;
    this.selectedHeading=null;

  }


  private loadFirebaseData(item){
    $("#designArea").html(item.design);

    
    if(item.button) {
      item.button.forEach((i, key) => {
        this._buttonService.add(i);
        this._elRef.nativeElement.querySelector('#' + i.id).addEventListener('click', res => {
          this.toFalse();
          this.selectedButton = i;
          this.text = this.selectedButton.script;

        });

      })

    }
    if(item.navbar) {
      item.navbar.forEach((i, key) => {
        this._navbarService.add(i);

        this._elRef.nativeElement.querySelector('#' + i.id).addEventListener('click', res => {
          this.toFalse();
          this.selectedNavbar = i;
          this.text = this.selectedNavbar.script;

        });
      })


    }


  }



}
