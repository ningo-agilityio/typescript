import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collections: Collection<T, K>) { }
  abstract renderItem(itemParent: Element, model: T): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement("template");
    for (var model of this.collections.models) {
      const wrapItem = document.createElement("div");
      this.renderItem(wrapItem, model);
      templateElement.content.append(wrapItem);
    }
    this.parent.append(templateElement.content);
  }
}