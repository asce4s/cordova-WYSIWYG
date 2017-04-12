import { Injectable } from '@angular/core';
import {page} from '../interfaces/page';
import {PAGES} from '../data/page-data';
import {Subject} from "rxjs";

@Injectable()
export class PageService {
  activePage = new Subject<page>();
  private activePageID:string;

  constructor() {
    /**
    **This will update the current page id listening to the activePage object
    **/
    this.activePage.subscribe(page=>{
      this.activePageID = page.id;
    });
  }

  createPage(){
    return `
    
      `;
  }

  add(Page:page){
    Promise.resolve(PAGES).then((pages:page[]) => {
      pages.push(Page);
      this.activePage.next(Page);
    });
  }

  /*
  * This will delete pages permenantly. But if they are need to be recovered,
  * better way is to giving pages a status number.
  * */
  deletePage(page:page){
    Promise.resolve(PAGES).then((pages:page[])=>{
      pages.splice(pages.findIndex((p:page)=>{
        return p.id == page.id;
      }),1);
    });
  }

  get(id){
    return PAGES.find(_page => _page.id == id);
  }

  getAllPages(){
    return Promise.resolve(PAGES);
  }

  setActivePage(page:page){
    this.activePage.next(page);
  }

  addElement(element:any){
    this.get(this.activePageID).elements.push(element);
  }

}
