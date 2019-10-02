import IEvent from './Contracts/IEvent';
import IListener from './Contracts/IListener';

type Event = IEvent | string;
type Listener = IListener | CallableFunction;

interface IEventMapping {
  event: Event;
  handlers: Listener[];
}

interface IEventOptions {
  listen: IEventMapping[];
}

export default class Emitter {
  /**
   * The event-listeners mapping for the application.
   *
   * @var IEventMapping[]
   */
  protected listen: IEventMapping[] = [];

  public constructor({ listen }: IEventOptions = { listen: [] }) {
    listen.forEach(map => map.handlers.forEach(listener => this.on(map.event, listener)));
  }

  /**
   * Fires an event.
   *
   * @param event
   * @param args
   */
  public emit(event: Event, ...args: any[]) {
    const map = this.generateFromMaps(event);

    map.handlers.forEach(listener => {
      if ('handle' in listener) {
        listener.handle(event, ...args);
      } else if (listener instanceof Function) {
        listener(event, ...args);
      }
    });
  }

  /**
   * Register a listener for the event.
   *
   * @param event
   * @param listener
   */
  public on(event: Event, listener: Listener) {
    const map = this.generateFromMaps(event);

    map.handlers.push(listener);
  }

  /**
   * Generates a map for the supplied event.
   *
   * @param event
   */
  public generateFromMaps(event: Event): IEventMapping {
    const eventName = typeof event === 'string' ? event : event.constructor.name;

    let map = this.listen.find(mapping => mapping.event === eventName);

    if (map === undefined) {
      this.listen.push((map = { event: eventName, handlers: [] }));
    }

    return map;
  }
}
