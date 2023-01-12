import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'src/app/ui/elements/button/button.module';
import { ButtonIconModule } from 'src/app/ui/elements/button-icon/button-icon.module';
import { SubFormSelectModule } from 'src/app/ui/forms/sub-form-select/sub-form-select.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';
import { FormVehicleComponent } from './form-vehicle.component';
import { SubFormInputModule } from 'src/app/ui/forms/sub-form-input/sub-form-input.module';

@NgModule({
  declarations: [FormVehicleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubFormInputModule,
    SubFormSelectModule,
    ButtonModule,
    ButtonIconModule,
    TextModule,
  ],
  exports: [FormVehicleComponent],
})
export class FormVehicleModule {}
