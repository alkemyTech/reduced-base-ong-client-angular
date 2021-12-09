import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { SharedModule } from '@shared/shared.module';
import { NewsGroupComponent } from './news-group/news-group.component';

const routes:Routes = [
  {
    path:'',
    component:NewsComponent
  }
]

@NgModule({
  declarations: [NewsComponent, NewsGroupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class NewsModule { }
