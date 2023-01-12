import { environment } from 'src/environments/environment';

export const URL_RESOURCE = {
  vehiclesRecords: `${environment.apiUrl}/vehicles`,
  deleteVehicleRecord: (id: string) => `${environment.apiUrl}/vehicles/${id}`,
  changesHistory: `${environment.apiUrl}/history`,
};
