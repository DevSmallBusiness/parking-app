import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';

@Injectable({
  providedIn: 'root',
})
export class ResourcesState {
  private isSidebarClose$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(private factory: StateFactory) {}

  store() {
    return {
      isSidebarClose: this.factory.state(this.isSidebarClose$),
    };
  }
}
