function race(input) {
  let participants = input.shift().split(", ");
  let distances = {};

  let nameRegex = /[A-Za-z]/g;
  let digitRegex = /\d/g;

  for (let line of input) {
    if (line === "end of race") {
      break;
    }

    let nameMatch = line.match(nameRegex);
    let digitMatch = line.match(digitRegex);

    let name = nameMatch.join("");

    let distance = digitMatch.reduce((sum, digit) => sum + Number(digit), 0);

    if (participants.includes(name)) {
      if (!distances[name]) {
        distances[name] = 0;
      }
      distances[name] += distance;
    }
  }

  let sorted = Object.entries(distances).sort((a, b) => b[1] - a[1]);

  if (sorted[0]) console.log(`1st place: ${sorted[0][0]}`);
  if (sorted[1]) console.log(`2nd place: ${sorted[1][0]}`);
  if (sorted[2]) console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);