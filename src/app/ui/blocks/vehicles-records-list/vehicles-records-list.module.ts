import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'src/app/ui/elements/button/button.module';
import { FormVehicleModule } from 'src/app/ui/forms/form-vehicle/form-vehicle.module';
import { TableModule } from 'src/app/ui/blocks/table/table.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';
import { VehiclesRecordsListComponent } from './vehicles-records-list.component';
import { ModalModule } from 'src/app/ui/elements/modal/modal.module';

@NgModule({
  declarations: [VehiclesRecordsListComponent],
  imports: [
    CommonModule,
    TableModule,
    TextModule,
    ButtonModule,
    ModalModule,
    FormVehicleModule,
  ],
  exports: [VehiclesRecordsListComponent],
})
export class VehiclesRecordsListModule {}
