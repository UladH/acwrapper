import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWrapperComponent } from './simple-wrapper.component';
import { WrapperComponent } from 'acwrapper';//add this line



@NgModule({
  declarations: [
    SimpleWrapperComponent
  ],
  imports: [
    CommonModule,
    WrapperComponent //add this line
  ]
})
export class SimpleWrapperModule { }
