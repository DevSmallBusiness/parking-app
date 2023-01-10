import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubFormTextareaComponent } from './sub-form-textarea.component';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [SubFormTextareaComponent],
  imports: [CommonModule, ReactiveFormsModule, TextModule],
  exports: [SubFormTextareaComponent],
})
export class SubFormTextareaModule {}
