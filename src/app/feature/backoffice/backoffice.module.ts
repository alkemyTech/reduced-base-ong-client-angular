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
        path:'activities',
        loadChildren: ()=> import("./activities/activities.module").then( m => m.ActivitiesModule )
      },
      {
        path:'categories',
        loadChildren: ()=> import("./members/members.module").then( m => m.MembersModule )
      },
      {
        path:'news',
        loadChildren: ()=> import("./news/news.module").then( m => m.NewsModule )
      },
      {
        path:'organization',
        loadChildren: ()=> import("./organization/organization.module").then( m => m.OrganizationModule )
      },
      {
        path:'slides',
        loadChildren: ()=> import("./slides/slides.module").then( m => m.SlidesModule )
      },
      {
        path:'testimonials',
        loadChildren: ()=> import("./testimonials/testimonials.module").then( m => m.TestimonialsModule )
      },
      {
        path:'users',
        loadChildren: ()=> import("./users/users.module").then( m => m.UsersModule )
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
