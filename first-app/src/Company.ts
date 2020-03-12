import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  }
  color: string = 'blue';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h4>Company name: ${this.companyName}</h4>
        <h5>Catch phrase: ${this.catchPhrase}</h5>
      </div>
    `
  }
}