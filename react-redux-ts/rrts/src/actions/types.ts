import { FetchTodosAction, DeleteTodoAction } from './index'

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction