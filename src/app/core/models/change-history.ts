import { ServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { TypeServiceEnum } from 'src/app/core/enums/type-service.enum';
import { TypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';

export interface ChangeHistoryModel {
  _id?: string;
  typeService?: TypeServiceEnum;
  typeVehicle?: TypeVehicleEnum;
  plate?: string;
  ownerName?: string;
  ownerNumber?: string;
  entryDate?: Date;
  departureDate?: Date;
  creationDate?: Date;
  receivableValue?: number;
  moneyPaid?: number;
  remainigMoney?: number;
  serviceState?: ServiceStatesEnum;
}
