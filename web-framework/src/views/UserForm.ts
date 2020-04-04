import { User } from "../models/User";
import { UserProps } from "../constants";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onClick,
      'click:.set-age': this.onSetRandomAge,
      'click:.set-name': this.onSetName,
      'click:.save-user': this.onSaveUser,
    };
  }

  onClick() {
    console.log('click me');
  }

  onSetRandomAge = (): void => {
    this.model.setRandomAge();
  }

  onSetName = (): void => {
    const input = this.parent.querySelector(".new-name");
    if (input) {
      this.model.set({ name: input.value });
    }
  }

  onSaveUser = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <di>
        <h1>User Form</h1>
        <input class='new-name' placeholder='${this.model.get("name")}' />
        <button class='set-name'>Set name</button>
        <button class='set-age'>Set random age</button>
        <button class='save-user'>Save user</button>
      </div>
    `;
  }
}