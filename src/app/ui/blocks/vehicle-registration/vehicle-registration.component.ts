import {
  ChangeDetectionStrategy,
  Component,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { VehicleModel } from 'src/app/core/models/vehicle';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VehicleRegistrationComponent {
  @Input() vehicles: VehicleModel[];
  @Input() isSidebarClose: boolean;
  @Input() isLoading: boolean;
  @Output() addVehicle: EventEmitter<boolean> = new EventEmitter();

  handleCreateVehicle(): void {
    console.log('handleAddRegister');
  }

  handleLoadVehicleToUpdate(id: string): void {
    console.log('handleEditRegister');
  }

  handleDeleteVehicle(): void {
    console.log('handleDeleteRegister');
  }
}
