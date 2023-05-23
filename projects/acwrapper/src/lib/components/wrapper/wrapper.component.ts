import { Component, Input } from '@angular/core';
import { BaseWrapperComponent } from './_base/base-wrapper/base-wrapper.component';
import { ComponentState } from './enums/component-state.enum';

/**
 * Wrapper component
 * @public
 * @extends BaseWrapperComponent
 */
@Component({
  selector: 'acw-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent extends BaseWrapperComponent {
  /**
   * Private state property. Uses with public getter and setter
   * @remarks BaseWrapperComponent uses state getter and setter to be able to create
   * new extended service-based components. Current basic realization doesn't use services 
   * @see code examples
   * @property
   * @private
   */
  private _state: ComponentState | string = ComponentState.Content;

  //#region constructor

  constructor() {
    super();
  }

  //#endregion

  //#region getters setters

  /**
   * Setter for state property
   * @input
   * @public
   * @property
   */
  @Input() public set state(value: ComponentState | string){
    this._state = value;
  }

  /**
   * Getter for state property
   * @public
   * @property
   */  
  public get state(): ComponentState | string {
    return this._state;
  }

  //#endregion
}
