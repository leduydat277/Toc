export const parsePositiveNumber = (value: string, defaultValue: number = 0) => {
  const parsedValue = parseInt(value, 10);
  return isNaN(parsedValue) ? defaultValue : Math.max(parsedValue, 0);
};
