import { Component, OnInit } from '@angular/core';
import {
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
 import { page } from '../../interfaces/page';
 import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [PageService],
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
  // private pages:string[] = [];
  private pages:page[];
  private selectedPage:string = "";


  constructor(private _pageService: PageService) {
    this.modal = "hide";
    _pageService.getAllPages().then((pages)=>{
      this.pages = pages;
    });
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
    this._pageService.add({id:this.newPageName.toString(),elements:[]});
    this.newPageName = "";
  }

  selectPage(page:string){
    this.selectedPage = page;
    this._pageService.setActivePage(page);
  }

}
