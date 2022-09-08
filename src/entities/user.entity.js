import { randomUUID } from "node:crypto";

export class User {
  constructor(user) {
    this.id = randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.photo = user.photo;
    this.repositories = [...user.repositories];
  }

  validate() {
    if (!this.id || !this.name || !this.email) {
      throw new Error("Missing required fields for user.");
    }
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      photo: this.photo,
      repositories: this.repositories,
    };
  }
}
