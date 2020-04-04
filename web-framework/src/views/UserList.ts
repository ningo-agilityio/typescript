import { CollectionView } from "./CollectionView"
import { User } from "../models/User";
import { UserProps } from "../constants";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(itemParent: Element, model: User): void {
    new UserShow(itemParent, model).render();
  }
}