export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onClick
    };
  }

  onClick() {
    console.log('click me');
  }

  bindEvents(documentFragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for(let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      documentFragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  template(): string {
    return `
      <di>
        <h1>User Form</h1>
        <input />
        <button>click me</button>
      </div>
    `;
  }

  render() {
    const userForm = document.createElement("template");
    userForm.innerHTML = this.template();
    this.bindEvents(userForm.content);
    this.parent.append(userForm.content);
  }
}