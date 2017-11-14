import {Injectable} from '@angular/core';
import {Select} from "../interfaces/select";
import {SELECT} from "../data/select-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class SelectService {

    constructor() {
    }

    add(select: Select) {
        Promise.resolve(SELECT).then((selectx: Select[]) => selectx.push(select))
    }

    get(id) {
        return SELECT.find(select => select.id == id);
    }

    getAll() {
        return Promise.resolve(SELECT);
    }

    getStyles() {
        let res = "";
        SELECT.forEach((select: Select) => {
            //res=button
            res += '#' + select.id + '{' +

                'width:' + select.style.width + ';' +
                'height:' + select.style.height + ';' +
                'text-align:'+select.text.align+';'+
                'color:'+select.text.color+';'+
                'font-size:'+select.text.size+';'+
                'padding:'+select.style.padding+';'+
                'margin:'+select.style.margin+';'

            '}'
        })

        return res;
    }

    getScripts(){
        let res = "";

        SELECT.forEach((i: Select) => {
            if(i.script){
                res+=i.script;
            }else{
                res="";
            }
        })

        return res;

    }


}
