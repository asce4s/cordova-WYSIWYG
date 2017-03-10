import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Navbar} from "../../../interfaces/navbar";
import {NavbarService} from "../../../services/navbar.service";
import * as $ from 'jquery';

@Component({
  selector: 'navbar-options',
  templateUrl: './navbar.component.html',
  inputs:['selectedNavbar'],
})
export class NavbarComponent implements OnInit {

  constructor(private _navbarService: NavbarService) { }

  ngOnInit() {

  }

  private selectedNavbar:Navbar;
  @Output() modelShow: EventEmitter<any> = new EventEmitter();

  public formChange(){
    $("#navbarStyles").html('<style>' +
        this._navbarService.getStyles()+
        '</style>');
    this.addClasses();
  }

  public addClasses(){
    $('#'+this.selectedNavbar.id).addClass(this.selectedNavbar.style.class);
  }

  public eventLoad(){
    this.modelShow.emit(true);
  }

  public setNavbarText(){
    $('#'+this.selectedNavbar.id+" .navigation-bar__center").html(this.selectedNavbar.text.text);
  }


}
