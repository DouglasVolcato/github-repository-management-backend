export class AuthGetByEmail {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userEmail) {
    return repo.repositories.getByEmail(userEmail);
  }
}
