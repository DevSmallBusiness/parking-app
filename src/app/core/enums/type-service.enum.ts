export enum TypeServiceEnum {
  hours = 'hours',
  day = 'day',
  month = 'month',
}

export const toTypeServiceEnum = (key: string): TypeServiceEnum => {
  const options = new Map();
  options.set('hours', TypeServiceEnum.hours);
  options.set('day', TypeServiceEnum.day);
  options.set('month', TypeServiceEnum.month);

  return options.get(key?.toString().toLowerCase());
};
