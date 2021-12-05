import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { Routes, RouterModule } from '@angular/router';

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
