export class DeleteRepositoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userId, repoName) {
    return await this.repository.delete(userId, repoName);
  }
}
