function createAssemblyLine() {
  return {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function () {
        if (this.temp < this.tempSettings) {
          this.temp += 1;
        } else if (this.temp > this.tempSettings) {
          this.temp -= 1;
        }
      };
    },

    hasAudio(car) {
      car.currentTrack = null;
      car.nowPlaying = function () {
        if (this.currentTrack !== null) {
          console.log(
            `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`,
          );
        }
      };
    },

    hasParktronic(car) {
      car.checkDistance = function (distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}

// Тест
const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
