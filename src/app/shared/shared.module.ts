import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { JumbotronImageComponent } from './components/jumbotron-image/jumbotron-image.component';
import { SlideComponent } from './components/slide/slide.component';
import { TitleComponent } from './components/title/title.component';
import { PhonePipe } from './pipes/phone.pipe';
import { PagePipe } from './pipes/page.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './vendors/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';

export const componentsToExports = [
  SlideComponent,
  JumbotronImageComponent,
  TitleComponent,
  CardComponent,
  DialogComponent,
  PhonePipe,
  PagePipe,
];
@NgModule({
  declarations: [...componentsToExports, PhonePipe, PagePipe],
  exports: [...componentsToExports, ReactiveFormsModule,],
  imports: [CommonModule, RouterModule, ReactiveFormsModule,],
})
export class SharedModule {}
