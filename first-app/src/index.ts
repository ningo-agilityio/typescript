import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const myMap = new CustomMap("map");
myMap.addMarker(new User());
myMap.addMarker(new Company());