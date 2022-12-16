import { Vehicle } from 'src/app/core/models/vehicle';
import { toServiceStatesEnum } from '../enums/service-states.enum';
import { toTypeServiceEnum } from '../enums/type-service.enum';
import { toTypeVehicleEnum } from '../enums/type-vehicle.enum';

const data: Vehicle[] = [
  {
    id: '1233423243342',
    typeService: toTypeServiceEnum('hours'),
    typeVehicle: toTypeVehicleEnum('car'),
    plate: '123',
    ownerName: 'Steven',
    ownerNumber: '3013232431',
    entryDate: new Date(),
    departureDate: new Date(),
    receivableValue: '234000',
    moneyPaid: '23122',
    remainigMoney: '20000',
    serviceState: toServiceStatesEnum('outstanding'),
  },
];

export default data;
