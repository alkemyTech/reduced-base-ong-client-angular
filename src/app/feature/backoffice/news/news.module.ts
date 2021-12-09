import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from "./news.component";

const route:Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:NewsComponent
      },
      {
        path: 'editar/:id',
        loadChildren: ()=> import("./edit/edit.module").then( m => m.EditModule )
      },
      {
        path: 'crear',
        loadChildren: ()=> import("./create/create.module").then( m => m.CreateModule )
      }
    ]
  }
]

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class NewsModule { }
