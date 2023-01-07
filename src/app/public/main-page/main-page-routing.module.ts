import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderContainerComponent } from 'src/app/shared/header-container/header-container.component';
import { LayoutMainComponent } from 'src/app/ui/layouts/layout-main/layout-main.component';
import { MainPageContainerComponent } from 'src/app/shared/main-page-container/main-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: MainPageContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
