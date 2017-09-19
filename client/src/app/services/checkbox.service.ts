import {Injectable} from '@angular/core';
import {Checkbox} from "../interfaces/checkbox";
import {CHECKBOX} from "../data/checkbox-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class CheckboxService {

    constructor() {
    }

    add(checkbox: Checkbox) {
        Promise.resolve(CHECKBOX).then((checkboxs: Checkbox[]) => checkboxs.push(checkbox))
    }

    get(id) {
        return CHECKBOX.find(checkbox => checkbox.id == id);
    }

    getAll() {
        return Promise.resolve(CHECKBOX);
    }

    getStyles() {
        let res = "";
        CHECKBOX.forEach((checkbox: Checkbox) => {

            res += '#' + checkbox.id + '{' +

                'text-align:'+checkbox.text.align+';'+
                'color:'+checkbox.text.color+';'+
                'font-size:'+checkbox.text.size+';'+
                'padding:'+checkbox.style.padding+';'+
                'margin:'+checkbox.style.margin+';'+


            '}' +
             '#'+checkbox.id+ ' .checkbox__input:checked + .checkbox__checkmark:before{' +
          'background:'+checkbox.style.color+';'+
          'border: 1px solid '+checkbox.style.color+';' +
          '}'+
          '#'+checkbox.id+ ' .checkbox__checkmark:before{' +
          'border: 1px solid '+checkbox.style.color+';' +
          '}'
        })

        return res;
    }

    getScripts(){
        let res = "";

        CHECKBOX.forEach((i: Checkbox) => {
            if(i.script){
                res+=i.script;
            }else{
                res="";
            }
        })

        return res;

    }


}
