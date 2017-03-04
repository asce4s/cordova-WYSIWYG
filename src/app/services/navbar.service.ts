import {Injectable} from '@angular/core';
import {Navbar} from "../interfaces/navbar";
import {NAVBAR} from "../data/navbar-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class NavbarService {

    constructor() {
    }

    add(navbar: Navbar) {
        Promise.resolve(NAVBAR).then((navbarx: Navbar[]) => navbarx.push(navbar))
    }

    get(id) {
        return NAVBAR.find(navbar => navbar.id == id);
    }

    getAll() {
        return Promise.resolve(NAVBAR);
    }

    getStyles() {
        let res = "";
        NAVBAR.forEach((navbar: Navbar) => {
            //res=button
            res += '#' + navbar.id + '{' +

                'text-align:'+navbar.text.align+';'+
                'color:'+navbar.text.color+';'+
                'font-size:'+navbar.text.size+';'+

                'margin:'+navbar.style.margin+';'+


            '}'
        })

        return res;
    }


}
