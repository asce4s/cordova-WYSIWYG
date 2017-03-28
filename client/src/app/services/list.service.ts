import {Injectable} from '@angular/core';
import {List} from "../interfaces/list";
import {LIST} from "../data/list-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class ListService {

    constructor() {
    }

    add(list: List) {
        Promise.resolve(LIST).then((listx: List[]) => listx.push(list))
    }

    get(id) {
        return LIST.find(list => list.id == id);
    }

    getAll() {
        return Promise.resolve(LIST);
    }

    getStyles() {
        let res = "";
        LIST.forEach((list: List) => {
            //res=button
            res += '#'+list.id+'{'+
                'border-radius:' + list.style.radius + ';' +
                'padding:'+list.style.padding+';'+
                'margin:'+list.style.margin+';'+
                'border:'+list.style.borderThickness+' solid '+list.style.borderColor+';'+

                '}'+

                '#'+list.id+' .list__item{'+
                'background-color:'+list.style.background+';'+
                'width:'+list.style.width+';'+
                'height:'+list.style.height+';'+
                'padding:'+list.style.listItemPadding+';'+
                'margin:'+list.style.listItemMargin+';'+
                'color:'+list.style.listItemBackground+';'+

                '}'+


                '#'+list.id+' .list__item__center{'+
                '-webkit-background-size: 100% '+list.style.listItemBorderThickness+';'+
                'background-image: linear-gradient(90deg,'+list.style.listItemBorderColor+','+ list.style.listItemBorderColor+ '50%);'+

                '}'

        })

        return res;
    }


}
