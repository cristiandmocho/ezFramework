class BaseComponent {
  constructor() {
    this.events = [];
  }

  on(eventName, callBack) {
    const ce = new CustomEvent(eventName, { bubbles: true, cancelable: true, detail: this });

    this.addEventListener(eventName, callBack);
    this.events.push({ event: ce, callBack });

    return this;
  }

  off(eventName) {
    const ce = this.#findEvent(eventName);

    this.removeEventListener(eventName, ce.event.callBack);
    this.events = this.events.filter(e => e.event.type !== eventName);

    return this;
  }

  trigger(eventName) {
    const ce = this.#findEvent(eventName);
    this.dispatchEvent(ce.event);
  }

  #findEvent(eventname) {
    return this.events.find(e => e.event.type === eventname);
  }
}
