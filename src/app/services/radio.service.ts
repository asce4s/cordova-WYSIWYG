import {Injectable} from '@angular/core';
import {Radio} from "../interfaces/Radio";
import {RADIO} from "../data/radio-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class RadioService {

    constructor() {
    }

    add(radio: Radio) {
        Promise.resolve(RADIO).then((radiox: Radio[]) => radiox.push(radio))
    }

    get(id) {
        return RADIO.find(radio => radio.id == id);
    }

    getAll() {
        return Promise.resolve(RADIO);
    }

    getStyles() {
        let res = "";
        RADIO.forEach((radio: Radio) => {
            //res=button
            res += '#' + radio.id + '{' +

                'text-align:'+radio.text.align+';'+
                'color:'+radio.text.color+';'+
                'font-size:'+radio.text.size+';'+
                'padding:'+radio.style.padding+';'+
                'margin:'+radio.style.margin+';'+

            '}' +
            '#' + radio.id + ' .radio-button__checkmark:after{' +
            'border-color:' +radio.style.color
            '}'
        })

        return res;
    }


}
