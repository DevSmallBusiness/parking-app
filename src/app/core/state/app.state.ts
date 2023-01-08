import { Injectable } from '@angular/core';
import { ResourcesState } from './resources.state';
import { VehiclesState } from './vehicles.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(
    private resourcesState: ResourcesState,
    private vehiclesState: VehiclesState
  ) {}

  get resources() {
    return this.resourcesState.store();
  }

  get vehicles() {
    return this.vehiclesState.store();
  }
}
