import { AxiosPromise, AxiosResponse } from "axios";
import { Callback } from '../constants';
import { HasId } from '../constants';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface ModelApiClient<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface ModelEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: ModelEvents,
    private apiClient: ModelApiClient<T>,
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== 'number') {
      throw new Error("Can not fetch without id");
    }

    this.apiClient.fetch(id)
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  save(): void {
    this.apiClient.save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }
}