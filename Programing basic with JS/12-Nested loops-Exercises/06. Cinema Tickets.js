function cinemaTickets(input) {
  let studentCount = 0;
  let standardCount = 0;
  let kidCount = 0;
  let index = 0;

  while (input[index] !== "Finish") {
    const movieName = input[index++];
    const freeSeats = Number(input[index++]);

    let soldTickets = 0;

    while (input[index] !== "End") {
      const ticketType = input[index++];
      soldTickets++;

      if (ticketType === "student") studentCount++;
      else if (ticketType === "standard") standardCount++;
      else kidCount++;

      if (soldTickets >= freeSeats) break;
    }

    const percent = (soldTickets / freeSeats) * 100;
    console.log(`${movieName} - ${percent.toFixed(2)}% full.`);

    if (input[index] === "End") index++; // <- задължително
  }

  const total = studentCount + standardCount + kidCount;
  console.log(`Total tickets: ${total}`);
  console.log(`${((studentCount / total) * 100).toFixed(2)}% student tickets.`);
  console.log(
    `${((standardCount / total) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kidCount / total) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
