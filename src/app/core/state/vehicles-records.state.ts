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
  private currentVehicleRecordToUpdate$: BehaviorSubject<VehicleRecordModel> =
    new BehaviorSubject(null);

  constructor(private factory: StateFactory) {}

  store() {
    return {
      vehiclesRecords: this.factory.state(this.vehiclesRecords$),
      currentVehicleRecordToUpdate: this.factory.state(
        this.currentVehicleRecordToUpdate$
      ),
    };
  }
}
