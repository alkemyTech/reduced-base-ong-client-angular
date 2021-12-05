import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    loadChildren: ()=> import("./donation/donation.module").then( m => m.DonationModule )
  },
  {
    path:'thank-you',
    loadChildren: ()=> import("./thanks/thanks.module").then( m => m.ThanksModule )
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DonationsModule { }
