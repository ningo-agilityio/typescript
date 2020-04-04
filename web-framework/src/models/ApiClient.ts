import axios, { AxiosPromise } from "axios";
import { HasId } from '../constants';

export class ApiClient<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch = (id: number): AxiosPromise => {
    return axios.get(this.rootUrl + `/${id}`);
  }

  save = (data: T): AxiosPromise => {
    const { id } = data;
    if (id) {
      // PUT (update)
      return axios.put(this.rootUrl + `/${id}`, data);
    } else {
      // POST (add)
      return axios.post(this.rootUrl, data);
    }
  }
}