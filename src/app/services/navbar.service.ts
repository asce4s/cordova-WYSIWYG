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
        return NAVBAR.find(navbarx => navbarx.id == id);
    }

    getAll() {
        return Promise.resolve(NAVBAR);
    }

    getStyles() {
        let res = "";
        NAVBAR.forEach((navbarx: Navbar) => {
            //res=button
            res += '#' + navbarx.id + '{' +

                'text-align:'+navbarx.text.align+';'+
                'color:'+navbarx.text.color+';'+
                'font-size:'+navbarx.text.size+';'+
                'background'+navbarx.style.backgroundr+';'+
                'margin:'+navbarx.style.margin+';'+


            '}'
        })

        return res;
    }


}
