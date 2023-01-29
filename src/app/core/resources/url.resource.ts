import { environment } from 'src/environments/environment';

export const URL_RESOURCE = {
  vehiclesRecords: `${environment.apiUrl}/vehicles`,
  paginatedVehiclesRecords: `${environment.apiUrl}/vehicles/paginated`,
  deleteVehicleRecord: (id: string) => `${environment.apiUrl}/vehicles/${id}`,
  deleteVehiclesRecordsByField: (field: string, value: string) =>
    `${environment.apiUrl}/vehicles?field=${field}&value=${value}`,
  changesHistory: `${environment.apiUrl}/history`,
  deleteChangeHistory: (id: string) => `${environment.apiUrl}/history/${id}`,
};
