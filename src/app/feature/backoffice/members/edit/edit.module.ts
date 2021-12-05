import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit.component';

const route:Routes = [
  {
    path:'',
    component:EditComponent
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
