import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
   {
    path:'',
    children:[
      {
        path:'login',
        loadChildren: ()=> import("./login/login.module").then( m => m.LoginModule )
      },
      {
        path:'register',
        loadChildren: ()=> import("./register/register.module").then( m => m.RegisterModule )
      },
      {
        path:'**',
        redirectTo:'login'
      },
    ]
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
