import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { NoimagePipe } from './noimage.pipe';

@NgModule({
  declarations: [CapitalizePipe, NoimagePipe],
  imports: [CommonModule],
  exports: [CapitalizePipe, NoimagePipe],
})
export class PipesModule {}
