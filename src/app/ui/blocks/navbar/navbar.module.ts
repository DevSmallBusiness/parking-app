import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from 'src/app/ui/elements/icon/icon.module';
import { NavbarComponent } from './navbar.component';
import { TextModule } from 'src/app/ui/elements/text/text.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, TextModule, IconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
