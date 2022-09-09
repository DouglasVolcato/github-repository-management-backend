import { randomUUID } from "node:crypto";

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

  getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      photo: this.photo,
      repositories: this.repositories,
    };
  }
}
