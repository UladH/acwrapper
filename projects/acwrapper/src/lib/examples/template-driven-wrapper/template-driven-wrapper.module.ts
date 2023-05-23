import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenWrapperComponent } from './template-driven-wrapper.component';
import { TemplateDirective, WrapperComponent } from 'acwrapper'; //add this line



@NgModule({
  declarations: [
    TemplateDrivenWrapperComponent
  ],
  imports: [
    CommonModule,
    WrapperComponent, //add this line
    TemplateDirective //add this line
  ]
})
export class TemplateDrivenWrapperModule { }
