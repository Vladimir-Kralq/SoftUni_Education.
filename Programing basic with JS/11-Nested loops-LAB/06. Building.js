function building(floors, rooms) {
  let output = "";

  for (let floor = floors; floor >= 1; floor--) {
    for (let room = 0; room < rooms; room++) {
      if (floor === floors) {
        output += `L${floor}${room} `;
      } else if (floor % 2 === 0) {
        output += `O${floor}${room} `;
      } else {
        output += `A${floor}${room} `;
      }
    }
    console.log(output.trim());
    output = "";
  }
}

building(6, 4);
