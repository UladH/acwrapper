import { Component } from '@angular/core';
import { ComponentState } from 'acwrapper';

@Component({
  selector: 'acw-template-driven-wrapper',
  templateUrl: './template-driven-wrapper.component.html'
})
export class TemplateDrivenWrapperComponent {
  /**
   * If you want use enum in html
   */
  public COMPONENT_STATE = ComponentState;

  /**
   * for state you can use ComponentState enum or 'content' | 'loader' | 'error' | 'empty' values
   */
  public state: ComponentState | 'content' | 'loader' | 'error' | 'empty' = ComponentState.Content;
}
