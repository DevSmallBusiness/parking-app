import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination.component';
import { IconModule } from 'src/app/ui/elements/icon/icon.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, TextModule, IconModule],
  exports: [PaginationComponent],
})
export class PaginationModule {}
