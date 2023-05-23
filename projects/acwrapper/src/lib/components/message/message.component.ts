import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageType } from './enums/message-type.enum';

/**
 * Default message component for "Empty" and "Error" wrapper states
 * @remarks you can use this message component by default, but this component isn't customizable. 
 * You can provide your own templates for this wrapper states @see class {@link BaseWrapperComponent}
 */
@Component({
  selector: 'acw-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  /**
   * MessageType enum propert for using in HTML
   * @property
   * @private
   * @readonly
   */
  public readonly MESSAGE_TYPE = MessageType;

  /**
   * Component class name property for generation customizable classes
   * @property
   * @private
   * @readonly
   * @defaultValue 'acw-message'
   */
  private readonly componentClass = 'acw-message';

  /**
   * Displayed text property
   * @input
   * @public
   * @property
   * @defaultValue 'Message'
   */
  @Input() public message: string | null = 'Message';

  /**
   * Current component type
   * @input
   * @public
   * @property
   * @defaultValue MessageType.Info
   */
  @Input() public type: MessageType | string = MessageType.Info;
  

  //#region constructor

  constructor() {
  }

  //#endregion

  //#region getters setters

  /**
   * Getter for dynamic component classes
   * @property
   * @private
   * @readonly
   */
  public get classes(): string {
    return `${this.colorClass()}`;
  }

  //#endregion

  //#region private

  /**
   * Generate component color class by current type
   * @private
   * @returns string
   */
  private colorClass(): string {
    return `${this.componentClass}-${this.type}`;
  }

  //#endregion
}
