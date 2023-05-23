import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ComponentState } from '../../enums/component-state.enum';
import { TemplateDirective } from '../../../../directives/template/template.directive';

/**
 * Abstract base wrapper component. With this class, you can create own custom wrapper components
 * @see code examples
 * @abstract
 * @public
 * @implements AfterContentInit
 */
@Component({
  template: ''
})
export abstract class BaseWrapperComponent implements AfterContentInit {
  /**
   * ComponentState enum propert for using in HTML
   * @private
   * @property
   * @readonly
   */
  public readonly COMPONENT_STATE = ComponentState;

  /**
   * List of all components templates
   * @private
   * @property
   */
  @ContentChildren(TemplateDirective) public templates = new QueryList<TemplateDirective>();

  /**
   * "Content" state template. It's set in the ngAfterContentInit method
   * This is one of the options of the content set.
   * All non-empty content options show in the same time
   * @private
   * @property
   */
  public contentTemplate: TemplateRef<any> | null = null;

  /**
   * "Loader" state template. It's set in the ngAfterContentInit method
   * @private
   * @property
   */
  public loaderTemplate: TemplateRef<any> | null = null;

  /**
   * "Error" state  template. It's set in the ngAfterContentInit method
   * @private
   * @property
   */
  public errorTemplate: TemplateRef<any> | null = null;
  
  /**
   * "Empty" state template. It's set in the ngAfterContentInit method
   * @private
   * @property
   */
  public emptyTemplate: TemplateRef<any> | null = null;
  
  //#region constructor

  constructor() {
  }

  //#endregion

  //#region lifecycle hooks

  /**
   * Angular lifecycle hooks. Sets all states templates
   */
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

  //#region getters setters

  /**
   * Setter for state property
   *  @remarks BaseWrapperComponent uses state getter and setter to be able to create
   * new extended service-based components. Current basic realization doesn't use services 
   * @see code examples
   * @abstract
   * @public
   * @property
   */
  public abstract set state(value: ComponentState | string);
  
  /**
   * Getter for state property
   *  @remarks BaseWrapperComponent uses state getter and setter to be able to create
   * new extended service-based components. Current basic realization doesn't use services 
   * @see code examples
   * @abstract
   * @public
   * @property
   */
  public abstract get state(): ComponentState | string;

  //#endregion
}
