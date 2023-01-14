export interface VehicleRecordModel {
  id?: string;
  typeService?: string;
  typeVehicle?: string;
  plate?: string;
  ownerName?: string;
  ownerNumber?: string;
  entryDate?: Date;
  departureDate?: Date;
  receivableValue?: string;
  moneyPaid?: string;
  remainigMoney?: string;
  serviceState?: string;
}

export interface VehicleRecordDateModel {
  day: string;
  month: string;
  year: string;
}
