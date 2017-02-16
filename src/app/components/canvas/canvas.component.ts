import {Component, OnInit, Renderer} from '@angular/core';
import * as $ from 'jquery';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],

})
export class CanvasComponent implements OnInit {

  private skin=require('../../assets/img/android-skin.png');

  device="Android";



  constructor(private dragulaService: DragulaService,renderer: Renderer) {
    dragulaService.setOptions('first-bag', {
      removeOnSpill: true,
      copy: true,
      copySortSource: true,
    });

    dragulaService.drop.subscribe((value) => {
      this.getOptions(value);
    });

    renderer.listenGlobal('document', 'click', (event) => {
      console.log(event);
    });

  }



  private getOptions(value){
    console.log(value[1].localName);

    if(value[1].localName=="app-small-btn"){
      $('#options').html("button options here");
      $(value[1]).attr("click","xxx()")

    }

    if(value[1].localName=="app-navbar"){
      $('#options').html("navbar options here");
    }
  }

  xxx(){
    alert("dsg");
  }

   skinChange(){
    if(this.device=="Android"){
      this.skin=require('../../../assets/img/android-skin.png');
    }else{
      this.skin=require('../../../assets/img/iphone-skin.png');
    }
  }

  ngOnInit() {
    var containerHeight=$('#elements').innerHeight();
    $('#pages,#components').height(containerHeight/2);

  }

}
