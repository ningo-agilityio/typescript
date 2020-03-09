class Vehicle {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    drive(): void {
        console.log("zin zin");
    }

    honk(): void {
        console.log("beep");
    }
}

class Car extends Vehicle {
    constructor(color: string) {
        super(color);
    }

    drive(): void {
        console.log(`My car is in ${this.color}, fires bim bim`);
    }
}

const myCar = new Car("orange");
myCar.drive();
myCar.honk();