import { TListener } from './TListener';

export default interface IEventMapping {
  name: string;
  handlers: TListener[];
}
