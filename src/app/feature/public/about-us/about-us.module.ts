import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '@shared/shared.module';

const routes:Routes = [
  {
    path:'',
    component: AboutUsComponent
  }
]

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutUsModule { }
