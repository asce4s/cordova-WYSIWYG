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


import { ButtonComponent } from './components/options/button/button.component';
import {ColorPickerModule} from "angular2-color-picker";
import {Ng2BootstrapModule, ModalModule} from "ng2-bootstrap";
import { AceEditorDirective } from 'ng2-ace-editor';
import { SwitchComponent } from './components/options/switch/switch.component';
import { ImageComponent } from './components/options/image/image.component';
import { CheckboxComponent } from './components/options/checkbox/checkbox.component';
import { NavbarComponent } from './components/options/navbar/navbar.component';
import { ParagraphComponent } from './components/options/paragraph/paragraph.component';
import { RadioComponent } from './components/options/radio/radio.component';
import { SelectComponent } from './components/options/select/select.component';




@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    AceEditorDirective,
    SwitchComponent,
    ImageComponent,
    CheckboxComponent,
    NavbarComponent,
    ParagraphComponent,
    RadioComponent,
    SelectComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontAwesomeModule,
    DragulaModule,
    ColorPickerModule,
    ModalModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
