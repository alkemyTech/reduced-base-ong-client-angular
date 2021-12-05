import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports:[
    RoutingModule,
    RouterModule
  ]
})
export class FeatureModule { }
