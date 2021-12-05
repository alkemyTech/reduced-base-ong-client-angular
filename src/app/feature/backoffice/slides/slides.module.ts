import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './slides.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:SlidesComponent
      },
      {
        path:'edit/:id',
        loadChildren: ()=> import("./edit/edit.module").then( m => m.EditModule )
      },
      {
        path:'create',
        loadChildren: ()=> import("./create/create.module").then( m => m.CreateModule )
      }
    ]
  }
]

@NgModule({
  declarations: [SlidesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SlidesModule { }
