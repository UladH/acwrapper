import { Directive, Input, TemplateRef } from '@angular/core';

/**
 * Template name directive for using multiple typed templates in component
 * @public
 */
@Directive({
  selector: '[acwTemplate]'
})
export class TemplateDirective {
  /**
   * Set directive name by directive attribute
   * @public
   * 
   * @example <ng-template acwTemplate="content"></ng-template>
   */
  @Input('acwTemplate') name: string = '';

  //#region constructor

  constructor(
    public template: TemplateRef<any>
  ) { }

  //#endregion

  //#region getters setter

  /**
   * Return type of directive
   * @public
   */
  public get type(): string {
    return this.name;
  }

  //#endregion

}
