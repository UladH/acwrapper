import { Component, Input } from '@angular/core';
import { BaseWrapperComponent } from './_base/base-wrapper/base-wrapper.component';
import { ComponentState } from './enums/component-state.enum';

@Component({
  selector: 'acw-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends BaseWrapperComponent {
  private _state: ComponentState | string = ComponentState.Content;

  //#region constructor

  constructor() {
    super();
  }

  //#endregion

  //#region getters setters

  @Input() public set state(value: ComponentState | string){
    this._state = value
  }
  
  public get state(): ComponentState | string {
    return this._state;
  }

  //#endregion
}
