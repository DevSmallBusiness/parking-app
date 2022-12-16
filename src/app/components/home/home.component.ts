import { Component } from '@angular/core';
import { Database } from 'src/app/core/services/db';
import { Vehicle } from 'src/app/core/models/vehicle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  registers!: Vehicle[];

  constructor(private database: Database) {
    this.registers = database.getAll();
    console.log(this.registers);
  }

  handleAddRegister(): void {
    console.log('handleAddRegister');
  }

  handleEditRegister(vehicle: Vehicle): void {
    console.log('handleEditRegister');
  }

  handleDeleteRegister(id: string): void {
    console.log('handleDeleteRegister');
  }
}
