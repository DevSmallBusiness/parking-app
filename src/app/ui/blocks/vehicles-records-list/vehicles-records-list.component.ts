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
  @Output() createVehicleRecord: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() updateVehicleRecord: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() deleteVehicleRecord: EventEmitter<string> = new EventEmitter();
  @Output() loadVehicleRecordToUpdate: EventEmitter<string> =
    new EventEmitter();
  private vehicleRecordId: string;

  constructor(private cdRef: ChangeDetectorRef) {}

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
    this.createVehicleRecord.emit(vehicleRecord);
  }

  handleUpdateVehicleRecord(vehicleRecord: VehicleRecordModel): void {
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
}
