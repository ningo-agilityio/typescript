import { API_URL, UserProps } from '../constants';
import { Event } from './Event';
import { ApiClient } from './ApiClient';

export class User {
  // Option 3
  // events: Event = new SUPEREVENT()
  // constructor(
  //   private data: UserProps
  // ) { }

  // Option 2
  // static fromData(data: UserProps) {
  //   const user = new User(new Event());
  //   user.set(data);
  //   return user;
  // }

  // private data: UserProps;

  // constructor(
  //   private events: Event
  // ) { }

  // Option 1
  public events: Event = new Event();
  public apiClient: ApiClient<UserProps> = new ApiClient(API_URL);

  constructor(
    private data: UserProps,
  ) { }

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}