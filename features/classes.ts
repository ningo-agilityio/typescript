class Vehicle {
    drive(): void {
        console.log("zin zin");
    }

    honk(): void {
        console.log("beep");
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log("bim bim");
    }
}

const myCar = new Car();
myCar.drive();