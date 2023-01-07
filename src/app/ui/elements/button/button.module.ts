import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { IconModule } from 'src/app/ui/elements/icon/icon.module';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, TextModule, IconModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
