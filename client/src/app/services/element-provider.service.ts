import {Injectable} from '@angular/core';

@Injectable()
export class ElementProviderService {

  constructor() {
  }

  getButton() {
    return `<button class="button" accesskey="button">Button</button>`;
  }

  getSwitch() {
    return `<label class="switch">
              <input type="checkbox" class="switch__input" >
              <div class="switch__toggle">
                <div class="switch__handle"></div>
              </div>
            </label>`
  }

  getRange() {
    return `<input type="range" class="range">`
  }

  getNavigationBar() {
    return `<div class="navigation-bar">
                <div class="navigation-bar__center">Navigation Bar</div>
            </div>`
  }

  getNavigationBarItem() {
    return `<div class="navigation-bar">
            <div class="navigation-bar__left">
                <span class="toolbar-button--quiet">
                    <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
                </span>
                
            </div>

            <div class="navigation-bar__center">Navigation Bar</div>

            <div class="navigation-bar__right">
                <span class="toolbar-button--quiet">Label</span>
            </div>
            </div>`
  }

  getNavigationBarWithOutlineButton() {
    return ` <div class="navigation-bar">
                <div class="navigation-bar__left">
                    <span class="toolbar-button--outline">
                        <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
                    </span>
                </div>

                <div class="navigation-bar__center">
                    Title
                </div>

                <div class="navigation-bar__right">
                    <span class="toolbar-button--outline">Button</span>
                </div>
             </div>`
  }

  getBottomBar() {
    return ` <div class="bottom-bar">
                <div class="bottom-bar__line-height" style="text-align:center">Bottom Toolbar</div>
            </div>`
  }

  getNavigationBarWithSegment() {
    return `  <div class="navigation-bar">
                  <div class="navigation-bar__center">
                    <div class="button-bar" style="width:200px;margin:7px 50px;">
                        <div class="button-bar__item">
                            <input type="radio" name="navi-segment-a" checked>
                            <div class="button-bar__button">One</div>
                        </div>

                        <div class="button-bar__item">
                            <input type="radio" name="navi-segment-a">
                               <div class="button-bar__button">Two</div>
                        </div>
                    </div>
                  </div>
               </div> `
  }

  getNoShadowNavigationBar() {
    return ` <div class="navigation-bar navigation-bar--noshadow">
                <div class="navigation-bar__left">
                  <span class="toolbar-button--quiet">
                    <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
                  </span>
                </div>
                <div class="navigation-bar__center">
                  Navigation Bar
                </div>
                <div class="navigation-bar__right">
                  <span class="toolbar-button--quiet">Label</span>
                </div>
              </div>`
  }

  getTransparentNavigationBar() {
    return ` <div class="navigation-bar navigation-bar--transparent">
                <div class="navigation-bar__left">
                  <span class="toolbar-button--quiet">
                    <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
                  </span>
                </div>
                <div class="navigation-bar__center">
                  Navigation Bar
                </div>
                <div class="navigation-bar__right">
                  <span class="toolbar-button--quiet">Label</span>
                </div>
              </div>`
  }

  getButtonBar() {
    return ` <div class="button-bar" style="width:280px;margin:0 auto;">
              <div class="button-bar__item">
                <button class="button-bar__button">One</button>
              </div>
              <div class="button-bar__item">
                <button class="button-bar__button">Two</button>
              </div>
              <div class="button-bar__item">
                <button class="button-bar__button">Three</button>
              </div>
            </div> `
  }

  getSegment() {
    return ` <div class="button-bar" style="width:280px;margin:0 auto;">
              <div class="button-bar__item">
                <input type="radio" name="segment-a" checked>
                <button class="button-bar__button">One</button>
              </div>
              <div class="button-bar__item">
                <input type="radio" name="segment-a">
                <button class="button-bar__button">Two</button>
              </div>
              <div class="button-bar__item">
                <input type="radio" name="segment-a">
                <button class="button-bar__button">Three</button>
              </div>
            </div>`
  }

