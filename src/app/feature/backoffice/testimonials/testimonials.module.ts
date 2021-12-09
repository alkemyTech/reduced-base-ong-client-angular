import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsComponent } from './testimonials.component';

const route:Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:TestimonialsComponent
      },
      {
        path:'editar/:id',
        loadChildren: ()=> import("./edit/edit.module").then(m => m.EditModule)
      },
      {
        path:'crear',
        loadChildren: ()=> import("./create/create.module").then( m => m.CreateModule )
      }
    ]
  }
]

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class TestimonialsModule { }
