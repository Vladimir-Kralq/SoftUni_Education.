function tennisRanklist(input) {
  const numTournaments = parseInt(input[0]);

  let finalPoints = parseInt(input[1]);

  let pointsFromTournaments = 0;

  let winsCount = 0;

  const POINTS_W = 2000;
  const POINTS_F = 1200;
  const POINTS_SF = 720;

  for (let i = 2; i < input.length; i++) {
    const result = input[i];
    let currentTournamentPoints = 0;

    if (result === "W") {
      currentTournamentPoints = POINTS_W;
      winsCount++;
    } else if (result === "F") {
      currentTournamentPoints = POINTS_F;
    } else if (result === "SF") {
      currentTournamentPoints = POINTS_SF;
    }

    finalPoints += currentTournamentPoints;

    pointsFromTournaments += currentTournamentPoints;
  }

  const averagePoints = Math.floor(pointsFromTournaments / numTournaments);

  const winRatePercent = (winsCount / numTournaments) * 100;

  const winRateFormatted = winRatePercent.toFixed(2);

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${winRateFormatted}%`);
}

tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
