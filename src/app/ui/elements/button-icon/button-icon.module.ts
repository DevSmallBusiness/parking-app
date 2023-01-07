import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonIconComponent } from './button-icon.component';
import { IconModule } from 'src/app/ui/elements/icon/icon.module';

@NgModule({
  declarations: [ButtonIconComponent],
  imports: [CommonModule, IconModule],
  exports: [ButtonIconComponent],
})
export class ButtonIconModule {}
