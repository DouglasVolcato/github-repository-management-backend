export class UpdateUserUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userId, userBody) {
    return await this.repository.update(userId, userBody);
  }
}
