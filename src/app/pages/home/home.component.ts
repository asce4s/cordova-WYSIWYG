import {Component, OnInit, ViewChild} from '@angular/core';
import {HTTPService} from "../../services/http.service";
import {ParagraphService} from "../../services/paragraph.service";
import {ImageService} from "../../services/image.service";
import {MapService} from "../../services/map.service";
import {NavbarService} from "../../services/navbar.service";
import {SelectService} from "../../services/select.service";
import {CheckboxService} from "../../services/checkbox.service";
import {SwitchService} from "../../services/switch.service";
import {ButtonService} from "../../services/button.service";
import {ElementProviderService} from "../../services/element-provider.service";
import {RangeService} from "../../services/range.service";
import {InputService} from "../../services/input.service";
import {TextareaService} from "../../services/textarea.service";
import {HtmlService} from "../../services/html.service";
import {HeadingService} from "../../services/heading.service";
import {ContainerService} from "../../services/container.service";
import {ListService} from "../../services/list.service";
import {RadioService} from "../../services/radio.service";
import {BuildService} from "../../services/build.service";
import {PageService} from "../../services/page.service";
import {ModalDirective} from "ng2-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    ElementProviderService,
    ButtonService,
    SwitchService,
    CheckboxService,
    SelectService,
    NavbarService,
    MapService,
    ImageService,
    ParagraphService,
    RangeService,
    InputService,
    TextareaService,
    HtmlService,
    HeadingService,
    ContainerService,
    ListService,
    RadioService,
    BuildService,
    PageService,
    HTTPService
  ],
})
export class HomeComponent implements OnInit {

  public links={
    web:null,
    android:null,
    project:null
  };

  public imgshow;

  @ViewChild('downloadModel') public downloadModel: ModalDirective;

  constructor() { }

  ngOnInit() {
    this.imgshow=true;
  }

  downloadModelF(e){

    if(e) {
      this.downloadModel.show();
    }
  }

  downloadData(e){
    console.log(e);
    if(e){
      this.imgshow=false;
      this.links=e;
    }
  }

}
