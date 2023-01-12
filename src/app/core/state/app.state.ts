import { Injectable } from '@angular/core';
import { ChangesHistoryState } from './changes-history.state';
import { NotificationsState } from './notifications.state';
import { ResourcesState } from './resources.state';
import { VehiclesRecordsState } from './vehicles-records.state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(
    private resourcesState: ResourcesState,
    private vehiclesRecordsState: VehiclesRecordsState,
    private changesHistoryState: ChangesHistoryState,
    private notificationsState: NotificationsState
  ) {}

  get resources() {
    return this.resourcesState.store();
  }

  get vehiclesRecords() {
    return this.vehiclesRecordsState.store();
  }

  get changesHistory() {
    return this.changesHistoryState.store();
  }

  get notifications() {
    return this.notificationsState.store();
  }
}
