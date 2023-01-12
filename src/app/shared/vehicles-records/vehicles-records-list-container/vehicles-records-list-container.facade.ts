import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { VehiclesRecordsService } from 'src/app/core/services/vehicles-records.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class VehiclesRecordsListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private vehiclesRecordsService: VehiclesRecordsService
  ) {}

  //#region Observables
  vehiclesRecords$(): Observable<VehicleRecordModel[]> {
    return this.state.vehiclesRecords.vehiclesRecords.$();
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

  loadVehiclesRecords(): void {
    this.subscriptions.add(
      this.vehiclesRecordsService
        .getVehiclesRecords()
        .pipe(tap(this.storeVehiclesRecords.bind(this)))
        .subscribe()
    );
  }

  destroyVehiclesRecords(): void {
    this.state.vehiclesRecords.vehiclesRecords.set([]);
  }

  destroyIsLoading(): void {
    this.state.resources.isLoading.set(true);
  }
  //#endregion

  //#region Private Methods
  private storeVehiclesRecords(vehiclesRecords: VehicleRecordModel[]): void {
    this.state.vehiclesRecords.vehiclesRecords.set(vehiclesRecords);
    this.state.resources.isLoading.set(false);
  }
  //#endregion
}
