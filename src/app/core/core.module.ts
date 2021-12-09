import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { preventImportGuard } from './guards/prevent-import-guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';

const componentToExports = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: [...componentToExports, FooterComponent],
  exports: [...componentToExports],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClientService]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
    preventImportGuard(parentModule, "CoreModule");
  }
}
