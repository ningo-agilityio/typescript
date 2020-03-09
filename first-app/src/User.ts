import faker from 'faker';

export class User { 
  name: string;
  location: {
    lat: number;
    long: number;
  }

  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    }
  }
}