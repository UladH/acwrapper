import { Component, Input } from '@angular/core';

@Component({
  selector: 'acw-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() text: string | null = 'Loading...';

  //#region constructor

  constructor() {
  }

  //#endregion
}
