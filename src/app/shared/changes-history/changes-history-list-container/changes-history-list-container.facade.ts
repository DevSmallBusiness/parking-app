import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { ChangesHistoryService } from 'src/app/core/services/changes-history.service';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ChangesHistoryListContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private changesHistoryService: ChangesHistoryService
  ) {}

  //#region Observables
  changesHistory$(): Observable<ChangeHistoryModel[]> {
    return this.state.changesHistory.changesHistory.$();
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

  destroyIsLoading(): void {
    this.state.resources.isLoading.set(true);
  }
  //#endregion

  //#region Private Methods
  private storeChangesHistory(changesHistory: ChangeHistoryModel[]): void {
    this.state.changesHistory.changesHistory.set(changesHistory);
    this.state.resources.isLoading.set(false);
  }
  //#endregion
}
