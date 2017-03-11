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
import { ContainerComponent } from './components/options/container/container.component';
import { HtmlComponent } from './components/options/html/html.component';
import { InputComponent } from './components/options/input/input.component';
import { ListComponent } from './components/options/list/list.component';
import { MapComponent } from './components/options/map/map.component';
import { RangeComponent } from './components/options/range/range.component';
import { TextareaComponent } from './components/options/textarea/textarea.component';
import { VideoComponent } from './components/options/video/video.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import { ProjectsComponent } from './pages/projects/projects.component';

const appRoutes: Routes = [
  { path: 'builder', component: HomeComponent },
  { path: 'builder/:id', component: HomeComponent },
  { path: 'login',      component: LoginComponent},
  { path: 'projects',      component: ProjectsComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyCMoOmqwaHtlqZ2lK66dzc5dsDRtypG1ZE",
  authDomain: "cordova-wisiwig.firebaseapp.com",
  databaseURL: "https://cordova-wisiwig.firebaseio.com",
  storageBucket: "cordova-wisiwig.appspot.com",
  messagingSenderId: "541237740083"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

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
    SelectComponent,
    ContainerComponent,
    HtmlComponent,
    InputComponent,
    ListComponent,
    MapComponent,
    RangeComponent,
    TextareaComponent,
    VideoComponent,
    LoginComponent,
    HomeComponent,
    ProjectsComponent


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontAwesomeModule,
    DragulaModule,
    ColorPickerModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
