function lunchBreak(nameSerial, epizodTime, pochivkaTime) {
  let lunchTime = pochivkaTime * (1 / 8);
  let otdixTime = pochivkaTime * (1 / 4);

  let totalTime = pochivkaTime - lunchTime - otdixTime;

  if (epizodTime <= totalTime) {
    console.log(
      `You have enough time to watch ${nameSerial} and left with ${Math.ceil(
        totalTime - epizodTime
      )} minutes free time.`
    );
  } else {
    console.log(
      ` You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(
        epizodTime - totalTime
      )} more minutes.`
    );
  }
}

lunchBreak("Game of Thrones", 60, 96);
