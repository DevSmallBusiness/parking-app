import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangesHistoryListContainerComponent } from './changes-history-list-container.component';
import { ChangesHistoryListModule } from 'src/app/ui/blocks/changes-history-list/changes-history-list.module';

@NgModule({
  declarations: [ChangesHistoryListContainerComponent],
  imports: [CommonModule, ChangesHistoryListModule],
  exports: [ChangesHistoryListContainerComponent],
})
export class ChangesHistoryListContainerModule {}
