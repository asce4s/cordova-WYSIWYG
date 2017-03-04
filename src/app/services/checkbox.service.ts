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


            '}'
        })

        return res;
    }


}
