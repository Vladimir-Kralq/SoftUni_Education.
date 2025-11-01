function trekkingMania(input) {
  const broiGrupi = parseInt(input[0]);

  let musalaKlimbers = 0;
  let monblanKlimbers = 0;
  let kilimandjaroKlimbers = 0;
  let k2Klimbers = 0;
  let everestKlimbers = 0;

  let obshtBroiHora = 0;

  for (let i = 1; i <= broiGrupi; i++) {
    const horaVGrupata = parseInt(input[i]);

    obshtBroiHora += horaVGrupata;

    if (horaVGrupata <= 5) {
      musalaKlimbers += horaVGrupata;
    } else if (horaVGrupata <= 12) {
      monblanKlimbers += horaVGrupata;
    } else if (horaVGrupata <= 25) {
      kilimandjaroKlimbers += horaVGrupata;
    } else if (horaVGrupata <= 40) {
      k2Klimbers += horaVGrupata;
    } else {
      everestKlimbers += horaVGrupata;
    }
  }

  const musalaPercent = (musalaKlimbers / obshtBroiHora) * 100;
  const monblanPercent = (monblanKlimbers / obshtBroiHora) * 100;
  const kilimandjaroPercent = (kilimandjaroKlimbers / obshtBroiHora) * 100;
  const k2Percent = (k2Klimbers / obshtBroiHora) * 100;
  const everestPercent = (everestKlimbers / obshtBroiHora) * 100;

  console.log(`${musalaPercent.toFixed(2)}%`);
  console.log(`${monblanPercent.toFixed(2)}%`);
  console.log(`${kilimandjaroPercent.toFixed(2)}%`);
  console.log(`${k2Percent.toFixed(2)}%`);
  console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);
