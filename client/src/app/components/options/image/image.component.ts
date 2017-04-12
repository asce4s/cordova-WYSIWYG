import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Image} from "../../../interfaces/image";
import {ImageService} from "../../../services/image.service";


import * as $ from 'jquery';
@Component({
    selector: 'image-options',
    templateUrl: './image.component.html',
    inputs: ['selectedImage'],
    styleUrls: ['image.component.css']


})
export class ImageComponent implements OnInit {


    ngOnInit() {
    }

    private selectedImage: Image;
    @Output() modelShow: EventEmitter<any> = new EventEmitter();
    @Output() mediaManager: EventEmitter<any> = new EventEmitter();

    constructor(private _imageService: ImageService) {

    }


    public formChange() {
        $("#imageStyles").html('<style>' +
            this._imageService.getStyles() +
            '</style>');
        this.addClasses();
    }

    //public setButtonText(){
    //$('#'+this.selectedButton.id).html(this.selectedButton.text.text);
    //}

    public addClasses() {
        $('#' + this.selectedImage.id).addClass(this.selectedImage.style.class);
    }


    public eventLoad() {
        this.modelShow.emit(true);
    }

    selectImage() {
        this.mediaManager.emit(true)
    }

}