  getIconTabBar() {
    return `<div class="tab-bar">
              <label class="tab-bar__item">
                <input type="radio" name="tab-bar-a" checked="checked">
                <button class="tab-bar__button">
                  <i class="tab-bar__icon ion-stop"></i>
                  <div class="tab-bar__label">One</div>
                </button>
              </label>
            
              <label class="tab-bar__item">
                <input type="radio" name="tab-bar-a">
                <button class="tab-bar__button">
                  <i class="tab-bar__icon ion-record"></i>
                  <div class="tab-bar__label">Two</div>
                </button>
              </label>
            
              <label class="tab-bar__item">
                <input type="radio" name="tab-bar-a">
                <button class="tab-bar__button">
                  <i class="tab-bar__icon ion-star"></i>
                  <div class="tab-bar__label">Three</div>
                </button>
              </label>
            </div>`
  }

  getBorderedTopTabBar() {
    return ` <div class="tab-bar tab-bar--top tab-bar--top-border">
                <label class="tab-bar__item tab-bar--top-border__item">
                  <input type="radio" name="top-tab-bar-b" checked="checked">
                  <button class="tab-bar__button tab-bar--top-border__button">
                    Home
                  </button>
                </label>
              
                <label class="tab-bar__item tab-bar--top-border__item">
                  <input type="radio" name="top-tab-bar-b">
                  <button class="tab-bar__button tab-bar--top-border__button">
                    Comments
                  </button>
                </label>
              
                <label class="tab-bar__item tab-bar--top-border__item">
                  <input type="radio" name="top-tab-bar-b">
                  <button class="tab-bar__button tab-bar--top-border__button">
                    Activity
                  </button>
                </label>
              </div>`
  }

  getNotification() {
    return ` <span class="notification">1</span>`
  }

  getToolbarButton() {
    return ` <button class="toolbar-button toolbar-button--outline">
                <i class="fa fa-bell" style="font-size:17px"></i> Label
             </button>`
  }

  getCheckBox() {
    return ` <label class="checkbox">
                 <input type="checkbox" class="checkbox__input">
                    <div class="checkbox__checkmark"></div>
                    <span class="checkbox-label">OFF</span>
             </label>`
  }

  getRadioButton() {
    return `<label class="radio-button">
                <input type="radio" class="radio-button__input" name="group1" checked="checked">
                <div class="radio-button__checkmark"></div>
                <span class="radio-label">Label</span>
            </label>`
  }

  getList() {
    return `<ul class="list">
              <li class="list__item" >
                <div class="list__item__center">Item 1</div>
              </li>
            </ul>`
  }

  getTappableList() {
    return ` <ul class="list">
                <li class="list__item list__item--tappable">
                    <div class="list__item__center">Tappable Item</div>
                </li>
             </ul>`
  }

  getSwitchInList() {
    return ` 
              <li class="list__item">
                <div class="list__item__center">
                  Label
                </div>
                <div class="list__item__right">
                  <label class="switch">
                    <input type="checkbox" class="switch__input" checked>
                    <div class="switch__toggle">
                      <div class="switch__handle"></div>
                    </div>
                  </label>
                </div>
              </li>
            `
  }

  getListItemWithChevron() {
    return `<ul class="list">
              <li class="list__item list__item--chevron">
                <div class="list__item__center">Item A</div>
              </li>
            </ul>`
  }

  getRadioButtonInListItem() {
    return `<ul class="list">
              <li class="list__item list__item--tappable">
                <div class="list__item__left">
                  <label class="radio-button">
                    <input type="radio" id="r1" class="radio-button__input" name="r" checked="checked">
                    <div class="radio-button__checkmark"></div>
                  </label>
                </div>
                <label for="r1" class="list__item__center">
                  Radio Button
                </label>
              </li>
            </ul>`
  }

  getCheckBoxInListItem() {
    return ` <ul class="list">
              <li class="list__item list__item--tappable">
                <div class="list__item__left">
                  <label class="checkbox">
                    <input type="checkbox" id="checkbox1" class="checkbox__input" name="c" checked="checked">
                    <div class="checkbox__checkmark"></div>
                  </label>
                </div>
                <label for="checkbox1" class="list__item__center">
                  Checkbox
                </label>
              </li>
            </ul>`
  }

