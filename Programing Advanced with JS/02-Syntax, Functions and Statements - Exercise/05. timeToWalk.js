function timeToWalk(steps, footPrintMeters, speedKmH) {
  const speedInMPS = (speedKmH * 1000) / 3600;

  const distance = steps * footPrintMeters;

  const restSeconds = Math.floor(distance / 500) * 60;

  const totalSeconds = Math.round(distance / speedInMPS + restSeconds);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");

  return `${h}:${m}:${s}`;
}

// Тест:
console.log(timeToWalk(4000, 0.6, 5)); 
console.log(timeToWalk(2564, 0.7, 5.5)); 
