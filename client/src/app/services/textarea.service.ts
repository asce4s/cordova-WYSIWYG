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
        return TEXTAREA.find(textareax => textareax.id == id);
    }

    getAll() {
        return Promise.resolve(TEXTAREA);
    }

    getStyles() {
        let res = "";
        TEXTAREA.forEach((textareax: Textarea) => {
            //res=button
            res += '#' +textareax.id + '{' +
                'width:' + textareax.style.width + ';' +
                'height:' + textareax.style.height + ';' +
                'text-align:'+textareax.text.align+';'+
                'color:'+textareax.text.color+';'+
                'font-size:'+textareax.text.size+';'+
                'padding:'+textareax.style.padding+';'+
                'margin:'+textareax.style.margin+';'+
                'background-color:'+textareax.style.color+';'+
                'border:'+textareax.style.borderThickness+' solid '+textareax.style.borderColor+';'

            '}'
        })

        return res;
    }


}
