export class Hero {
  id: number;
  name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
