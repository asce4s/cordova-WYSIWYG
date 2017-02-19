import {Component} from '@angular/core';

@Component({
  selector: 'el-navbar',
  template: `
<div class="navigation-bar">
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
</div>
`


})

export class NavbarComponent {


}
