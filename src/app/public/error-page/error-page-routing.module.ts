import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageContainerComponent } from 'src/app/shared/error-page-container/error-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorPageContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPageRoutingModule {}
