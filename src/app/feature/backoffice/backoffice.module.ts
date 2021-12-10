import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  
  {
    path:'',
    children:[
      {
        path:'',
        loadChildren: ()=> import("./home/home.module").then( m => m.HomeModule )
      },
      {
        path:'actividades',
        loadChildren: ()=> import("./activities/activities.module").then( m => m.ActivitiesModule )
      },
      {
        path:'categorias',
        loadChildren: ()=> import("./categories/categories.module").then( m => m.CategoriesModule )
      },
      {
        path:'novedades',
        loadChildren: ()=> import("./news/news.module").then( m => m.NewsModule )
      },
      {
        path:'organizacion',
        loadChildren: ()=> import("./organization/organization.module").then( m => m.OrganizationModule )
      },
      {
        path:'carrousel',
        loadChildren: ()=> import("./slides/slides.module").then( m => m.SlidesModule )
      },
      {
        path:'testimonios',
        loadChildren: ()=> import("./testimonials/testimonials.module").then( m => m.TestimonialsModule )
      },
      {
        path:'usuarios',
        loadChildren: ()=> import("./users/users.module").then( m => m.UsersModule )
      },
      {
        path:'slides',
        loadChildren: ()=> import("./slides/slides.module").then( m => m.SlidesModule )
      },
      {
        path:'miembros',
        loadChildren: ()=> import("./members/members.module").then( m => m.MembersModule )
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BackofficeModule { }
