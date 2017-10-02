import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import {ButtonService} from "./button.service";
import {SwitchService} from "./switch.service";
import {MapService} from "./map.service";
import {HtmlService} from "./html.service";
import {HeadingService} from "./heading.service";
import {ParagraphService} from "./paragraph.service";
import {ListService} from "./list.service";
import {CheckboxService} from "./checkbox.service";
import {ImageService} from "./image.service";
import {NavbarService} from "./navbar.service";
import {InputService} from "./input.service";
import {SelectService} from "./select.service";
import {ContainerService} from "./container.service";
import {TextareaService} from "./textarea.service";
import {RangeService} from "./range.service";
import {RadioService} from "./radio.service";
import {HTTPService} from "./http.service";
import {PageService} from "./page.service";
import {PAGES} from "../data/page-data";
import {CoolLocalStorage} from "angular2-cool-storage";
import * as $ from 'jquery';

@Injectable()
export class BuildService {

    public links = {
        project: "#",
        web: "#",
        android: "#"
    }

    constructor(private _buttonService: ButtonService,
                private _switchService: SwitchService,
                private _mapService: MapService,
                private _htmlService: HtmlService,
                private _headingService: HeadingService,
                private _paragraphService: ParagraphService,
                private _listService: ListService,
                private _checkboxService: CheckboxService,
                private _imageService: ImageService,
                private _navbarService: NavbarService,
                private _inputService: InputService,
                private _selectService: SelectService,
                private _containerService: ContainerService,
                private _textareaService: TextareaService,
                private _rangeService: RangeService,
                private _radioService: RadioService,
                private  _httpService: HTTPService,
                private _localStorage: CoolLocalStorage,) {
    }


    private getAllStyles() {
        let res = this._buttonService.getStyles() +
            this._checkboxService.getStyles() +
            this._navbarService.getStyles() +
            this._radioService.getStyles() +
            this._switchService.getStyles() +
            this._containerService.getStyles() +
            this._headingService.getStyles() +
            this._htmlService.getStyles() +
            this._imageService.getStyles() +
            this._inputService.getStyles() +
            this._paragraphService.getStyles() +
            this._listService.getStyles() +
            this._mapService.getStyles() +
            this._textareaService.getStyles() +
            this._rangeService.getStyles();

        return res;
    }

    private getAllScripts() {
        let res = this._buttonService.getScripts() +
            this._checkboxService.getScripts() +
            this._navbarService.getScripts() +
            this._radioService.getScripts() +
            //this._switchService.getScripts()+
            // this._containerService.getScripts()+
            this._headingService.getScripts() +
            this._htmlService.getScripts() +
            this._imageService.getScripts() +
            this._inputService.getScripts() +
            this._paragraphService.getScripts() +
            this._listService.getScripts() +
            this._rangeService.getScripts();

        return res;
    }

    public buildPreview(scripts) {
        let pgs = [];

        console.log(scripts.js);

        let id = this._localStorage.getItem("appID");
        $('.pages').each(function () {
            pgs.push($(this).html().toString());
        })


        let data = "id=" + id + "&pages=" + JSON.stringify(PAGES) + "&design=" + JSON.stringify(pgs) + "&styles=" + this.getAllStyles() +scripts.css+ "&scripts=" + this.cleanCode(scripts.js);


        return this._httpService.sendRequest(data, '/preview');


    }


    public build() {
        let pgs = [];

        let id = this._localStorage.getItem("appID");
        $('.pages').each(function () {
            pgs.push($(this).html().toString());
        })


        let data = "id=" + id + "&pages=" + JSON.stringify(PAGES) + "&design=" + JSON.stringify(pgs) + "&styles=" + this.getAllStyles()


        return this._httpService.sendRequest(data, '/build');


    }

    private cleanCode(code) {
        code = this.replaceAll(code, "+", "{0}");
        return code;
    }

    private  replaceAll(text, busca, reemplaza) {
        while (text.toString().indexOf(busca) != -1)
            text = text.toString().replace(busca, reemplaza);
        return text;
    }


}
