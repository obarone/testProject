export class Field {
  id: number = null;
  column_id: number = null;
  data: string = '';
  field_type: string = '';
  prev_id: number = null;
  next_id: number = null;
  title: string = '';

  public static deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