  getTextInputInListItem() {
    return ` <ul class="list">
              <li class="list__item">
                <div class="list__item__center">
                  <input type="text" class="text-input" placeholder="Name">
                </div>
              </li>
            </ul>`
  }

  getTextAreaInListItem() {
    return ` <ul class="list">
              <li class="list__item">
                <div class="list__item__center">
                  <textarea class="textarea textarea--transparent" placeholder="Text message"></textarea>
                </div>
              </li>
            </ul>`
  }

  getListItemWithSubTitle() {
    return `<ul class="list">
              <li class="list__item">
                <div class="list__item__center">
                  <div class="list__item__title">
                    Title
                  </div>
                  <div class="list__item__subtitle">
                    Subtitle
                  </div>
                </div>
              </li>
            </ul>`
  }

  getListItemWithThumbanil() {
    return ` <ul class="list">
              <li class="list__item">
                <div class="list__item__left">
                  <img class="list__item__thumbnail" src="http://placekitten.com/g/40/40" alt="Cute kitten">
                </div>
            
                <div class="list__item__center">
                  <div class="list__item__title">Lily</div>
                  <div class="list__item__subtitle">Very friendly cat</div>
                </div>
              </li>`
  }

  getSearchInput() {
    return `<input type="search" value="" placeholder="Search" class="search-input">`
  }

  getTextInput() {
    return ` <input type="text" class="text-input--underbar" placeholder="text" value="">`
  }

  getTextArea() {
    return `<textarea class="textarea" rows="3" placeholder="Textarea"></textarea>`
  }

  getDialog() {
    return ` <div class="dialog-mask"></div>
                <div class="dialog">
                  <div class="dialog-container">
                    <div class="page">
                      <p style="text-align:center;margin-top:40px;opacity:0.4;">Content</p>
                    </div>
                  </div>
                </div>`
  }

  getAlertDialog() {
    return ` <div class="alert-dialog-mask"></div>
                <div class="alert-dialog">
                  <div class="alert-dialog-container">
                    <div class="alert-dialog-title">Alert</div>
                
                    <div class="alert-dialog-content">
                      Hello World!
                    </div>
                
                    <div class="alert-dialog-footer">
                      <button class="alert-dialog-button alert-dialog-button--primal">OK</button>
                    </div>
                  </div>
                </div>`
  }

  getPopOver() {
    return `<div class="popover">
              <div class="popover-mask"></div>
              <div class="popover popover--bottom" style="bottom:20px;left:50px;">
                <div class="popover__arrow"></div>
                <div class="popover__content">
                  <div style="text-align:center;opacity:0.4;margin-top:40px">Content</div>
                </div>
              </div>
            </div>`
  }

  getModel() {
    return `<div class="modal">
              <div class="modal__content">
                Message Text
              </div>
            </div>`
  }

  getProgressBar() {
    return `<div class="progress-bar progress-bar--indeterminate">
              <div class="progress-bar__primary"></div>
              <div class="progress-bar__secondary"></div>
            </div>`
  }

  getProgressCircle() {
    return ` <svg class="progress-circular">
                <circle class="progress-circular__primary" cx="50%" cy="50%" r="40%" fill="none" stroke-width="10%" stroke-miterlimit="10"/>
              </svg>`
  }

  getFab() {
    return ` <button class="fab"><i class="zmdi zmdi-car"></i></button>`
  }

  getParagraph(){
    return `<p>your text here</p>`
  }

  getHeading(){
    return `<h1>your heading here</h1>`
  }

  getContainer(){
    return `<div class="container-fluid" [dragula]='"first-bag"'></div>`
  }

  getHTML(){
    return `<div class="html"></div>`
  }

  getImage(){

    return `<img class="img" src="">`
  }


  getMap(){
    return `<div class="map"></div>`
  }

  getSelect(){
    return `<select class="selectpicker">
                <option>Mustard</option>
                <option>Ketchup</option>
                <option>Relish</option>
            </select>
`
  }

}
