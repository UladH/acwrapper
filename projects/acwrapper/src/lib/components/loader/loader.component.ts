import { Component, Input } from '@angular/core';

/**
 * Default loader component for wrapper
 * 
 * @remarks you can use this loader by default, but this component isn't customizable. 
 * You can provide your own loader @see class {@link BaseWrapperComponent}
 */
@Component({
  selector: 'acw-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  /**
   * Text below spinner
   * @input
   * @public
   * @defaultValue "Loading..."
   */
  @Input() public text: string | null = 'Loading...';

  //#region constructor

  constructor() {
  }

  //#endregion
}
