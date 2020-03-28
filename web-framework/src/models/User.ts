import axios, { AxiosResponse } from "axios";
import { API_URL, UserProps } from '../constants';
import { Event } from './Event';


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
  constructor(
    private events: Event,
    private data: UserProps,
  ) { }

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch():void {
    axios.get(API_URL + `/${this.get('id')}`)
      .then((response: AxiosResponse):void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      // PUT (update)
      axios.put(API_URL + `/${id}`, this.data)
        .then((response: AxiosResponse): void => {
          this.set(response.data);
        });
    } else {
      // POST (add)
      axios.post(API_URL, this.data)
        .then((response: AxiosResponse): void => {
          this.set(response.data);
        });
    }
  }
}