import { API_URL, UserProps } from '../constants';
import { Event } from './Event';
import { ApiClient } from './ApiClient';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { Collection } from './Collection';

export class User extends Model<UserProps> {
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
  // public events: Event = new Event();
  // public apiClient: ApiClient<UserProps> = new ApiClient(API_URL);
  // public attributes: Attributes<UserProps>

  // constructor(
  //   private attrs: UserProps,
  // ) { 
  //   this.attributes = new Attributes<UserProps>(attrs);
  // }

  // get on() {
  //   return this.events.on;
  // }

  // get trigger() {
  //   return this.events.trigger;
  // }

  // get get() {
  //   return this.attributes.get;
  // }

  // set(update: UserProps) {
  //   this.attributes.set(update);
  //   this.events.trigger('change');
  // }

  // fetch(): void {
  //   const id = this.get("id");

  //   if (typeof id !== 'number') {
  //     throw new Error("Can not fetch without id");
  //   }

  //   this.apiClient.fetch(id)
  //     .then((response: AxiosResponse) => {
  //       this.set(response.data);
  //     });
  // }

  // save(): void {
  //   this.apiClient.save(this.attributes.getAll())
  //     .then((response: AxiosResponse) => {
  //       this.set(response.data);
  //     });
  // }

  static build(attrs: UserProps) {
    return new User(
      new Attributes(attrs),
      new Event(),
      new ApiClient(API_URL)
    );
  }

  static buildCollection() {
    return new Collection<User, UserProps>(
      API_URL,
      (json: UserProps) => User.build(json)
    );
  }

  setRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}