import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { SharedModule } from '@shared/shared.module';

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
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class OrganizationModule { }
