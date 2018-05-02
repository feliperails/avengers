import { RegisterSource } from "./register-source.enum";

export class Register {
  public id: number;
  public idHero: number;
  public name: string;
  public email: string;
  public source: RegisterSource;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
