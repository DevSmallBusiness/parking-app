import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRecordsListContainerComponent } from './vehicles-records-list-container.component';
import { VehiclesRecordsListModule } from 'src/app/ui/blocks/vehicles-records-list/vehicles-records-list.module';

@NgModule({
  declarations: [VehiclesRecordsListContainerComponent],
  imports: [CommonModule, VehiclesRecordsListModule],
  exports: [VehiclesRecordsListContainerComponent],
})
export class VehiclesRecordsListContainerModule {}
