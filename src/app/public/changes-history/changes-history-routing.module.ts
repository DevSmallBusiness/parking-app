import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangesHistoryListContainerComponent } from 'src/app/shared/changes-history/changes-history-list-container/changes-history-list-container.component';
import { HeaderContainerComponent } from 'src/app/shared/shell/header-container/header-container.component';
import { LayoutChangesHistoryComponent } from 'src/app/ui/layouts/layout-changes-history/layout-changes-history.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutChangesHistoryComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: ChangesHistoryListContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeHistoryRoutingModule {}
