import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { VehiclesRecordsListContainerFacade } from './vehicles-records-list-container.facade';

@Component({
  selector: 'parking-vehicles-records-list-container',
  templateUrl: './vehicles-records-list-container.component.html',
  styleUrls: ['./vehicles-records-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesRecordsListContainerComponent
  implements OnInit, OnDestroy
{
  vehiclesRecords$: Observable<VehicleRecordModel[]>;
  isSidebarClose$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private facade: VehiclesRecordsListContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadVehiclesRecords();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyVehiclesRecords();
    this.facade.destroyIsLoading();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.vehiclesRecords$ = this.facade.vehiclesRecords$();
    this.isSidebarClose$ = this.facade.isSidebarClose$();
    this.isLoading$ = this.facade.isLoading$();
  }
}
