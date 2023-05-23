import { Component } from '@angular/core';
import { ComponentState } from 'acwrapper';

@Component({
  selector: 'acw-simple-wrapper',
  templateUrl: './simple-wrapper.component.html'
})
export class SimpleWrapperComponent {
  /**
   * If you want use enum in html
   */
  public COMPONENT_STATE = ComponentState;

  /**
   * for state you can use ComponentState enum or 'content' | 'loader' | 'error' | 'empty' values
   */
  public state: ComponentState | 'content' | 'loader' | 'error' | 'empty' = ComponentState.Content;
}
