import { Event } from './Event';
import axios, { AxiosResponse } from "axios";

// T is class, K is data type
export class Collection<T, K> {
  public models: T[] = [];
  public event: Event = new Event();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
  ) {}

  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }

  fetch() {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });

        this.trigger('change');
      })
  }
}