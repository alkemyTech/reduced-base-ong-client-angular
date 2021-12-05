import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';

const route:Routes = [
  {
    path:'',
    component:OrganizationComponent
  }
]

@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class OrganizationModule { }
