export const formatMoneyValue = (value) => {
  value = typeof value === 'string' ? +value : value;
  return value.toLocaleString('en');
};