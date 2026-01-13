function printGramophoneNoExpireTime(band, album, song) {
  let durationInSecond = (album.length * band.length * song.length) / 2;
  let plateFullrotaion = Math.ceil(durationInSecond / 2.5);

  console.log(`The plate was rotated ${plateFullrotaion} times.`);
}
printGramophoneNoExpireTime("Black Sabbath", "Paranoid", "War Pigs");
