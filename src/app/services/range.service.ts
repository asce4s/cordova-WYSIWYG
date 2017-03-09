import {Injectable} from '@angular/core';
import {Range} from "../interfaces/range";
import {RANGE} from "../data/range-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class RangeService {

    constructor() {
    }

    add(range: Range) {
        Promise.resolve(RANGE).then((rangex: Range[]) => rangex.push(range))
    }

    get(id) {
        return RANGE.find(range => range.id == id);
    }

    getAll() {
        return Promise.resolve(RANGE);
    }

    getStyles() {
        let res = "";
        RANGE.forEach((range: Range) => {
            //res=button
            res += '#' + range.id + '{' +
                'color:' + range.style.color + ';' +
                'width:' + range.style.width + ';' +
                'height:' + range.style.height + ';' +
                'padding:'+range.style.padding+';'+
                'margin:'+range.style.margin+';'+

            '}'
        })

        return res;
    }


}
