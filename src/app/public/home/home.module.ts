import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderContainerModule } from 'src/app/shared/shell/header-container/header-container.module';
import { LayoutHomeModule } from 'src/app/ui/layouts/layout-home/layout-home.module';
import { HomeRoutingModule } from './home-routing.module';
import { VehiclesRecordsListContainerModule } from 'src/app/shared/vehicles-records/vehicles-records-list-container/vehicles-records-list-container.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutHomeModule,
    HeaderContainerModule,
    VehiclesRecordsListContainerModule,
  ],
})
export class HomeModule {}
