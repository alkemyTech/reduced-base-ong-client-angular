import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';

const route:Routes = [
  {
    path:'',
    component:CreateComponent
  }
]

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(route)
  ]
})
export class CreateModule { }
