import { Component, Input } from '@angular/core';
import { MessageType } from './enums/message-type.enum';

@Component({
  selector: 'acw-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  public readonly MESSAGE_TYPE = MessageType;

  private readonly componentClass = 'acw-message';

  @Input() public message: string | null = 'Message';
  @Input() public type: MessageType | string = MessageType.Info;
  

  //#region constructor

  constructor() {
  }

  //#endregion

  //#region getters setters

  public get classes(): string {
    return `${this.colorClass()}`;
  }

  //#endregion

  //#region private

  private colorClass(): string {
    return `${this.componentClass}-${this.type}`;
  }
  //#endregion
}
