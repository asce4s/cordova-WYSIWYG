import {Injectable} from '@angular/core';
import {Textarea} from "../interfaces/textarea";
import {TEXTAREA} from "../data/textarea-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class TextareaService {

    constructor() {
    }

    add(textarea: Textarea) {
        Promise.resolve(TEXTAREA).then((textareax: Textarea[]) => textareax.push(textarea))
    }

    get(id) {
        return TEXTAREA.find(textarea => textarea.id == id);
    }

    getAll() {
        return Promise.resolve(TEXTAREA);
    }

    getStyles() {
        let res = "";
        TEXTAREA.forEach((textarea: Textarea) => {
            //res=button
            res += '#' + textarea.id + '{' +
                'color:' + textarea.style.color + ';' +
                'width:' + textarea.style.width + ';' +
                'height:' + textarea.style.height + ';' +
                'text-align:'+textarea.text.align+';'+
                'color:'+textarea.text.color+';'+
                'font-size:'+textarea.text.size+';'+
                'padding:'+textarea.style.padding+';'+
                'margin:'+textarea.style.margin+';'+
                'border:'+textarea.style.borderThickness+' solid '+textarea.style.borderColor+';'

            '}'
        })

        return res;
    }


}
