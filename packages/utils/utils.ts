export const getValueByScope = (value: number, min: number, max: number) => {
  let newValue = Math.max(value, min);
  newValue = Math.min(newValue, max);

  return newValue;
};
