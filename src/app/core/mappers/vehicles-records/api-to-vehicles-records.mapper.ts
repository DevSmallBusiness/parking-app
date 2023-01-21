import { Injectable } from '@angular/core';

import { toServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { toTypeServiceEnum } from 'src/app/core/enums/type-service.enum';
import { toTypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';
import { VehicleRecordModel } from 'src/app/core/models/vehicle-record';

@Injectable({
  providedIn: 'root',
})
export class ApiToVehiclesRecordsMapper {
  mapVehiclesRecords(result: any[]): VehicleRecordModel[] {
    if (!result.length) {
      return [];
    }

    return result.map(this.mapVehicleRecord.bind(this));
  }

  mapVehicleRecord(vehicleRecord: any): VehicleRecordModel {
    return {
      _id: vehicleRecord?._id,
      typeService: toTypeServiceEnum(vehicleRecord?.typeService),
      typeVehicle: toTypeVehicleEnum(vehicleRecord?.typeVehicle),
      plate: vehicleRecord?.plate,
      ownerName: vehicleRecord?.ownerName,
      ownerNumber: vehicleRecord?.ownerNumber,
      entryDate: vehicleRecord?.entryDate,
      departureDate: vehicleRecord?.departureDate,
      receivableValue: vehicleRecord?.receivableValue,
      moneyPaid: vehicleRecord?.moneyPaid,
      remainigMoney: vehicleRecord?.remainigMoney,
      serviceState: toServiceStatesEnum(vehicleRecord?.serviceState),
    };
  }
}
