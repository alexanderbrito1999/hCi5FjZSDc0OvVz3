export const toHour = (value: number) => {
  if (value === 0) {
    return "Na";
  }
  let result = "";
  if (value < 60) {
    result = `${value.toFixed(0)} MIN`;
  } else {
    const step01 = (value / 60).toString().split(".");
    const hour = `${step01[0]} H`;
    const minute = step01[1] ? `${Math.round(parseFloat(`0.${step01[1]}`) * 60)} MIN` : "";
    result = `${hour} ${minute}`;
  }
  return result;
};
