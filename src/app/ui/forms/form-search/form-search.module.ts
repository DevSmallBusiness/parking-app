import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSearchComponent } from './form-search.component';
import { SubFormInputModule } from 'src/app/ui/forms/sub-form-input/sub-form-input.module';

@NgModule({
  declarations: [FormSearchComponent],
  imports: [CommonModule, ReactiveFormsModule, SubFormInputModule],
  exports: [FormSearchComponent],
})
export class FormSearchModule {}
