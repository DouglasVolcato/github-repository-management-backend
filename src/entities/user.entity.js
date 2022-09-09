import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";

export default class User {
  constructor(user) {
    this.id = randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo ?? "";
    this.repositories = [];
  }

  validate() {
    if (!this.id || !this.name || !this.email || !this.password) {
      throw new Error("Missing required fields for user.");
    }
  }

  encryptPassWord() {
    const password = bcrypt.hashSync(this.password, 10)
    console.log(password)
    return password
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.encryptPassWord(),
      photo: this.photo,
      repositories: this.repositories,
    };
  }
}
