export const formatMoneyValue = (value) => {
  if (!value) return '';
  value = typeof value === 'string' ? +value : value;
  return value.toLocaleString('en');
};