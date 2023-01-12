import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubFormDateComponent } from './sub-form-date.component';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [SubFormDateComponent],
  imports: [CommonModule, TextModule, ReactiveFormsModule],
  exports: [SubFormDateComponent],
})
export class SubFormDateModule {}
