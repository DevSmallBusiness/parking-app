import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageContainerModule } from 'src/app/shared/error-page-container/error-page-container.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ErrorPageRoutingModule, ErrorPageContainerModule],
})
export class ErrorPageModule {}
