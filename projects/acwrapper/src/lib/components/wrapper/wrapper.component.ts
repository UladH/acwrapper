import { Component } from '@angular/core';
import { BaseWrapperComponent } from './_base/base-wrapper/base-wrapper.component';

@Component({
  selector: 'acw-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends BaseWrapperComponent {
  //#region constructor

  constructor() {
    super();
  }

  //#endregion
}
