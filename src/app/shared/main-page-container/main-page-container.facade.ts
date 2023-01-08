import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VehicleModel } from 'src/app/core/models/vehicle';
import { VehiclesService } from 'src/app/core/services/vehicles.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class MainPageContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private vehiclesService: VehiclesService
  ) {}

  //#region Observables
  vehicles$(): Observable<VehicleModel[]> {
    return this.state.vehicles.vehicles.$();
  }

  isSidebarClose$(): Observable<boolean> {
    return this.state.resources.isSidebarClose.$();
  }

  isLoading$(): Observable<boolean> {
    return this.state.resources.isLoading.$();
  }
  //#endregion

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  loadVehicles(): void {
    this.subscriptions.add(
      this.vehiclesService
        .getVehicles()
        .pipe(tap(this.storeVehicles.bind(this)))
        .subscribe()
    );
  }

  destroyVehicles(): void {
    this.state.vehicles.vehicles.set([]);
  }

  destroyIsLoading(): void {
    this.state.resources.isLoading.set(true);
  }
  //#endregion

  //#region Private Methods
  private storeVehicles(vehicles: VehicleModel[]): void {
    this.state.vehicles.vehicles.set(vehicles);
    this.state.resources.isLoading.set(false);
  }
  //#endregion
}
