export const moduls = (value: number, division: number) => {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
};
