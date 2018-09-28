import { Field } from './field.model';
import { Column } from './column.model';

export class Persona {
  id: number = null;
  avatar: string = '';
  color: string = '';
  initials: string = '';
  name: string = '';
  fields: Array<Field> = [];
  columns: Array<Column> = [];

  public static deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
