export class GetAllRepoUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userId) {
    return await this.repository.getAll(userId);
  }
}
