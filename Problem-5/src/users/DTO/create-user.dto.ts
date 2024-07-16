/** @format */

export class CreateUserDTO {
  constructor(name: string = "", email: string = "", password: string = "") {
    this.name = name;
    this.email = email;
    this.country = password;
  }
  readonly name: string;
  readonly email: string;
  readonly country: string;
}
