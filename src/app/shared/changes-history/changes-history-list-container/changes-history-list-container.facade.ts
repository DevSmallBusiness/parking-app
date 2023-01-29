import { Injectable } from '@angular/core';
import { Subscription, Observable, EMPTY, catchError, merge } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { OptionModel } from 'src/app/core/models/option';
import { ChangesHistoryService } from 'src/app/core/services/changes-history.service';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ChangesHistoryListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private changesHistoryService: ChangesHistoryService,
    private resourcesService: ResourcesService
  ) {}

  //#region Observables
  changesHistory$(): Observable<ChangeHistoryModel[]> {
    return this.state.changesHistory.changesHistory.$();
  }

  currentChangeHistoryToView$(): Observable<ChangeHistoryModel> {
    return this.state.changesHistory.currentChangeHistoryToView.$();
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

  loadChangesHistory(): void {
    this.subscriptions.add(
      this.changesHistoryService
        .getChangesHistory()
        .pipe(tap(this.storeChangesHistory.bind(this)))
        .subscribe()
    );
  }

  destroyChangesHistory(): void {
    this.state.changesHistory.changesHistory.set([]);
  }

  loadChangeHistory(id: string): void {
    this.destroyChangeHistory();
    const changeHistory = this.state.changesHistory.changesHistory
      .snapshot()
      .find((ch) => ch._id === id);
    this.state.changesHistory.currentChangeHistoryToView.set(changeHistory);
  }

  destroyChangeHistory(): void {
    this.state.changesHistory.currentChangeHistoryToView.set(null);
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

  createChangeHistory(changeHistory: ChangeHistoryModel): void {
    const callback = this.loadChangesHistory.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.changesHistoryService
        .createChangeHistory(changeHistory)
        .pipe(
          tap(this.notify.bind(this, 'complete', callback)),
          tap(this.storeCanCloseModal.bind(this, true)),
          catchError(this.notify.bind(this, 'error', null)),
          finalize(this.notifyClose.bind(this))
        )
        .subscribe()
    );
  }

  deleteChangeHistory(id: string): void {
    const callback = this.loadChangesHistory.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.changesHistoryService
        .deleteChangeHistory(id)
        .pipe(
          tap(this.notify.bind(this, 'complete', callback)),
          catchError(this.notify.bind(this, 'error', null)),
          finalize(this.notifyClose.bind(this))
        )
        .subscribe()
    );
  }

  deleteAllChangesHistory(): void {
    const callback = this.loadChangesHistory.bind(this);

    this.notify('init');
    this.subscriptions.add(
      this.changesHistoryService
        .deleteAllChangesHistory()
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

  private storeChangesHistory(changesHistory: ChangeHistoryModel[]): void {
    this.state.changesHistory.changesHistory.set(changesHistory);
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
