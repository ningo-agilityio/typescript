const carMakers: string[] = ['red', 'yellow'];
carMakers.map((car: string) => {
    console.log(car.toUpperCase());
})

const importDates: (Date | string)[] = [new Date(), '2020-11-06'];
importDates.push('2020-10-10');