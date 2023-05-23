import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../../directives/template/template.module';
import { WrapperComponent } from './wrapper.component';
import { LoaderModule } from '../loader/loader.module';
import { MessageModule } from '../message/message.module';


@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    LoaderModule,
    MessageModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
