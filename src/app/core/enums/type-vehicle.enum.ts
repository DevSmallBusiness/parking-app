export enum TypeVehicleEnum {
  car = 'car',
  motorcycle = 'motorcycle',
}

export const toTypeVehicleEnum = (key: string): TypeVehicleEnum => {
  const options = new Map();
  options.set('car', TypeVehicleEnum.car);
  options.set('motorcycle', TypeVehicleEnum.motorcycle);

  return options.get(key?.toString().toLowerCase());
};
