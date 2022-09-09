import { userModel } from "../Schemas/user.Schema.js";

export class RepoRepository {
  async create(userId, repoBody) {
    return await userModel.findOneAndUpdate(
      { id: userId },
      { $push: { repositories: repoBody } },
      { new: true }
    );
  }

  async getAll(userId) {
    return await userModel.findOne({ id: userId });
  }

  async update(userId, nameRepo, repoBody) {
    await userModel.findOneAndUpdate(
      { id: userId },
      { $pull: { repositories: { name: nameRepo } } }
    );

    return await userModel.findOneAndUpdate(
      { id: userId },
      { $push: { repositories: repoBody } },
      { new: true }
    );
  }

  async delete(userId, nameRepo) {
    return await userModel.findOneAndUpdate(
      { id: userId },
      { $pull: { repositories: { name: nameRepo } } }
    );
  }
}
