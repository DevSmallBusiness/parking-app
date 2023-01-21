import { ServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { TypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';
import { TypeServiceEnum } from 'src/app/core/enums/type-service.enum';
export interface VehicleRecordModel {
  _id?: string;
  typeService?: TypeServiceEnum;
  typeVehicle?: TypeVehicleEnum;
  plate?: string;
  ownerName?: string;
  ownerNumber?: string;
  entryDate?: Date;
  departureDate?: Date;
  receivableValue?: number;
  moneyPaid?: number;
  remainigMoney?: number;
  serviceState?: ServiceStatesEnum;
}

export interface VehicleRecordDateModel {
  day: string;
  month: string;
  year: string;
}
