import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ActivitiesComponent } from './activities.component';

const route:Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: ActivitiesComponent
      },
      {
        path:'editar/:id',
        loadChildren: ()=> import('./form/form.module').then( m => m.FormModule )
      },
      {
        path:'crear',
        loadChildren: ()=> import('./form/form.module').then( m => m.FormModule )
      }
    ]
  }

]

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class ActivitiesModule { }
