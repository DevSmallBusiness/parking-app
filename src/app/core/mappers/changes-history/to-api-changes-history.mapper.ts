import { Injectable } from '@angular/core';

import { ChangeHistoryModel } from 'src/app/core/models/change-history';

@Injectable({
  providedIn: 'root',
})
export class ToApiChangesHistoryMapper {
  map(changeHistory: ChangeHistoryModel): any {
    return {
      id: changeHistory?.id,
      typeService: changeHistory?.typeService,
      typeVehicle: changeHistory?.typeVehicle,
      plate: changeHistory?.plate,
      ownerName: changeHistory?.ownerName,
      ownerNumber: changeHistory?.ownerNumber,
      entryDate: changeHistory?.entryDate,
      departureDate: changeHistory?.departureDate,
      receivableValue: changeHistory?.receivableValue,
      moneyPaid: changeHistory?.moneyPaid,
      remainigMoney: changeHistory?.remainigMoney,
      serviceState: changeHistory?.serviceState,
      creationDate: changeHistory?.creationDate,
    };
  }
}
