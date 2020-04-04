import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { API_URL, UserProps } from './constants';

// Get existing user
const users = new Collection(API_URL, (json: UserProps) => {
  return User.build(json);
});

users.fetch();

users.on('change', () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    new UserList(rootElement, users).render();
  }
});


// const user = User.build({ name: "Nee", age: 20 });
