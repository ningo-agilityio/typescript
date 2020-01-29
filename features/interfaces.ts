interface Reportable {
    summary(): string
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

const oldCar = {
    name: "civic",
    year: 2000,
    broken: false,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const myDrink = {
    name: "Coca-cola",
    carbonate: true,
    sugar: 40,
    summary(): string {
        return `My drink contains ${this.sugar} gram of sugar.`
    }
};

printSummary(oldCar);
printSummary(myDrink);