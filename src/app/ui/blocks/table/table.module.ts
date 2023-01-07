import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from 'src/app/ui/elements/icon/icon.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';
import { TableComponent } from './table.component';
import { LoaderModule } from 'src/app/ui/elements/loader/loader.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TextModule, IconModule, LoaderModule],
  exports: [TableComponent],
})
export class TableModule {}
