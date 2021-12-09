import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { FormContactComponent } from './form-contact/form-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/vendors/material.module';

const route:Routes = [
  {
    path:'',
    component:ContactComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    MaterialModule
  ],
  declarations: [ContactComponent, FormContactComponent]
})
export class ContactModule { }
