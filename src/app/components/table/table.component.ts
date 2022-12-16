import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vehicle } from 'src/app/core/models/vehicle';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() items!: any[];
  @Input() columns!: any[];
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter();
  @Output() editClicked: EventEmitter<Vehicle> = new EventEmitter();

  handleDelete(id: string): void {
    this.deleteClicked.emit(id);
  }

  handleEdit(vehicle: Vehicle): void {
    this.editClicked.emit(vehicle);
  }
}
