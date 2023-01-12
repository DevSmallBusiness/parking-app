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
  @Input() canCloseModal: boolean;
  @Output() createVehicle: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() updateVehicle: EventEmitter<VehicleRecordModel> =
    new EventEmitter();
  @Output() deleteVehicle: EventEmitter<string> = new EventEmitter();
  @Output() loadVehicleToUpdate: EventEmitter<string> = new EventEmitter();
  private vehicleId: string;

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

  handleCreateVehicle(vehicle: VehicleRecordModel): void {
    this.createVehicle.emit(vehicle);
  }

  handleUpdateVehicle(vehicle: VehicleRecordModel): void {
    this.updateVehicle.emit(vehicle);
  }

  handleDeleteVehicle(): void {
    this.deleteVehicle.emit(this.vehicleId);
  }

  setVehicleId(vehicleId: string): void {
    this.vehicleId = vehicleId;
  }

  handleLoadVehicleToUpdate(vehicleId: string): void {
    this.loadVehicleToUpdate.emit(vehicleId);
  }
}
