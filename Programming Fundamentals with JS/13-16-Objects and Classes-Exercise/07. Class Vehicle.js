class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
      
        parts.quality = parts.engine * parts.power;
        this.parts = parts;
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}