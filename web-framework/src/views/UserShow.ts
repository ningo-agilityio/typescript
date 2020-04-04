import { User } from "../models/User";
import { UserProps } from "../constants";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } { return {}; }

  template(): string {
    if (!this.model.get("name")) {
      return '';
    }

    return `
      <div>
        <p>${this.model.get("name")} - ${this.model.get("age")}</p>
      <div>
    `;
  }
}