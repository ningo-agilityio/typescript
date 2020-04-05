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

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = { fetching: false }

  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false }
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }

  onFetchClick = (): void => {
    this.props.fetchTodos()
    this.setState({ fetching: true })
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

        {
          this.state.fetching ? 'Loading...' :
            this.renderList()
        }
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
