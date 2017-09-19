import {Injectable} from '@angular/core';
import {Video} from "../interfaces/video";
import {VIDEO} from "../data/video-data";
import {forEach} from "@angular/router/src/utils/collection";


@Injectable()
export class VideoService {

    constructor() {
    }

    add(video: Video) {
        Promise.resolve(VIDEO).then((videox: Video[]) => videox.push(video))
    }

    get(id) {
        return VIDEO.find(video => video.id == id);
    }

    getAll() {
        return Promise.resolve(VIDEO);
    }

    getStyles() {
        let res = "";
        VIDEO.forEach((video: Video) => {
            //res=button
            res += '#' + video.id + '{' +
                'width:' + video.style.width + ';' +
                'height:' + video.style.height + ';' +
                'border-radius:' + video.style.radius + ';' +
                'padding:'+video.style.padding+';'+
                'margin:'+video.style.margin+';'+
                'border:'+video.style.borderThickness+' solid '+video.style.borderColor+';'

            '}'
        })

        return res;
    }


}
