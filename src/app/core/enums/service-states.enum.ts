export enum ServiceStatesEnum {
  defeated = 'defeated',
  outstanding = 'outstanding',
  paid = 'paid',
}

export const toServiceStatesEnum = (key: string): ServiceStatesEnum => {
  const options = new Map();
  options.set('defeated', ServiceStatesEnum.defeated);
  options.set('outstanding', ServiceStatesEnum.outstanding);
  options.set('paid', ServiceStatesEnum.paid);

  return options.get(key?.toString().toLowerCase());
};
