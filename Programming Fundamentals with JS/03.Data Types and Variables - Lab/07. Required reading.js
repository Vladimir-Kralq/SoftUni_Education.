function printRequiredReading(pageNumber, pageReadingPerHour, days) {
  let totalTime = pageNumber / pageReadingPerHour;
  let requestedHoursPerDay = totalTime / days;

  console.log(requestedHoursPerDay);
}
printRequiredReading(212, 20, 2);
