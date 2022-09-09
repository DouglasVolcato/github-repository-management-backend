export class GetByEmailUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userEmail) {
    return repo.repositories.getByEmail(userEmail);
  }
}
