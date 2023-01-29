import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpService } from './generals/http.service';
import { ChangeHistoryModel } from 'src/app/core/models/change-history';
import { URL_RESOURCE } from '../resources/url.resource';
import { ApiToChangesHistoryMapper } from '../mappers/changes-history/api-to-changes-history.mapper';
import { ToApiChangesHistoryMapper } from '../mappers/changes-history/to-api-changes-history.mapper';

@Injectable({
  providedIn: 'root',
})
export class ChangesHistoryService {
  constructor(
    private httpService: HttpService,
    private apiToChangesHistoryMapper: ApiToChangesHistoryMapper,
    private toApiChangesHistoryMapper: ToApiChangesHistoryMapper
  ) {}

  getChangesHistory(): Observable<ChangeHistoryModel[]> {
    const url = URL_RESOURCE.changesHistory;
    return this.httpService
      .get(url)
      .pipe(
        map(({ result }) =>
          this.apiToChangesHistoryMapper.mapChangesHistory(result)
        )
      );
  }

  createChangeHistory(changeHistory: ChangeHistoryModel): Observable<unknown> {
    const url = URL_RESOURCE.changesHistory;
    const request = this.toApiChangesHistoryMapper.map(changeHistory);
    return this.httpService.post(url, request);
  }

  updateChangeHistory(changeHistory: ChangeHistoryModel): Observable<string> {
    const url = URL_RESOURCE.changesHistory;
    const request = this.toApiChangesHistoryMapper.map(changeHistory);
    return this.httpService
      .put(url, request)
      .pipe(map(({ result }) => result?._id));
  }

  deleteChangeHistory(id: string): Observable<any> {
    const url = URL_RESOURCE.deleteChangeHistory(id);
    return this.httpService.delete(url);
  }

  deleteAllChangesHistory(): Observable<any> {
    const url = URL_RESOURCE.changesHistory;
    return this.httpService.delete(url);
  }
}
