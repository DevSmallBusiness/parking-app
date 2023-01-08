import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonIconModule } from '../button-icon/button-icon.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, ButtonIconModule, CardModule],
  exports: [ModalComponent],
})
export class ModalModule {}
