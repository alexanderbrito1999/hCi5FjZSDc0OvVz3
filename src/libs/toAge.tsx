export const toAge = (certification: number) => {
  switch (true) {
    case certification === 1:
      return "2+";
    case certification === 2:
      return "5+";
    case certification === 4:
      return "7+";
    case certification === 4:
      return "13+";
    case certification === 5:
      return "15+";
    case certification === 6:
      return "17+";
    case certification === 0:
      return "NR";
    default:
      return "NR";
  }
};
