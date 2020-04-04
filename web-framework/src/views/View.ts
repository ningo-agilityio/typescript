import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  regions: { [key: string]: Element } = {};

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel() {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  };

  abstract template(): string;

  bindEvents(documentFragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      documentFragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (var key in regionsMap) {
      const selector = regionsMap[key];

      if (selector) {
        this.regions[key] = fragment.querySelector(selector);
      }
    }
  }

  onRender(): void { }

  render() {
    // Reset parent div before re-render
    this.parent.innerHTML = '';

    // Create form
    const userForm = document.createElement("template");
    userForm.innerHTML = this.template();
    this.bindEvents(userForm.content);
    this.mapRegions(userForm.content);
    this.onRender();

    // Append form to root  
    this.parent.append(userForm.content);
  }
}