import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageContainerComponent } from './main-page-container.component';
import { VehicleRegistrationModule } from 'src/app/ui/blocks/vehicle-registration/vehicle-registration.module';

@NgModule({
  declarations: [MainPageContainerComponent],
  imports: [CommonModule, VehicleRegistrationModule],
  exports: [MainPageContainerComponent],
})
export class MainPageContainerModule {}
