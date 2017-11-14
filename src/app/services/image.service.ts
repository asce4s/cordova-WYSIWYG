import {Injectable} from '@angular/core';
import {Image} from "../interfaces/image";
import {IMAGE} from "../data/image-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class ImageService {

    constructor() {
    }

    add(image: Image) {
        Promise.resolve(IMAGE).then((imagex: Image[]) => imagex.push(image))
    }

    get(id) {
        return IMAGE.find(image => image.id == id);
    }

    getAll() {
        return Promise.resolve(IMAGE);
    }

    getStyles() {
        let res = "";
        IMAGE.forEach((image: Image) => {

            res += '#' + image.id + '{' +

                'width:' + image.style.width + ';' +
                'height:' + image.style.height + ';' +
                'border-radius:' + image.style.radius + ';' +
                'padding:'+image.style.padding+';'+
                'margin:'+image.style.margin+';'+
                'border:'+image.style.borderThickness+' solid '+image.style.borderColor+';'

            '}'
        })

        return res;
    }

    getScripts(){
        let res = "";

        IMAGE.forEach((i: Image) => {
            if(i.script){
                res+=i.script;
            }else{
                res="";
            }
        })

        return res;

    }


}
