import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

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
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class DonationModule { }
