import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/core/models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class Database {
  vehicles: Vehicle[] = require("../../../data/vehicles.json")

  constructor() {}

  getAll(): Vehicle[] {
    return this.vehicles;
  }

  getById(id: string): Vehicle | null {
    const vehicle = this.vehicles.find((v: Vehicle) => v.id == id);
    if (!vehicle) {
      return null;
    }

    return vehicle;
  }
}
