export class Column {
  id: number = null;
  width: string = '';

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
