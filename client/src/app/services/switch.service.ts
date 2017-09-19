import {Injectable} from '@angular/core';
import {Button} from "../interfaces/button";
import {BUTTON} from "../data/button-data";
import {forEach} from "@angular/router/src/utils/collection";
import {SWITCH} from "../data/switch-data";
import {Switch} from "../interfaces/switch";


@Injectable()
export class SwitchService {

  constructor() {
  }

  add(swtch: Switch) {
    Promise.resolve(SWITCH).then((switchx: Switch[]) => switchx.push(swtch))
  }

  get(id) {
    return SWITCH.find(switchx => switchx.id == id);
  }

  getAll() {
    return Promise.resolve(SWITCH);
  }

  getStyles() {
    let res = "";
    SWITCH.forEach((switchx: Switch) => {
      //res=button
      res += '#' + switchx.id + '{' +
        'background:' + switchx.style.background + ';' +
        'padding:'+switchx.style.padding+';'+
        'margin:'+switchx.style.margin+';'+
        'border-top:'+switchx.style.borderThickness+' solid '+switchx.style.borderColor+';'+
        'border-bottom:'+switchx.style.borderThickness+' solid '+switchx.style.borderColor+';'+

      '}' +
      '#' +switchx.id+' input:checked + .switch__toggle{' +
        'background:' + switchx.style.switchBg + ';' +
         'box-shadow: inset 0 0 0 2px '+switchx.style.switchBg+';'+
      '}'+
      '#' +switchx.id+' .list__item__center{' +
      'color:' + switchx.text.color + ';' +
      'font-size:'+switchx.text.size+';'+
      '}'

    })


    return res;
  }

  /*getScripts(){
    let res = "";

    SWITCH.forEach((i: Switch) => {
      if(i.script){
        res+=i.script;
      }else{
        res="";
      }
    })

    return res;

  }*/

}
