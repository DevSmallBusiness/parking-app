import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    HistoryComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
