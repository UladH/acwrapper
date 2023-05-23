import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomWrapperBasedDefaultComponent } from './custom-wrapper-based-default.component';
import { WrapperComponent } from 'acwrapper'; //here



@NgModule({
  declarations: [
    CustomWrapperBasedDefaultComponent
  ],
  imports: [
    CommonModule,
    WrapperComponent //add this line
  ]
})
export class CustomWrapperBasedDefaultModule { }
