class BaseComponent {
  constructor() {
    this.events = [];
  }

  on(type, callBack) {
    this.off(type);

    const event = { type, callBack };
    this.events.push(event);

    return this;
  }

  off(type) {
    this.events = this.events.filter(e => e.type !== type);
    return this;
  }

  trigger(type, data) {
    const event = this.#findEvent(type);
    if (event?.callBack) event.callBack(data);
  }

  #findEvent(type) {
    return this.events.find(e => e.type === type);
  }
}
