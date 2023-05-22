import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../../directives/template/template.module';
import { WrapperComponent } from './wrapper.component';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
