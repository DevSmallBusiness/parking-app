import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutChangesHistoryComponent } from './layout-changes-history.component';

@NgModule({
  declarations: [LayoutChangesHistoryComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutChangesHistoryComponent],
})
export class LayoutChangesHistoryModule {}
