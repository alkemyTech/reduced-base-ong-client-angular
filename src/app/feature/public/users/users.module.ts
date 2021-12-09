import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
   {
    path:'',
    children:[
      {
        path:'ingresar',
        loadChildren: ()=> import("./login/login.module").then( m => m.LoginModule )
      },
      {
        path:'registrarse',
        loadChildren: ()=> import("./register/register.module").then( m => m.RegisterModule )
      },
      {
        path:'**',
        redirectTo:'ingresar'
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
