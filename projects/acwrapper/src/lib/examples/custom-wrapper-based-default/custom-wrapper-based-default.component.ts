import { Component, Input } from '@angular/core';
import { BaseWrapperComponent, ComponentState } from 'acwrapper'; //add this line

@Component({
  selector: 'acw-custom-wrapper-based-default',
  templateUrl: './custom-wrapper-based-default.component.html'
})
export class CustomWrapperBasedDefaultComponent extends BaseWrapperComponent { //Extend youe component from BaseWrapperComponent  
  private _state: ComponentState | string = ComponentState.Content;
  
  //implement abstract properties
  @Input() public set state(value: ComponentState | string){
    this._state = value;
  }
  
  public get state(): ComponentState | string {
    return this._state;
  }
}
