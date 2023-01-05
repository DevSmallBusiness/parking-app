import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageContainerComponent } from './main-page-container.component';

@NgModule({
  declarations: [MainPageContainerComponent],
  imports: [CommonModule],
  exports: [MainPageContainerComponent],
})
export class MainPageContainerModule {}
