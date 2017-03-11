import {Injectable} from '@angular/core';
import {Input} from "../interfaces/input";
import {INPUT} from "../data/input-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class InputService {

    constructor() {
    }

    add(input: Input) {
        Promise.resolve(INPUT).then((inputx: Input[]) => inputx.push(input))
    }

    get(id) {
        return INPUT.find(input => input.id == id);
    }

    getAll() {
        return Promise.resolve(INPUT);
    }

    getStyles() {
        let res = "";
        INPUT.forEach((input: Input) => {
            //res=button
            res += '#' +input.id + '{' +
                'width:' + input.style.width + ';' +
                'height:' + input.style.height + ';' +
                'text-align:'+input.text.align+';'+
                'color:'+input.text.color+';'+
                'font-size:'+input.text.size+';'+
                'padding:'+input.style.padding+';'+
                'margin:'+input.style.margin+';'+
                'border:'+input.style.borderThickness+' solid '+input.style.borderColor+';'

            '}'
        })

        return res;
    }


}
