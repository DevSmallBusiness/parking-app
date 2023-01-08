import { StateFactory } from './factory.state';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { VehicleModel } from 'src/app/core/models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehiclesState {
  private vehicles$: BehaviorSubject<VehicleModel[]> = new BehaviorSubject([]);

  constructor(private factory: StateFactory) {}

  store() {
    return {
      vehicles: this.factory.state(this.vehicles$),
    };
  }
}
