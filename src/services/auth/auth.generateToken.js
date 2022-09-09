import jwt from "jsonwebtoken";

export class AuthGenerateToken {
  async execute(userId) {
    return jwt.sign({ id: userId }, process.env.SECRET, {
      expiresIn: 86400,
    });
  }
}
