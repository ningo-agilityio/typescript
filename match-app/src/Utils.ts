export const parseDate = (date: string): Date => {
  // 28/10/2028
  const dateParts = date.split("/").map((value: string): number => {
    return parseInt(value);
  })

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
}