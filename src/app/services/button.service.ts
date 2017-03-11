import {Injectable} from '@angular/core';
import {Button} from "../interfaces/button";
import {BUTTON} from "../data/button-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class ButtonService {

  constructor() {
  }

  add(button: Button) {
    Promise.resolve(BUTTON).then((buttons: Button[]) => buttons.push(button))
  }

  get(id) {
    return BUTTON.find(button => button.id == id);
  }

  getAll() {
    return Promise.resolve(BUTTON);
  }

  getStyles() {
    let res = "";

    BUTTON.forEach((button: Button) => {
      //res=button
      res += '#' + button.id + '{' +
        'background:' + button.style.background + ';' +
        'width:' + button.style.width + ';' +
        'height:' + button.style.height + ';' +
        'border-radius:' + button.style.radius + ';' +
        'text-align:'+button.text.align+';'+
        'color:'+button.text.color+';'+
        'font-size:'+button.text.size+';'+
        'padding:'+button.style.padding+';'+
        'margin:'+button.style.margin+';'+
          'border:'+button.style.borderThickness+' solid '+button.style.borderColor+';'+

        '}'
    })

    return res;
  }


}
