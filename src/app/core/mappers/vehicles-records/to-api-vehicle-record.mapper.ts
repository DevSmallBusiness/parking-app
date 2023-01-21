import { Injectable } from '@angular/core';

import { fromServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { fromTypeServiceEnum } from 'src/app/core/enums/type-service.enum';
import { fromTypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';
import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';

@Injectable({
  providedIn: 'root',
})
export class ToApiVehicleRecordMapper {
  map(vehicleRecord: VehicleRecordModel): any {
    return {
      _id: vehicleRecord?._id,
      typeService: fromTypeServiceEnum(vehicleRecord?.typeService),
      typeVehicle: fromTypeVehicleEnum(vehicleRecord?.typeVehicle),
      plate: vehicleRecord?.plate,
      ownerName: vehicleRecord?.ownerName,
      ownerNumber: vehicleRecord?.ownerNumber,
      entryDate: vehicleRecord?.entryDate,
      departureDate: vehicleRecord?.departureDate,
      receivableValue: vehicleRecord?.receivableValue,
      moneyPaid: vehicleRecord?.moneyPaid,
      remainigMoney: vehicleRecord?.remainigMoney,
      serviceState: fromServiceStatesEnum(vehicleRecord?.serviceState),
    };
  }
}
