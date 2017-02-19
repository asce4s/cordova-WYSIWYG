import {Component, OnInit, Renderer} from '@angular/core';
import * as $ from 'jquery';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],

})
export class CanvasComponent implements OnInit {

  private skin=require('../../../assets/img/android-skin.png');

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
      //console.log(event);
    });

  }



  private getOptions(value){

    var key=value[1].accessKey;
    console.log(key);

    if(key=="download"){
      $(value[1]).replaceWith('<button class="button">Button</button>');

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
