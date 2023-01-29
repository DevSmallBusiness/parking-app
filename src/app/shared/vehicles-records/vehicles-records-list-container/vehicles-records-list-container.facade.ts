import { Injectable } from '@angular/core';
import {
  Subscription,
  Observable,
  merge,
  EMPTY,
  catchError,
  finalize,
} from 'rxjs';
import { tap } from 'rxjs/operators';
import { FilterModel } from 'src/app/core/models/filter';
import { OptionModel } from 'src/app/core/models/option';

import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { VehiclesRecordsService } from 'src/app/core/services/vehicles-records.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class VehiclesRecordsListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private vehiclesRecordsService: VehiclesRecordsService,
    private resourcesService: ResourcesService
  ) {}

  //#region Observables
  vehiclesRecords$(): Observable<VehicleRecordModel[]> {
    return this.state.vehiclesRecords.vehiclesRecords.$();
  }

  currentVehicleRecordToUpdate$(): Observable<VehicleRecordModel> {
    return this.state.vehiclesRecords.currentVehicleRecordToUpdate.$();
  }

  filter$(): Observable<FilterModel> {
    return this.state.resources.filter.$();
  }

  isSidebarClose$(): Observable<boolean> {
    return this.state.resources.isSidebarClose.$();
  }

  isLoading$(): Observable<boolean> {
    return this.state.resources.isLoading.$();
  }

  typesServices$(): Observable<OptionModel[]> {
    return this.state.resources.typesServices.$();
  }

  typesVehicles$(): Observable<OptionModel[]> {
    return this.state.resources.typesVehicles.$();
  }

  canCloseModal$(): Observable<boolean> {
    return this.state.resources.canCloseModal.$();
  }
  //#endregion

  //#region Public Methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  setFilter(filter?: FilterModel): void {
    this.state.resources.filter.set({
      from: filter?.from ? (filter?.from - 1) * 10 : 0,
      limit: filter?.limit ?? 10,
      sort: { ownerName: 'asc' },
      term: filter?.term,
      total: filter?.total,
      currentPage: filter?.currentPage ?? 1,
    });

    this.loadVehiclesRecords();
  }

  loadVehiclesRecords(): void {
    const filter = this.state.resources.filter.snapshot();

    this.subscriptions.add(
      this.vehiclesRecordsService
        .getVehiclesRecords(filter)
        .pipe(tap(this.storeVehiclesRecords.bind(this)))
        .subscribe()
    );
  }

  destroyVehiclesRecords(): void {
    this.state.vehiclesRecords.vehiclesRecords.set([]);
  }

  loadVehicleRecord(id: string): void {
    this.destroyVehicleRecord();
    const vehicleRecord = this.state.vehiclesRecords.vehiclesRecords
      .snapshot()
      .find((vr) => vr._id === id);
    this.state.vehiclesRecords.currentVehicleRecordToUpdate.set(vehicleRecord);
  }

  destroyVehicleRecord(): void {
    this.state.vehiclesRecords.currentVehicleRecordToUpdate.set(null);
  }

  loadResources(): void {
    this.subscriptions.add(
      merge(
        this.resourcesService
          .getTypesServices()
          .pipe(tap(this.storeTypesServices.bind(this))),
        this.resourcesService
          .getTypesVehicles()
          .pipe(tap(this.storeTypesVehicles.bind(this)))
      ).subscribe()
    );
  }

  destroyResources(): void {
    this.state.resources.typesServices.set([]);
    this.state.resources.typesVehicles.set([]);
  }

  createVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    const callback = this.loadVehiclesRecords.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.vehiclesRecordsService
        .createVehicleRecord(vehicleRecord)
        .pipe(
          tap(this.notify.bind(this, 'complete', callback)),
          tap(this.storeCanCloseModal.bind(this, true)),
          catchError(this.notify.bind(this, 'error', null)),
          finalize(this.notifyClose.bind(this))
        )
        .subscribe()
    );
  }

  updateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    const callback = this.loadVehiclesRecords.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.vehiclesRecordsService
        .updateVehicleRecord(vehicleRecord)
        .pipe(
          tap(this.notify.bind(this, 'complete', callback)),
          tap(this.storeCanCloseModal.bind(this, true)),
          catchError(this.notify.bind(this, 'error', null)),
          finalize(this.notifyClose.bind(this))
        )
        .subscribe()
    );
  }

  deleteVehicleRecord(id: string): void {
    const callback = this.loadVehiclesRecords.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.vehiclesRecordsService
        .deleteVehicleRecord(id)
        .pipe(
          tap(this.notify.bind(this, 'complete', callback)),
          catchError(this.notify.bind(this, 'error', null)),
          finalize(this.notifyClose.bind(this))
        )
        .subscribe()
    );
  }

  deleteVehiclesRecordsByField({ field, value }): void {
    const callback = this.loadVehiclesRecords.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.vehiclesRecordsService
        .deleteVehiclesRecordsByField({ field, value })
        .pipe(
          tap(this.notify.bind(this, 'complete', callback)),
          catchError(this.notify.bind(this, 'error', null)),
          finalize(this.notifyClose.bind(this))
        )
        .subscribe()
    );
  }

  destroyIsLoading(): void {
    this.state.resources.isLoading.set(true);
  }

  destroyCanCloseModal(): void {
    this.state.resources.canCloseModal.set(null);
  }
  //#endregion

  //#region Private Methods
  private notify(
    key: 'init' | 'complete' | 'error',
    callback: () => void = null
  ): Observable<never> {
    const messages = {
      init: 'Estamos procesando su solicitud',
      complete: 'Su solicitud se completó con éxito',
      error: 'El proceso que solicitaste falló, inténtalo de nuevo más tarde',
    };

    this.state.notifications.notification.set(messages[key]);

    // eslint-disable-next-line angular/timeout-service
    if (!!callback && !(callback instanceof Observable)) {
      setTimeout(() => callback(), 2000);
    }
    return EMPTY;
  }

  private notifyClose(callback: () => void = null): void {
    if (this.canClose()) {
      // eslint-disable-next-line angular/timeout-service
      setTimeout(() => {
        this.state.notifications.notification.set(null);
        if (callback) {
          callback();
        }
      }, 1000);
    }
  }

  private canClose(): boolean {
    const lastMessage = this.state.notifications.notification.snapshot();
    const errorMessage = 'La solicitud falló';
    return !lastMessage?.startsWith(errorMessage);
  }

  private storeVehiclesRecords({
    vehiclesRecords,
    filter,
  }: {
    vehiclesRecords: VehicleRecordModel[];
    filter: FilterModel;
  }): void {
    const filterSate = this.state.resources.filter.snapshot();
    this.state.vehiclesRecords.vehiclesRecords.set(vehiclesRecords);
    this.state.resources.filter.set({
      ...filter,
      currentPage: filterSate.currentPage,
    });
    this.state.resources.isLoading.set(false);
  }

  private storeTypesServices(typesServices: OptionModel[]): void {
    this.state.resources.typesServices.set(typesServices);
  }

  private storeTypesVehicles(typesVehicles: OptionModel[]): void {
    this.state.resources.typesVehicles.set(typesVehicles);
  }

  private storeCanCloseModal(value: boolean): void {
    this.state.resources.canCloseModal.set(value);
  }
  //#endregion
}
