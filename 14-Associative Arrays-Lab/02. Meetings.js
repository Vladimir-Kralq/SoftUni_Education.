function printMeetings(data) {
  let meetings = {};
  for (let entry of data) {
    let parts = entry.split(" ");

    [weekDay, fullName] = parts;

    if (meetings.hasOwnProperty(weekDay)) {
      console.log(`Conflict on ${weekDay}!`);
    } else {
      meetings[weekDay] = fullName;
      console.log(`Scheduled for ${weekDay}`);
    }
  }
  for (let key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
printMeetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
