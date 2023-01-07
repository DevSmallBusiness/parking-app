import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutErrorPageComponent } from './layout-error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutErrorPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutErrorPageComponent],
})
export class LayoutErrorPageModule {}
