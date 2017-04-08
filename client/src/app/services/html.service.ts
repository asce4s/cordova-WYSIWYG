import {Injectable} from '@angular/core';
import {Html} from "../interfaces/html";
import {HTML} from "../data/html-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class HtmlService {

    constructor() {
    }

    add(html: Html) {
        Promise.resolve(HTML).then((htmlx: Html[]) => htmlx.push(html))
    }

    get(id) {
        return HTML.find(html => html.id == id);
    }

    getAll() {
        return Promise.resolve(HTML);
    }

    getStyles() {
        let res = "";
        HTML.forEach((html: Html) => {
            //res=button
            res += '#' + html.id + '{' +
                'color:' + html.style.color + ';' +
                'width:' + html.style.width + ';' +
                'height:' + html.style.height + ';' +
                'text-align:'+html.text.align+';'+
                'color:'+html.text.color+';'+
                'font-size:'+html.text.size+';'+
                'padding:'+html.style.padding+';'+
                'margin:'+html.style.margin+';'+
                'border:'+html.style.borderThickness+' solid '+html.style.borderColor+';'

            '}'
        })

        return res;
    }


}
