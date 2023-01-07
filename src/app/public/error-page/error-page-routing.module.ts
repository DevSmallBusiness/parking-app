import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageContainerComponent } from 'src/app/shared/error-page-container/error-page-container.component';
import { LayoutErrorPageComponent } from 'src/app/ui/layouts/layout-error-page/layout-error-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutErrorPageComponent,
    children: [{ path: '', component: ErrorPageContainerComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPageRoutingModule {}
