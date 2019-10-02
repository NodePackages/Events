import { TEvent } from './TEvent';

export default interface IListener {
  handle(event: TEvent): void;
}
