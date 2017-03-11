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


                'background:'+navbar.style.backgroundr+';'+
                'margin:'+navbar.style.margin+';'+
                'text-align:'+navbar.text.align+';'+


            '}'+
                '#' +navbar.id+' .navigation-bar__center{' +
                'color:' + navbar.text.color + ';' +
                'font-size:'+navbar.text.size+';'+
                '}'+

              '#' +navbar.id+' .navigation-bar__left .toolbar-button--quiet{' +
              'color:' + navbar.text.iconColor + ';' +
              '}'
              +

              '#' +navbar.id+' .navigation-bar__right .toolbar-button--quiet{' +
              'color:' + navbar.text.labelColor + ';' +
              '}'
        })

        return res;
    }


}
