import Repo from "../../entities/repo.entity";

export class CreateRepoUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(repoBody) {
    const newRepo = new Repo(repoBody);
    newRepo.validate();
    return await this.repository.create(newRepo.getRepo());
  }
}
