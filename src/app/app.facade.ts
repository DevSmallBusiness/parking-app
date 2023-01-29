import { Injectable } from '@angular/core';
import { merge, Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/core/state/app.state';
import { VehiclesRecordsService } from 'src/app/core/services/vehicles-records.service';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  private subscriptions: Subscription;

  constructor(
    private state: AppState,
    private vehiclesRecordsService: VehiclesRecordsService
  ) {}

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  updateExpiredStatusToVehiclesRecords(): void {
    this.subscriptions.add(
      this.vehiclesRecordsService
        .updateExpiredStatusToVehiclesRecords()
        .subscribe()
    );
  }
  //#endregion
}
