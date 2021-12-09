import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JumbotronImageComponent } from './components/jumbotron-image/jumbotron-image.component';
import { SlideComponent } from './components/slide/slide.component';
import { TitleComponent } from './components/title/title.component';

export const componentsToExports = [
  SlideComponent,
  JumbotronImageComponent,
  TitleComponent
];
@NgModule({
  declarations: [...componentsToExports],
  exports: [...componentsToExports],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
