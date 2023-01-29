import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { VehiclesRecordsListContainerFacade } from './vehicles-records-list-container.facade';
import { OptionModel } from 'src/app/core/models/option';
import { FilterModel } from 'src/app/core/models/filter';

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
  vehicleToUpdate$: Observable<VehicleRecordModel>;
  filter$: Observable<FilterModel>;
  isSidebarClose$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  typesServices$: Observable<OptionModel[]>;
  typesVehicles$: Observable<OptionModel[]>;
  canCloseModal$: Observable<boolean>;

  constructor(private facade: VehiclesRecordsListContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.setFilter();
    this.facade.loadResources();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyVehiclesRecords();
    this.facade.destroyIsLoading();
    this.facade.destroyResources();
    this.facade.destroySubscriptions();
  }

  handleCreateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    this.facade.createVehicleRecord(vehicleRecord);
  }

  handleUpdateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    this.facade.updateVehicleRecord(vehicleRecord);
  }

  handleDeleteVehicleRecord(id: string): void {
    this.facade.deleteVehicleRecord(id);
  }

  handleLoadVehicleRecordToUpdate(id: string): void {
    this.facade.destroyCanCloseModal();
    this.facade.loadVehicleRecord(id);
  }

  handleFilterVehiclesRecords({ filter, isSearching }): void {
    this.facade.setFilter(filter, isSearching);
  }

  handleDeleteVehiclesRecordsByField({ field, value }): void {
    this.facade.deleteVehiclesRecordsByField({ field, value });
  }

  private initializeSubscriptions(): void {
    this.vehiclesRecords$ = this.facade.vehiclesRecords$();
    this.vehicleToUpdate$ = this.facade.currentVehicleRecordToUpdate$();
    this.filter$ = this.facade.filter$();
    this.isSidebarClose$ = this.facade.isSidebarClose$();
    this.isLoading$ = this.facade.isLoading$();
    this.typesServices$ = this.facade.typesServices$();
    this.typesVehicles$ = this.facade.typesVehicles$();
    this.canCloseModal$ = this.facade.canCloseModal$();
  }
}
