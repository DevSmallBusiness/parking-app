import { Injectable } from '@angular/core';
import { ResourcesState } from './resources.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(private resourcesState: ResourcesState) {}

  get resources() {
    return this.resourcesState.store();
  }
}
