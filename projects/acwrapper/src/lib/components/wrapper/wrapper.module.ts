import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../../directives/template/template.module';
import { WrapperComponent } from './wrapper.component';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    LoaderModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
