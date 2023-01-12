import { StateFactory } from './factory.state';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { VehicleRecordModel } from '../models/vehicle-record';

@Injectable({
  providedIn: 'root',
})
export class VehiclesRecordsState {
  private vehiclesRecords$: BehaviorSubject<VehicleRecordModel[]> =
    new BehaviorSubject([]);

  constructor(private factory: StateFactory) {}

  store() {
    return {
      vehiclesRecords: this.factory.state(this.vehiclesRecords$),
    };
  }
}
