import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  // {
  //   path:'**',
  //   redirectTo:''
  // },
  {
    path:'',
    component: Page404Component
  }

]

@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Page404Module { }
