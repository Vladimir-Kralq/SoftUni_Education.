
function exam(examHour, examMin, arrHour, arrMin) {
  let examTotal = examHour * 60 + examMin;    
  let arrTotal = arrHour * 60 + arrMin;       
  let diff = arrTotal - examTotal;           

  if (diff > 0) {
    console.log("Late");
  } else if (diff >= -30) {
    console.log("On time");
  } else {
    console.log("Early");
  }

  if (diff != 0) {
    let mins = Math.abs(diff);
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;

    if (diff > 0) { 
      if (mins < 60) {
        console.log(`${minutes} minutes after the start`);
      } else {
        if (minutes < 10) {
          console.log(`${hours}:0${minutes} hours after the start`);
        } else {
          console.log(`${hours}:${minutes} hours after the start`);
        }
      }
    } else { 
      if (mins < 60) {
        console.log(`${minutes} minutes before the start`);
      } else {
        if (minutes < 10) {
          console.log(`${hours}:0${minutes} hours before the start`);
        } else {
          console.log(`${hours}:${minutes} hours before the start`);
        }
      }
    }
  }
}

exam(9, 30, 9, 50); 






