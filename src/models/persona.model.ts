import { Field } from './field.model';
import { Column } from './column.model';

export class Persona {
  id: number = null;
  avatar: string = '';
  color: string = '';
  initials: string = '';
  name: string = '';
  fields: [Field] = [];
  columns: [Column] = [];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
