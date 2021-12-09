import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TestimonialsComponent } from './testimonials.component';

const route:Routes = [
  {
    path:'',
    component:TestimonialsComponent
  }
]


@NgModule({
  declarations: [TestimonialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule
  ]
})
export class TestimonialsModule { }
