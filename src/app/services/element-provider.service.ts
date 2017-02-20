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

}
