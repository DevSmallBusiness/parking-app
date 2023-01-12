import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangesHistoryListComponent } from './changes-history-list.component';

@NgModule({
  declarations: [ChangesHistoryListComponent],
  imports: [CommonModule],
  exports: [ChangesHistoryListComponent],
})
export class ChangesHistoryListModule {}
