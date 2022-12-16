import { ServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { TypeServiceEnum } from 'src/app/core/enums/type-service.enum';
import { TypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';

export interface Vehicle {
  id?: string;
  typeService?: TypeServiceEnum;
  typeVehicle?: TypeVehicleEnum;
  plate?: string;
  ownerName?: string;
  ownerNumber?: string;
  entryDate?: Date;
  departureDate?: Date;
  receivableValue?: string;
  moneyPaid?: string;
  remainigMoney?: string;
  serviceState?: ServiceStatesEnum;
}
