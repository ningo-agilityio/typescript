export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export type Callback = () => void

export const API_URL = 'http://localhost:3000/users';

export interface HasId {
  id?: number;
}