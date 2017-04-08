import {Injectable} from '@angular/core';
import {Paragraph} from "../interfaces/paragraph";
import {PARAGRAPH} from "../data/paragraph-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class ParagraphService {

    constructor() {
    }

    add(paragraph: Paragraph) {
        Promise.resolve(PARAGRAPH).then((paragraphx: Paragraph[]) => paragraphx.push(paragraph))
    }

    get(id) {
        return PARAGRAPH.find(paragraph => paragraph.id == id);
    }

    getAll() {
        return Promise.resolve(PARAGRAPH);
    }

    getStyles() {
        let res = "";
        PARAGRAPH.forEach((paragraph: Paragraph) => {

            res += '#' + paragraph.id + '{' +

                'width:' + paragraph.style.width + ';' +
                'height:' + paragraph.style.height + ';' +
                'text-align:'+paragraph.text.align+';'+
                'line-height:'+paragraph.text.lineHeight+';'+
                'color:'+paragraph.text.color+';'+
                'font-size:'+paragraph.text.size+';'+
                'padding:'+paragraph.style.padding+';'+
                'margin:'+paragraph.style.margin+';'+
                'overflow:'+paragraph.style.overflow+';'+
                'border:'+paragraph.style.borderThickness+' solid '+paragraph.style.borderColor+';'+

            '}'
        })

        return res;
    }


}
