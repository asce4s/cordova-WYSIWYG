import { Injectable } from '@angular/core';
import {page} from '../interfaces/page';
import {PAGE} from '../data/page-data';

@Injectable()
export class PageService {
  private activePage:page;

  constructor() {
    this.activePage = null;
  }

  add(Page:page){
    Promise.resolve(PAGE).then((pages:page[]) => pages.push(Page));
    this.activePage = Page;
  }

  get(id){
    Promise.resolve(PAGE).then((pages:page[]) => {
      return pages.find(_ => _.id == id);
    });
  }

  getAllPages(){
    return Promise.resolve(PAGE);
  }

  setActivePage(id){
    Promise.resolve(PAGE).then((pages:page[])=>{
      this.activePage = pages.find(_=>_.id == id);
    });
  }

  getActivePage(){
    return this.activePage ;
  }

  addElement(element:any){
    this.activePage.elements.push(element);
  }

}
