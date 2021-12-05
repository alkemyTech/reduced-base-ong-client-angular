import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members.component';

const route:Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: MembersComponent
      },
      {
        path:'edit/:id',
        loadChildren: ()=> import("./edit/edit.module").then( m => m.EditModule )
      },
      {
        path:'create',
        loadChildren: ()=> import('./create/create.module').then( m => m.CreateModule )
      }
    ]
  }
]

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class MembersModule { }
