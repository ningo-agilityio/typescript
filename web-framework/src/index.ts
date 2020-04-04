import { User } from './models/User';
import { UserForm } from './views/UserForm';

// Get existing user
// const collection = User.buildCollection();

// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const userForm = new UserForm(document.getElementById("root"));
userForm.render();