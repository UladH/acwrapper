import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent extends BaseWrapperComponent {  
  /**
   * Content string property. This is one of the options of the content set.
   * All non-empty content options show in the same time
   * @input
   * @public
   * @property
   * @defaultValue null
   */
  @Input() public content: string | null = null;

  /**
   * Text below loading spinner. Works only with default loader
   * @input
   * @public
   * @property
   * @defaultValue 'Loading...'
   */
  @Input() public loadingMessage: string | null = 'Loading...';

  /**
   * Text for wrapper "empty" state. Works only with default "empty" component
   * @input
   * @public
   * @property
   * @defaultValue 'There is no data to display'
   */
  @Input() public emptyMessage: string | null = 'There is no data to display';
  
  /**
   * Text for wrapper "error" state. Works only with default "error" component
   * @input
   * @public
   * @property
   * @defaultValue 'Something went wrong. Try again later'
   */
  @Input() public errorMessage: string | null = 'Something went wrong. Try again later';

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
