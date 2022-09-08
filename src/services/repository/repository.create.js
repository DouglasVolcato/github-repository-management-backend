import Repository from "../../entities/repository.entity";

export class CreateRepositoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(repoBody) {
    const newRepo = new Repository(repoBody);
    newRepo.validate();
    return await this.repository.create(newRepo.getRepository());
  }
}