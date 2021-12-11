import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
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
        path:'editar/:id',
        loadChildren: ()=> import("./form/form.module").then( m => m.FormModule )
      },
      {
        path:'crear',
        loadChildren: ()=> import("./form/form.module").then( m => m.FormModule )
      }
    ]
  }
]

@NgModule({
  declarations: [SlidesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SlidesModule { }
