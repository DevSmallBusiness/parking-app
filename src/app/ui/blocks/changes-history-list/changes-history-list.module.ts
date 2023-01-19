import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'src/app/ui/elements/button/button.module';
import { ChangesHistoryListComponent } from './changes-history-list.component';
import { ModalModule } from 'src/app/ui/elements/modal/modal.module';
import { TableModule } from 'src/app/ui/blocks/table/table.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [ChangesHistoryListComponent],
  imports: [CommonModule, TableModule, TextModule, ButtonModule, ModalModule],
  exports: [ChangesHistoryListComponent],
})
export class ChangesHistoryListModule {}
