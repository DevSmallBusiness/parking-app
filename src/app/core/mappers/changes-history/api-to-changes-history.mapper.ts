import { Injectable } from '@angular/core';

import { toServiceStatesEnum } from 'src/app/core/enums/service-states.enum';
import { toTypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';
import { toTypeServiceEnum } from 'src/app/core/enums/type-service.enum';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';

@Injectable({
  providedIn: 'root',
})
export class ApiToChangesHistoryMapper {
  mapChangesHistory(result: any[]): ChangeHistoryModel[] {
    if (!result.length) {
      return [];
    }

    return result.map(this.mapChangeHistory.bind(this));
  }

  mapChangeHistory(changeHistory: any): ChangeHistoryModel {
    return {
      id: changeHistory?.id,
      typeService: toTypeServiceEnum(changeHistory?.typeService),
      typeVehicle: toTypeVehicleEnum(changeHistory?.typeVehicle),
      plate: changeHistory?.plate,
      ownerName: changeHistory?.ownerName,
      ownerNumber: changeHistory?.ownerNumber,
      entryDate: changeHistory?.entryDate,
      departureDate: changeHistory?.departureDate,
      receivableValue: changeHistory?.receivableValue,
      moneyPaid: changeHistory?.moneyPaid,
      remainigMoney: changeHistory?.remainigMoney,
      serviceState: toServiceStatesEnum(changeHistory?.serviceState),
      creationDate: changeHistory?.creationDate,
    };
  }
}
