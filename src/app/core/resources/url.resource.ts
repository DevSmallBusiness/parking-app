import { environment } from 'src/environments/environment';

export const URL_RESOURCE = {
  vehiclesRecords: `${environment.apiUrl}/vehicles`,
  paginatedVehiclesRecords: `${environment.apiUrl}/vehicles/paginated`,
  deleteVehicleRecord: (id: string) => `${environment.apiUrl}/vehicles/${id}`,
  changesHistory: `${environment.apiUrl}/history`,
  deleteChangeHistory: (id: string) => `${environment.apiUrl}/history/${id}`,
};
