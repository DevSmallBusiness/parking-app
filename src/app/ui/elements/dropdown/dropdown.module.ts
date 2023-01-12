import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';

import { IconModule } from 'src/app/ui/elements/icon/icon.module';
import { FloatingCardModule } from 'src/app/ui/elements/floating-card/floating-card.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, FloatingCardModule, TextModule, IconModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
