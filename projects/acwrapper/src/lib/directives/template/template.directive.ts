import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[acwTemplate]'
})
export class TemplateDirective {
  @Input('acwTemplate') name: string = '';

  //#region constructor

  constructor(
    public template: TemplateRef<any>
  ) { }

  //#endregion

  //#region getters setter

  public get type(): string {
    return this.name;
  }

  //#endregion

}
