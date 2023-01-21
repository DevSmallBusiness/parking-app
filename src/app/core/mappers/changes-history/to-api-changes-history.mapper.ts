import { Injectable } from '@angular/core';

import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { fromServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { fromTypeServiceEnum } from 'src/app/core/enums/type-service.enum';
import { fromTypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';

@Injectable({
  providedIn: 'root',
})
export class ToApiChangesHistoryMapper {
  map(changeHistory: ChangeHistoryModel): any {
    return {
      _id: changeHistory?._id,
      typeService: fromTypeServiceEnum(changeHistory?.typeService),
      typeVehicle: fromTypeVehicleEnum(changeHistory?.typeVehicle),
      plate: changeHistory?.plate,
      ownerName: changeHistory?.ownerName,
      ownerNumber: changeHistory?.ownerNumber,
      entryDate: changeHistory?.entryDate,
      departureDate: changeHistory?.departureDate,
      creationDate: changeHistory?.creationDate,
      receivableValue: changeHistory?.receivableValue,
      moneyPaid: changeHistory?.moneyPaid,
      remainigMoney: changeHistory?.remainigMoney,
      serviceState: fromServiceStatesEnum(changeHistory?.serviceState),
    };
  }
}
