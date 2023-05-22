import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDirective } from './template.directive';



@NgModule({
  declarations: [
    TemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateDirective
  ]
})
export class TemplateModule { }
