import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageContainerComponent } from './error-page-container.component';

@NgModule({
  declarations: [ErrorPageContainerComponent],
  imports: [CommonModule],
  exports: [ErrorPageContainerComponent],
})
export class ErrorPageContainerModule {}
