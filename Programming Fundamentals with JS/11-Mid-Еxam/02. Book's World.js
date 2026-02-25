function favoriteGenres(input) {
  let genres = input.shift().split(" | ");

  for (let line of input) {
    if (line === "Stop!") break;

    let parts = line.split(" ");
    let cmd = parts[0];

    if (cmd === "Join") {
      let genre = parts[1];
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    } else if (cmd === "Drop") {
      let genre = parts[1];
      let pos = genres.indexOf(genre);
      if (pos !== -1) {
        genres.splice(pos, 1);
      }
    } else if (cmd === "Replace") {
      let oldGenre = parts[1];
      let newGenre = parts[2];

      let oldPos = genres.indexOf(oldGenre);
      let newPos = genres.indexOf(newGenre);

      if (oldPos !== -1 && newPos === -1) {
        genres[oldPos] = newGenre;
      }
    } else if (cmd === "Prefer") {
      let i1 = Number(parts[1]);
      let i2 = Number(parts[2]);

      let valid = i1 >= 0 && i1 < genres.length && i2 >= 0 && i2 < genres.length;
      if (valid) {
     
        [genres[i1], genres[i2]] = [genres[i2], genres[i1]];
      }
    }
  }

  console.log(genres.join(" "));
}
favoriteGenres([
  "Romance | Fiction | Horror | Mystery",
  "Drop Romance",
  "Join Fantasy",
  "Prefer 1 2",
  "Stop!",
]);
