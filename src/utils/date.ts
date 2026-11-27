const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const calculateDiffInDays = (startDate: Date, endDate: Date): number => {
  const startDateMidnight = new Date(startDate).setHours(0, 0, 0, 0);
  const endDateMidnight = new Date(endDate).setHours(0, 0, 0, 0);

  const diff = endDateMidnight - startDateMidnight;
  return Math.round(diff / DAY_IN_MS);
};
