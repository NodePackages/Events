import IEventMapping from './Contracts/IEventMapping';
import { TEvent } from './Contracts/TEvent';
import { TListener } from './Contracts/TListener';

export default class Event {
  public constructor(protected listeners: IEventMapping[] = []) {}

  public fire(event: TEvent) {
    const map = this.generateEventMap(event);

    map.handlers.forEach(listener => {
      if ('handle' in listener) {
        listener.handle(event);
      } else if (listener instanceof Function) {
        listener(event);
      }
    });
  }

  public listen(event: TEvent, listener: TListener) {
    const map = this.generateEventMap(event);

    map.handlers.push(listener);
  }

  private generateEventMap(event: TEvent): IEventMapping {
    const name = event.toString();

    let map = this.listeners.find(e => e.name === name);

    if (map === undefined) {
      this.listeners.push((map = { name, handlers: [] }));
    }

    return map;
  }
}
