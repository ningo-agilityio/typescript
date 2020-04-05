import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from './actions'
import { StoreState } from './reducers'
import { throws } from 'assert';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

class _App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  onFetchClick = (): void => {
    this.props.fetchTodos()
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>
        {todo.title}
        <button onClick={() => this.onDeleteTodo(todo.id)}>x</button>
      </div>
    })
  }

  onDeleteTodo(id: number): void {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onFetchClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo
})(_App);
