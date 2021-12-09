import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingModule,
  ],
  exports:[
    RoutingModule,
    RouterModule,
  ]
})
export class FeatureModule { }
