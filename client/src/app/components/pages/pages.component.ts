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
  providers: [],
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
  private model_deletePage:string;
  private pageToDelete:page = null;
  private newPageName: string;
  private pages:page[];
  private selectedPage:page = null;


  constructor(private _pageService: PageService) {
    this.modal = "hide";
    this.model_deletePage = "hide";
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

  openDeletePageDialog(){
    this.model_deletePage = "show";
  }

  hideDeletePageDialog(){
    this.model_deletePage = "hide";
  }

  addPage(){
    this.modal = "hide";
    let home = false;
    if(this.pages.length == 0){
      home = true;
    }
    this._pageService.add({id:this.newPageName.toString(),elements:[],home:home,html:''});
    this.newPageName = "";
  }

  selectPage(page:page){
    this.selectedPage = page;
    this._pageService.setActivePage(page);
  }

  deletePageFinal(){
    this._pageService.deletePage(this.pageToDelete);
    this.pageToDelete = null;
    this.hideDeletePageDialog(); // why this is not working ?
  }

  deletePageCancel(){
    this.pageToDelete = null;
    this.hideDeletePageDialog();
  }

  deletePage(_page:page){
    this.pageToDelete = _page;
    /*checking whether there are elements in the page*/
    if(_page.elements.length > 0){
      this.openDeletePageDialog();
    }else{
      this.deletePageFinal();
    }
  }

  setHomePage(_page:page){
    if(!_page.home){
      this._pageService.setHomePage(_page);
      console.log(this.pages);
    }
  }

}
