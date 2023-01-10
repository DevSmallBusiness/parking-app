import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormInputComponent } from './sub-form-input.component';

import { TextModule } from 'src/app/ui/elements/text/text.module';
import { IconModule } from 'src/app/ui/elements/icon/icon.module';

@NgModule({
  declarations: [SubFormInputComponent],
  imports: [CommonModule, IconModule, TextModule, ReactiveFormsModule],
  exports: [SubFormInputComponent],
})
export class SubFormInputModule {}
