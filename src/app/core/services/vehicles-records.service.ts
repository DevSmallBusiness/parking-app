import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ToApiVehicleRecordMapper } from 'src/app/core/mappers/vehicles-records/to-api-vehicle-record.mapper';
import { ApiToVehiclesRecordsMapper } from 'src/app/core/mappers/vehicles-records/api-to-vehicles-records.mapper';
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

  getVehiclesRecords(): Observable<VehicleRecordModel[]> {
    const url = URL_RESOURCE.vehiclesRecords;
    return this.httpService
      .get(url)
      .pipe(
        map((result: any[]) =>
          this.apiToVehiclesRecordsMapper.mapVehiclesRecords(result)
        )
      );
  }

  createVehicleRecord(vehicleRecord: VehicleRecordModel): Observable<unknown> {
    const url = URL_RESOURCE.vehiclesRecords;
    const request = this.toApiVehicleRecordMapper.map(vehicleRecord);
    return this.httpService.post(url, request);
  }

  updateVehicleRecord(vehicleRecord: VehicleRecordModel): Observable<string> {
    const url = URL_RESOURCE.vehiclesRecords;
    const formData = this.toApiVehicleRecordMapper.map(vehicleRecord);
    return this.httpService
      .post(url, formData)
      .pipe(map(({ result }) => result?._id));
  }

  deleteVehicleRecord(id: string): Observable<any> {
    const url = URL_RESOURCE.deleteVehicleRecord(id);
    return this.httpService.delete(url);
  }
}
