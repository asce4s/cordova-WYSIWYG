import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SmallBtnComponent } from './components/elements/small-btn/small-btn.component';
import {DragulaModule} from "ng2-dragula";
import { NavbarComponent } from './components/elements/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    SmallBtnComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontAwesomeModule,
    DragulaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
