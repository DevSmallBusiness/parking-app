import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { LayoutMainModule } from 'src/app/ui/layouts/layout-main/layout-main.module';
import { HeaderContainerModule } from 'src/app/shared/header-container/header-container.module';
import { MainPageContainerModule } from 'src/app/shared/main-page-container/main-page-container.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    LayoutMainModule,
    HeaderContainerModule,
    MainPageContainerModule,
  ],
})
export class MainPageModule {}
