import {Injectable} from '@angular/core';
import {Heading} from "../interfaces/heading";
import {HEADING} from "../data/heading-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class HeadingService {

    constructor() {
    }

    add(heading: Heading) {
        Promise.resolve(HEADING).then((headingx: Heading[]) => headingx.push(heading))
    }

    get(id) {
        return HEADING.find(heading => heading.id == id);
    }

    getAll() {
        return Promise.resolve(HEADING);
    }

    getStyles() {
        let res = "";
        HEADING.forEach((heading: Heading) => {

            res += '#' + heading.id + '{' +

                'width:' + heading.style.width + ';' +
                'height:' + heading.style.height + ';' +
                'text-align:'+heading.text.align+';'+
                'line-height:'+heading.text.lineHeight+';'+
                'color:'+heading.text.color+';'+
                'font-size:'+heading.text.size+';'+
                'padding:'+heading.style.padding+';'+
                'margin:'+heading.style.margin+';'+
                'border:'+heading.style.borderThickness+' solid '+heading.style.borderColor+';'+

                '}'
        })

        return res;
    }

    getScripts(){
        let res = "";

        HEADING.forEach((i: Heading) => {
            if(i.script){
                res+=i.script;
            }else{
                res="";
            }
        })

        return res;

    }

}
