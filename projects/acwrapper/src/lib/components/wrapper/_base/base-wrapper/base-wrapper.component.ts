import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ComponentState } from '../../enums/component-state.enum';
import { TemplateDirective } from '../../../../directives/template/template.directive';

@Component({
  template: ''
})
export abstract class BaseWrapperComponent implements AfterContentInit {
  public readonly COMPONENT_STATE = ComponentState;

  @Input() public state: ComponentState | string = ComponentState.Content;
  @Input() public content: string | null = null;
  @Input() public loadingMessage: string | null = 'Loading...';
  @Input() public emptyMessage: string | null = 'There is no data to display';
  @Input() public errorMessage: string | null = 'Something went wrong. Try again later';

  @ContentChildren(TemplateDirective) public templates = new QueryList<TemplateDirective>();

  public contentTemplate: TemplateRef<any> | null = null;
  public loaderTemplate: TemplateRef<any> | null = null;
  public errorTemplate: TemplateRef<any> | null = null;
  public emptyTemplate: TemplateRef<any> | null = null;
  
  //#region constructor

  constructor() {
  }

  //#endregion

  //#region lifecycle hooks

  public ngAfterContentInit(): void {
    this.templates.forEach((template) =>{
      switch(template.type){
        case ComponentState.Content:
          this.contentTemplate = template.template;
          break;
        case ComponentState.Loader:
          this.loaderTemplate = template.template;
          break;
        case ComponentState.Error:
          this.errorTemplate = template.template;
          break;
        case ComponentState.Empty:
          this.emptyTemplate = template.template;
          break;
      }
    });
  }

  //#endregion
}
