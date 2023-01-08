import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutErrorPageComponent } from './layout-error-page.component';

@NgModule({
  declarations: [LayoutErrorPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutErrorPageComponent],
})
export class LayoutErrorPageModule {}
