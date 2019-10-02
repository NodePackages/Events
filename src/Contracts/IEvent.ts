export default abstract class IEvent {
  protected abstract name: string;

  public getName = () => this.name;
  public toString = () => this.getName();
}
