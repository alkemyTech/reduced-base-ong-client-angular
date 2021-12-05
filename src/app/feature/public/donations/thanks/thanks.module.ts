import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksComponent } from './thanks.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {
    path: '',
    component:ThanksComponent
  }
]

@NgModule({
  declarations: [
    ThanksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ThanksModule { }
