import bcrypt from "bcryptjs";

export class AuthVerifyPassword {
  execute(password, user) {
    const result = bcrypt.compareSync(password, user.password);
    return result === true ? true : false;
  }
}
