export class RepoController {
  constructor(services) {
    this.createRepoUseCase = services.createRepoUseCase;
    this.deleteRepoUseCase = services.deleteRepoUseCase;
    this.getAllRepoUseCase = services.getAllRepoUseCase;
    this.updateRepoUseCase = services.updateRepoUseCase;
  }

  async createRepoController(req, res) {
    try {
      const repoBody = req.body;

      if (!repoBody) {
        throw new Error("Invalid body in request.");
      }

      const newRepo = await this.createRepoUseCase.execute(repoBody);

      if (!newRepo) {
        throw new Error("Error in creation.");
      }

      res.status(200).send(newRepo);
    } catch (err) {
      res.status(400).send({ message: "Error creating repository: " + err });
    }
  }

  async deleteRepoController(req, res) {
    try {
      const userId = req.params.id;
      const repoName = req.params.name;

      if (!userId || !repoName) {
        throw new Error("Invalid id or name in request.");
      }

      const deletedRepo = await this.deleteRepoUseCase.execute(
        userId,
        repoName
      );

      if (!deletedRepo) {
        throw new Error("Repository not found to delete.");
      }

      res.status(200).send(deletedRepo);
    } catch (err) {
      res.status(400).send({ message: "Error deleting repository: " + err });
    }
  }

  async getAllRepoController(req, res) {
    try {
      const userId = req.params.id;

      if (!userId) {
        throw new Error("Invalid id in request.");
      }

      const repoList = await this.getAllRepoUseCase.execute(userId);

      if (!repoList) {
        throw new Error("Repository list is empty.");
      }

      res.status(200).send(repoList);
    } catch (err) {
      res
        .status(400)
        .send({ message: "Error getting repository list: " + err });
    }
  }

  async updateRepoController(req, res) {
    try {
      const userId = req.params.id;

      const nameRepo = req.params.name;

      const repoBody = req.body;

      if (!userId || !repoBody || !nameRepo) {
        throw new Error("Invalid request.");
      }

      const updatedRepo = await this.updateRepoUseCase.execute(
        userId,
        nameRepo,
        repoBody
      );

      if (!updatedRepo) {
        throw new Error("Repository not found to update.");
      }

      res.status(200).send(updatedRepo);
    } catch (err) {
      res.status(400).send({ message: "Error updating repository: " + err });
    }
  }
}
