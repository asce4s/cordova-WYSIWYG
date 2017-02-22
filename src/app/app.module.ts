import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {DragulaModule} from "ng2-dragula";

import {NavbarComponent} from './components/elements/navbar.component';
import {RangeComponent} from './components/elements/range.component';
import {SmallButtonComponent} from './components/elements/small-button.component';
import {SwitchComponent} from './components/elements/switch.component';
import { ButtonComponent } from './components/options/button/button.component';
import {ColorPickerModule} from "angular2-color-picker";





@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    RangeComponent,
    SmallButtonComponent,
    SwitchComponent,
    ButtonComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontAwesomeModule,
    DragulaModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
