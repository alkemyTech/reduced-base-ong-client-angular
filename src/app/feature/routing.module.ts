import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {
    path:'',
    loadChildren: ()=> import("./public/public.module").then( m => m.PublicModule )
  },
  {
    path:'backoffice',
    loadChildren: ()=> import("./backoffice/backoffice.module").then( m => m.BackofficeModule )
  },
  {
    path:'error',
    loadChildren: ()=> import("./page-404/page-404.module").then( m => m.Page404Module )
  },
  {
    path:'home',
    redirectTo:''
  },
  {
    path:'**',
    redirectTo:'error'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
