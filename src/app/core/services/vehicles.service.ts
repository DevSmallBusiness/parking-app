import { URL_RESOURCE } from './../resources/url.resource';
import { VehicleModel } from './../models/vehicle';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './generals/http.service';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private httpService: HttpService) {}

  getVehicles(): Observable<VehicleModel[]> {
    const url = URL_RESOURCE.vehicles;
    return this.httpService.get(url);
  }
}
