import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageContainerModule } from 'src/app/shared/error-page-container/error-page-container.module';
import { LayoutErrorPageModule } from 'src/app/ui/layouts/layout-error-page/layout-error-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorPageRoutingModule,
    LayoutErrorPageModule,
    ErrorPageContainerModule,
  ],
})
export class ErrorPageModule {}
