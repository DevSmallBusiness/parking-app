import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeHistoryRoutingModule } from './changes-history-routing.module';
import { LayoutChangesHistoryModule } from 'src/app/ui/layouts/layout-changes-history/layout-changes-history.module';
import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { ChangesHistoryListContainerModule } from 'src/app/shared/changes-history/changes-history-list-container/changes-history-list-container.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChangeHistoryRoutingModule,
    LayoutChangesHistoryModule,
    HeaderContainerModule,
    ChangesHistoryListContainerModule,
  ],
})
export class ChangeHistoryModule {}
