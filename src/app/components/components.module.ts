import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './options/history/history.component';
import { RegisterComponent } from './options/register/register.component';
import { HomeComponent } from './options/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './options/table/table.component';
import { RouterLink } from '@angular/router';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    HistoryComponent,
    MenuComponent,
    TableComponent,
    ComponentsComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
})
export class ComponentsModule {}
