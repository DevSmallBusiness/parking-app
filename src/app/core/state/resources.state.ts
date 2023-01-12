import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateFactory } from './factory.state';
import { OptionModel } from 'src/app/core/models/option';

@Injectable({
  providedIn: 'root',
})
export class ResourcesState {
  private canCloseModal$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private isSidebarClose$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private typesServices$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(
    []
  );
  private typesVehicles$: BehaviorSubject<OptionModel[]> = new BehaviorSubject(
    []
  );

  constructor(private factory: StateFactory) {}

  store() {
    return {
      canCloseModal: this.factory.state(this.canCloseModal$),
      isSidebarClose: this.factory.state(this.isSidebarClose$),
      isLoading: this.factory.state(this.isLoading$),
      typesServices: this.factory.state(this.typesServices$),
      typesVehicles: this.factory.state(this.typesVehicles$),
    };
  }
}
