import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material.module';



@NgModule({
  declarations: [],
  exports:[MaterialModule],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
