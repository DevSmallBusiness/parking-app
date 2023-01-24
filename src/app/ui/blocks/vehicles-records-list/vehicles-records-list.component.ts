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
  @ViewChild('modalUpdateRef') modalUpdateRef: ModalComponent;
  @Input() vehiclesRecords: VehicleRecordModel[];
  @Input() vehicleToUpdate: VehicleRecordModel;
  @Input() isSidebarClose: boolean;
  @Input() isLoading: boolean;
  @Input() typesServices: OptionModel[];
  @Input() typesVehicles: OptionModel[];
  @Input() canCloseModal: boolean;
  @Input() filter: FilterModel;
  @Output() deleteVehicleRecord: EventEmitter<string> = new EventEmitter();
  @Output() filterVehiclesRecords: EventEmitter<FilterModel> =
    new EventEmitter();
  @Output() createVehicleRecord: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() updateVehicleRecord: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() loadVehicleRecordToUpdate: EventEmitter<string> =
    new EventEmitter();
  private vehicleRecordId: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  get pages(): number {
    return Math.ceil(this.filter.total / 10);
  }

  ngOnChanges(): void {
    if (!this.canCloseModal) {
      return;
    }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.modalUpdateRef.close();
    this.cdRef.detectChanges();
  }

  handleCreateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    vehicleRecord.serviceState = this.validateServiceStatus(
      vehicleRecord?.receivableValue,
      vehicleRecord?.moneyPaid
    );
    this.createVehicleRecord.emit(vehicleRecord);
  }

  handleUpdateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
    vehicleRecord.serviceState = this.validateServiceStatus(
      vehicleRecord?.receivableValue,
      vehicleRecord?.moneyPaid
    );
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

  handleFilterVehiclesRecords(data: any): void {
    this.filter =
      typeof data === 'number'
        ? { ...this.filter, from: data }
        : { ...this.filter, term: data.ownerName === '' ? null : data };
    this.filterVehiclesRecords.emit(this.filter);
  }

  validateServiceStatus(
    receivableValue: number,
    moneyPaid: number
  ): ServiceStatesEnum {
    let serviceState: ServiceStatesEnum;
    const remainingMoney = receivableValue - moneyPaid;
    remainingMoney === 0
      ? (serviceState = ServiceStatesEnum.paid)
      : (serviceState = ServiceStatesEnum.outstanding);

    return serviceState;
  }
}
