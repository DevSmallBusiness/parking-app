import { FormVehicleComponent } from './../../forms/form-vehicle/form-vehicle.component';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
  ViewChild,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';
import { ServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { FilterModel } from 'src/app/core/models/filter';
import { OptionModel } from 'src/app/core/models/option';
import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { ModalComponent } from 'src/app/ui/elements/modal/modal.component';

@Component({
  selector: 'parking-vehicles-records-list',
  templateUrl: './vehicles-records-list.component.html',
  styleUrls: ['./vehicles-records-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VehiclesRecordsListComponent implements OnChanges {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @ViewChild('modalDeleteAllRef') modalDeleteAllRef: ModalComponent;
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @ViewChild('formVehicleRef') formVehicleRef: FormVehicleComponent;
  @Input() vehiclesRecords: VehicleRecordModel[];
  @Input() vehicleToUpdate: VehicleRecordModel;
  @Input() isSidebarClose: boolean;
  @Input() isLoading: boolean;
  @Input() typesServices: OptionModel[];
  @Input() typesVehicles: OptionModel[];
  @Input() canCloseModal: boolean;
  @Input() filter: FilterModel;
  @Output() deleteVehicleRecord: EventEmitter<string> = new EventEmitter();
  @Output() filterVehiclesRecords: EventEmitter<{
    filter: FilterModel;
    isSearching: boolean;
  }> = new EventEmitter();
  @Output() createVehicleRecord: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() updateVehicleRecord: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() loadVehicleRecordToUpdate: EventEmitter<string> =
    new EventEmitter();
  @Output() deleteVehiclesRecordsByField: EventEmitter<{
    field: string;
    value: string;
  }> = new EventEmitter();
  private vehicleRecordId: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  get pages(): number {
    return Math.ceil(this.filter.total / 10);
  }

  get showButtonToDeleteAllVehiclesAlreadyPaid(): boolean {
    return this.vehiclesRecords.some((e) => {
      return e.serviceState == 'PAGADO' ? true : false;
    });
  }

  ngOnChanges(): void {
    if (!this.canCloseModal) {
      return;
    }

    this.modalRef?.close();
    this.modalDeleteRef?.close();
    this.modalDeleteAllRef?.close();
    this.modalUpdateRef?.close();
    this.formVehicleRef?.cleanForm();
    this.cdRef.detectChanges();
  }

  handleCreateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    let serviceState: ServiceStatesEnum;
    let remainingMoney = 0;

    remainingMoney = vehicleRecord?.receivableValue - vehicleRecord?.moneyPaid;
    if (remainingMoney === 0) {
      serviceState = ServiceStatesEnum.paid;
      if (!vehicleRecord.departureDate) {
        vehicleRecord.departureDate = new Date();
      }
    } else {
      serviceState = ServiceStatesEnum.outstanding;
    }

    vehicleRecord.serviceState = serviceState;
    vehicleRecord.remainigMoney = remainingMoney;
    this.createVehicleRecord.emit(vehicleRecord);
  }

  handleUpdateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    let serviceState: ServiceStatesEnum;
    let remainingMoney = 0;

    if (vehicleRecord?.receivableValue > 0) {
      remainingMoney =
        vehicleRecord?.receivableValue - vehicleRecord?.moneyPaid;

      if (remainingMoney === 0) {
        serviceState = ServiceStatesEnum.paid;
        if (!vehicleRecord.departureDate) {
          vehicleRecord.departureDate = new Date();
        }
      } else {
        serviceState = ServiceStatesEnum.outstanding;
      }
    } else {
      serviceState = ServiceStatesEnum.outstanding;
    }

    vehicleRecord.serviceState = serviceState;
    vehicleRecord.remainigMoney = remainingMoney;
    this.updateVehicleRecord.emit(vehicleRecord);
  }

  handleDeleteVehicleRecord(): void {
    this.deleteVehicleRecord.emit(this.vehicleRecordId);
  }

  setVehicleRecordId(vehicleRecordId: string): void {
    this.vehicleRecordId = vehicleRecordId;
  }

  handleLoadVehicleRecordToUpdate(vehicleRecordId: string): void {
    this.loadVehicleRecordToUpdate.emit(vehicleRecordId);
  }

  handleDeleteAlreadyPaidVehiclesRecords(): void {
    this.deleteVehiclesRecordsByField.emit({
      field: 'serviceState',
      value: 'PAGADO',
    });
  }

  handleFilterVehiclesRecords(data: any, isSearching: boolean): void {
    this.filter =
      typeof data === 'number'
        ? { ...this.filter, from: data }
        : { ...this.filter, term: data.ownerName === '' ? null : data };
    this.filterVehiclesRecords.emit({ filter: this.filter, isSearching });
  }
}
