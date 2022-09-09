export class AuthVerifyPassword {
  async execute(password, user) {
    return user.password === password ? true : false;
  }
}
