import {Injectable} from '@angular/core';
import {Map} from "../interfaces/map";
import {MAP} from "../data/map-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class MapService {

    constructor() {
    }

    add(map: Map) {
        Promise.resolve(MAP).then((mapx: Map[]) => mapx.push(map))
    }

    get(id) {
        return MAP.find(map=> map.id == id);
    }

    getAll() {
        return Promise.resolve(MAP);
    }

    getStyles() {
        let res = "";
        MAP.forEach((map: Map) => {
            //res=button
            res += '#' + map.id + '{' +

                'width:' + map.style.width + ';' +
                'height:' + map.style.height + ';' +
                'padding:'+map.style.padding+';'+
                'margin:'+map.style.margin+';'+

            '}'
        })

        return res;
    }


}
