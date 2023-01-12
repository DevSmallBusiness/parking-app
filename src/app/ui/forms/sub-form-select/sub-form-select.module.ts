import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormSelectComponent } from './sub-form-select.component';

import { DropdownModule } from 'src/app/ui/elements/dropdown/dropdown.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [SubFormSelectComponent],
  imports: [CommonModule, DropdownModule, TextModule],
  exports: [SubFormSelectComponent],
})
export class SubFormSelectModule {}
