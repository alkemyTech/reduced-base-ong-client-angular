import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { Routes, RouterModule } from '@angular/router';

const route:Routes = [
  {
    path:'',
    component: EditComponent
  }
]

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class EditModule { }
