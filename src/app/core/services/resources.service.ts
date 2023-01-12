import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { OptionModel } from 'src/app/core/models/option';
import { TypeVehicleEnum } from 'src/app/core/enums/type-vehicle.enum';
import { TypeServiceEnum } from 'src/app/core/enums/type-service.enum';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  getTypesServices(): Observable<OptionModel[]> {
    const typesServices = [
      { id: TypeServiceEnum.hours, label: 'Por Hora' },
      { id: TypeServiceEnum.day, label: 'Por Día' },
      { id: TypeServiceEnum.month, label: 'Por Mes' },
    ];

    return of(typesServices);
  }

  getTypesVehicles(): Observable<OptionModel[]> {
    const typesVehicles = [
      { id: TypeVehicleEnum.car, label: 'Carro' },
      { id: TypeVehicleEnum.motorcycle, label: 'Moto' },
    ];

    return of(typesVehicles);
  }
}
