import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/core/models/vehicle';
import allData from './data';

@Injectable({
  providedIn: 'root',
})
export class Database {
  constructor() {}

  getAll(): Vehicle[] {
    return allData;
  }

  getById(id: string): Vehicle | null {
    const vehicle = allData.find((v: Vehicle) => v.id == id);
    if (!vehicle) {
      return null;
    }

    return vehicle;
  }
}
