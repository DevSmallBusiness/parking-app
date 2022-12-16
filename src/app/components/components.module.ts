import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    HistoryComponent,
    MenuComponent,
    TopbarComponent,
    TableComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class ComponentsModule {}
