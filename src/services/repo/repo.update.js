import Repository from "../../entities/repo.entity";

export class UpdateRepositoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(userId, nameRepo, repoBody) {
    const newRepo = new Repository(repoBody);
    newRepo.validate();
    return await this.repository.update(
      userId,
      nameRepo,
      newRepo.getRepository()
    );
  }
}
