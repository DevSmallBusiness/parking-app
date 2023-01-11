import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingCardComponent } from './floating-card.component';
import { ButtonIconModule } from 'src/app/ui/elements/button-icon/button-icon.module';

@NgModule({
  declarations: [FloatingCardComponent],
  imports: [CommonModule, ButtonIconModule],
  exports: [FloatingCardComponent],
})
export class FloatingCardModule {}
