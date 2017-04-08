import {Injectable} from '@angular/core';
import {Container} from "../interfaces/container";
import {CONTAINER} from "../data/container-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class ContainerService {

    constructor() {
    }

    add(container: Container) {
        Promise.resolve(CONTAINER).then((conatiners: Container[]) => conatiners.push(container))
    }

    get(id) {
        return CONTAINER.find(container => container.id == id);
    }

    getAll() {
        return Promise.resolve(CONTAINER);
    }

    getStyles() {
        let res = "";
        CONTAINER.forEach((container: Container) => {
            //res=button
            res += '#' + container.id + '{' +

                'width:' + container.style.width + ';' +
                'height:' + container.style.height + ';' +
                'padding:'+container.style.padding+';'+
                'margin:'+container.style.margin+';'+

            '}'
        })

        return res;
    }


}
