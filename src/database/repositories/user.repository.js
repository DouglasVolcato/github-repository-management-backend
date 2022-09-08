export class UserRepository {
  constructor(userModel) {
    this.model = userModel;
  }

  async create(userBody) {
    return await this.model.create(userBody);
  }

  async getByEmail(userEmail) {
    return await this.model.findOne({ email: userEmail });
  }

  async getById(userId) {
    return await this.model.findOne({ id: userId });
  }

  async getAll() {
    return await this.model.find();
  }

  async update(userId, userBody) {
    return await this.model.findOneAndUpdate({ id: userId }, userBody, {
      new: true,
    });
  }

  async delete(userId) {
    return await this.model.findOneAndDelete({ id: userId });
  }
}
