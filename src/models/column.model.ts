export class Column {
  id: number = null;
  width: string = '';

  public static deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
