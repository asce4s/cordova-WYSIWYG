import { Component, OnInit } from '@angular/core';
import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('modalDialog', [
      state('hide', style({
        display:'none',
      })),
      state('show',   style({
        display:'block',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})


export class PagesComponent implements OnInit {
  private modal:string;
  private newPageName: string;
  private pages:string[] = [];
  private selectedPage:string = "";


  constructor() {
    this.modal = "hide";
  }

  ngOnInit() {
  }

  openAddPageDialog(){
    this.modal = "show";
  }

  hideAddPageDialog(){
    this.modal = "hide";
  }

  addPage(){
    this.modal = "hide";
    this.pages.push(this.newPageName);
    this.newPageName = "";
  }

  selectPage(page:string){
    this.selectedPage = page;
  }

}
