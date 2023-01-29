import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ToApiVehicleRecordMapper } from 'src/app/core/mappers/vehicles-records/to-api-vehicle-record.mapper';
import { ApiToVehiclesRecordsMapper } from 'src/app/core/mappers/vehicles-records/api-to-vehicles-records.mapper';
import { FilterModel } from 'src/app/core/models/filter';
import { HttpService } from './generals/http.service';
import { URL_RESOURCE } from '../resources/url.resource';
import { VehicleRecordModel } from '../models/vehicle-record';

@Injectable({
  providedIn: 'root',
})
export class VehiclesRecordsService {
  constructor(
    private httpService: HttpService,
    private apiToVehiclesRecordsMapper: ApiToVehiclesRecordsMapper,
    private toApiVehicleRecordMapper: ToApiVehicleRecordMapper
  ) {}

  getVehiclesRecords(filter: FilterModel): Observable<{
    vehiclesRecords: VehicleRecordModel[];
    filter: FilterModel;
  }> {
    const url = URL_RESOURCE.paginatedVehiclesRecords;
    const body = JSON.stringify(filter);

    return this.httpService.post(url, body).pipe(
      map(({ result, filter }) => ({
        vehiclesRecords:
          this.apiToVehiclesRecordsMapper.mapVehiclesRecords(result),
        filter,
      }))
    );
  }

  createVehicleRecord(vehicleRecord: VehicleRecordModel): Observable<unknown> {
    const url = URL_RESOURCE.vehiclesRecords;
    const request = this.toApiVehicleRecordMapper.map(vehicleRecord);
    return this.httpService.post(url, request);
  }

  updateVehicleRecord(vehicleRecord: VehicleRecordModel): Observable<string> {
    const url = URL_RESOURCE.vehiclesRecords;
    const request = this.toApiVehicleRecordMapper.map(vehicleRecord);
    return this.httpService
      .put(url, request)
      .pipe(map(({ result }) => result?._id));
  }

  updateExpiredStatusToVehiclesRecords(): Observable<any> {
    const url = URL_RESOURCE.updateExpiredStatusToVehiclesRecords;
    return this.httpService.post(url);
  }

  deleteVehicleRecord(id: string): Observable<any> {
    const url = URL_RESOURCE.deleteVehicleRecord(id);
    return this.httpService.delete(url);
  }

  deleteVehiclesRecordsByField({ field, value }): Observable<any> {
    const url = URL_RESOURCE.deleteVehiclesRecordsByField(field, value);
    return this.httpService.delete(url);
  }
}
