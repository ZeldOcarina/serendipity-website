export default function parseStringDate(inputDate) {
  const parts = inputDate.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
