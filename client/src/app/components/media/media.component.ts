import {Component, OnInit, NgZone, Inject, EventEmitter, Output} from '@angular/core';
import {TabsetComponent} from 'ng2-bootstrap';
import {NgUploaderOptions} from "ngx-uploader";
import {CoolLocalStorage} from "angular2-cool-storage";

import * as $ from 'jquery';
import {HTTPService} from "../../services/http.service";

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
    providers:[HTTPService]
})
export class MediaComponent implements OnInit {

    options: NgUploaderOptions;
    response: any;
    hasBaseDropZoneOver: boolean;
    private session;
    public max: number = 100;
    public dynamic: number = 0;
    images;
    baseURL;
    selectedImgURL;
    details:string="";

    constructor(
        @Inject(NgZone) private zone: NgZone,
        private _localStorage: CoolLocalStorage,
        private _httpService:HTTPService
    ) {
    }


    @Output() media: EventEmitter<any> = new EventEmitter();

    handleUpload(data: any) {
        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    console.log(this.response);
                    this.dynamic = this.response.progress.percent;
                    this.response = JSON.parse(data.response);

                    //if(this.response.done){
                        this.populateMedia();
                    //}

                }
            });
        });
    }

    fileOverBase(e: boolean) {
        this.hasBaseDropZoneOver = e;
    }

    populateMedia() {

        this._httpService.sendRequest("appID="+this.session,'/getmedia').subscribe((v)=>{

            this.baseURL=v.baseURL;
            this.images=v.images;
            //console.log("populate");

        })
    }

    selectImgFromList(url){
        this.selectedImgURL=url;
        let width=$('#selectedIMG').width();
        let height=$('#selectedIMG').height();
       // this.details=width+"px X "+height+"px";


    }

    ngOnInit() {
        this.session = this._localStorage.getItem('appID');

        this.options = new NgUploaderOptions({
            url: 'http://localhost:8000/upload',
            filterExtensions: true,
            allowedExtensions: ['jpg', 'png'],
            maxSize: 2097152,
            data: {appID: this.session},
            autoUpload: true,
            fieldName: 'file',
            fieldReset: true,
            maxUploads: 20,
            method: 'POST',
            previewUrl: true,
            withCredentials: false
        });

        this.populateMedia();

    }

    selectImage(){
        this.media.emit({url:this.selectedImgURL});
    }

}

