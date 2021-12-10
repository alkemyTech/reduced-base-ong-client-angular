import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { preventImportGuard } from './guards/prevent-import-guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';
import { SpinnerService } from './components/spinner/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SidebarComponent } from './components/sidenav/sidebar.component';
import { SidebarService } from './components/sidenav/sidebar.service';

const componentToExports = [
  NavbarComponent,
  FooterComponent,
  SpinnerComponent,
  SidebarComponent,
];

@NgModule({
  declarations: [...componentToExports, FooterComponent],
  exports: [...componentToExports],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClientService, SpinnerService, SidebarService],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    preventImportGuard(parentModule, 'CoreModule');
  }
}
