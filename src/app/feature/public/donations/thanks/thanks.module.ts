import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksComponent } from './thanks.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

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
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class ThanksModule { }
