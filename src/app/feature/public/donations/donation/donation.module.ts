import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {
    path:'',
    component:DonationComponent
  }
]

@NgModule({
  declarations: [
    DonationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class DonationModule { }
