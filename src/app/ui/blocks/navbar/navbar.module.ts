import { TextModule } from 'src/app/ui/elements/text/text.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { IconModule } from 'src/app/ui/elements/icon/icon.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, TextModule, IconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
