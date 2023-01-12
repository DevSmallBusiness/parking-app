import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToApiVehicleRecordMapper {
  map(vehicleRecord: VehicleRecordModel): any {
    return {
      id: vehicleRecord?.id,
      typeService: vehicleRecord?.typeService,
      typeVehicle: vehicleRecord?.typeVehicle,
      plate: vehicleRecord?.plate,
      ownerName: vehicleRecord?.ownerName,
      ownerNumber: vehicleRecord?.ownerNumber,
      entryDate: vehicleRecord?.entryDate,
      departureDate: vehicleRecord?.departureDate,
      receivableValue: vehicleRecord?.receivableValue,
      moneyPaid: vehicleRecord?.moneyPaid,
      remainigMoney: vehicleRecord?.remainigMoney,
      serviceState: vehicleRecord?.serviceState,
    };
  }
}
