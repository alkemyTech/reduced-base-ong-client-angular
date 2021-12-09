import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/vendors/material.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureModule,
    NgbModule,
  ],
  exports:[ SharedModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
