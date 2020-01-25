import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logoTodo(id, title, completed);
}).catch(error => {
  console.log(error);
})

const logoTodo = (id: number, title: string, completed: boolean) => {
  console.log(`${id} - ${title} - ${completed ? 'Finished' : 'Started'}`);
}