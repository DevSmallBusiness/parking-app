import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpService } from './generals/http.service';
import { URL_RESOURCE } from '../resources/url.resource';
import { VehicleRecordModel } from '../models/vehicle-record';

@Injectable({
  providedIn: 'root',
})
export class VehiclesRecordsService {
  constructor(private httpService: HttpService) {}

  getVehiclesRecords(): Observable<VehicleRecordModel[]> {
    const url = URL_RESOURCE.vehiclesRecords;
    return this.httpService.get(url);
  }
}
