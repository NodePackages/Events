import IEvent from './IEvent';

export default interface IListener {
  handle(event: IEvent, ...args: any[]): void;
}
