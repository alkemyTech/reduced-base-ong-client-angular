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
        path:'about-us',
        loadChildren: ()=> import("./about-us/about-us.module").then( m => m.AboutUsModule )
      },
      {
        path:'activities',
        loadChildren: ()=> import("./activities/activities.module").then( m => m.ActivitiesModule )
      },
      {
        path:'donations',
        loadChildren: ()=> import("./donations/donations.module").then( m => m.DonationsModule )
      },
      {
        path:'news',
        loadChildren: ()=> import("./news/news.module").then( m => m.NewsModule )
      },
      {
        path:'newsletter',
        loadChildren: ()=> import("./newsletter/newsletter.module").then( m => m.NewsletterModule )
      },
      {
        path:'projects',
        loadChildren: ()=> import("./projects/projects.module").then( m => m.ProjectsModule )
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
export class PublicModule { }
