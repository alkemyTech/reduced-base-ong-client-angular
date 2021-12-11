import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormComponent } from './form.component';

const route:Routes = [
  {
    path:'',
    component:FormComponent
  }
]

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(route),
    SharedModule,
  ]
})
export class FormModule { }
