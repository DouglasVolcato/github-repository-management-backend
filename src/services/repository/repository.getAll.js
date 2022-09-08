export class GetAllRepositoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userId) {
    return await this.repository.getAll(userId);
  }
}
