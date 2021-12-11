import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { JumbotronImageComponent } from './components/jumbotron-image/jumbotron-image.component';
import { SlideComponent } from './components/slide/slide.component';
import { StickyActionComponent } from './components/sticky-action/sticky-action.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { PagePipe } from './pipes/page.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

export const componentsToExports = [
  SlideComponent,
  JumbotronImageComponent,
  TitleComponent,
  CardComponent,
  DialogComponent,
  PhonePipe,
  PagePipe,
  TableComponent,
  StickyActionComponent,
];
@NgModule({
  declarations: [...componentsToExports, PhonePipe, PagePipe],
  exports: [...componentsToExports, ReactiveFormsModule, FormsModule, CKEditorModule],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, CKEditorModule, FormsModule],
})
export class SharedModule {}
