import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutMainComponent } from './layout-main.component';

@NgModule({
  declarations: [LayoutMainComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutMainComponent],
})
export class LayoutMainModule {}
