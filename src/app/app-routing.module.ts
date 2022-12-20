import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { HistoryComponent } from './components/options/history/history.component';
import { HomeComponent } from './components/options/home/home.component';
import { RegisterComponent } from './components/options/register/register.component';

const routes: Routes = [
  {path: '', component: ComponentsComponent},
  {path: 'register', component: ComponentsComponent},
  {path: 'history', component: ComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
