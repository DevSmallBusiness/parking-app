import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageContainerModule } from 'src/app/shared/static/error-page-container/error-page-container.module';
import { ErrorPageRoutingModule } from './error-page-routing.module';
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
