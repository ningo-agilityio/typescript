import { User } from './models/User';
import { Event } from './models/Event';

// Get existing user
const user = User.fromData({ id: 1 });
user.fetch();
setTimeout(() => {}, 4000);
console.log(user);

// Update existing user
// user.set({ name: 'Nelly Ngo', age: 29 });
// user.save();
// console.log(user);

// Add new user
// const newUser = new User({ id: 4 });
// newUser.set({ name: 'Nee123 Ngo', age: 29 });
// console.log(newUser);