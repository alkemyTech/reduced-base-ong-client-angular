import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
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
        path:'editar/:id',
        loadChildren: ()=> import("./edit/edit.module").then( m => m.EditModule )
      },
      {
        path:'crear',
        loadChildren: ()=> import('./create/create.module').then( m => m.CreateModule )
      }
    ]
  }
]

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class MembersModule { }
