import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home.component';

@NgModule({
  declarations: [LayoutHomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutHomeComponent],
})
export class LayoutHomeModule {}
