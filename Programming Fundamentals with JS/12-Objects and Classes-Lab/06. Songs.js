function printSong(songArr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let numberOfSongs = songArr[0];
  let allSongs = [];

  for (let i = 1; i <= numberOfSongs; i++) {
    let parseData = songArr[i].split("_");
    let typeList = parseData[0];
    let name = parseData[1];
    let time = parseData[2];

    let song = new Song(typeList, name, time);
    allSongs.push(song);
  }

  let searchTearm = songArr.pop();
  if (searchTearm !== "all") {
    allSongs = allSongs.filter((s) => s.typeList === searchTearm);
  }

  let songNames = allSongs.map((s) => s.name);
  for (let name of songNames) {
    console.log(name);
  }
}
printSong([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);
