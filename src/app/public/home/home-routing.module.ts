import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderContainerComponent } from 'src/app/shared/shell/header-container/header-container.component';
import { VehiclesRecordsListContainerComponent } from 'src/app/shared/vehicles-records/vehicles-records-list-container/vehicles-records-list-container.component';
import { LayoutHomeComponent } from 'src/app/ui/layouts/layout-home/layout-home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: VehiclesRecordsListContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
