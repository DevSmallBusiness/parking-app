import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpService } from './generals/http.service';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { URL_RESOURCE } from '../resources/url.resource';

@Injectable({
  providedIn: 'root',
})
export class ChangesHistoryService {
  constructor(private httpService: HttpService) {}

  getChangesHistory(): Observable<ChangeHistoryModel[]> {
    const url = URL_RESOURCE.changesHistory;
    return this.httpService.get(url);
  }
}
