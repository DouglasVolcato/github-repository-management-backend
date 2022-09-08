import { userModel } from "../Schemas/user.Schema";

export class RepoRepository {
  async create(userId, repoBody) {
    return await userModel.findOneAndUpdate(
      { id: userId },
      { $push: { repositories: repoBody } },
      { new: true }
    ).repositories;
  }

  async getAll(userId) {
    return await userModel.findOne({ id: userId }).repositories;
  }

  async update(userId, nameRepo, repoBody) {
    await userModel.findOneAndUpdate(
      { id: userId },
      { $pull: { repositories: { name: nameRepo } } },
      {
        new: true,
      }
    ).repositories;

    return await userModel.findOneAndUpdate(
      { id: userId },
      { $push: { repositories: repoBody } },
      { new: true }
    ).repositories;
  }

  async delete(userId, nameRepo) {
    return await userModel.findOneAndUpdate(
      { id: userId },
      { $pull: { repositories: { name: nameRepo } } }
    ).repositories;
  }
}
