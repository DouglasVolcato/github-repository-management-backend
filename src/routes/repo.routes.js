export class RepoRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/create/:id", (req, res) =>
      this.controller.createRepoController(req, res)
    );

    this.router.delete("/delete/:id/:name", (req, res) =>
      this.controller.createRepoController(req, res)
    );

    this.router.get("/get-all/:id", (req, res) =>
      this.controller.getAllRepoController(req, res)
    );

    this.router.put("/update/:id/:name", (req, res) =>
      this.controller.updateRepoController(req, res)
    );

    return this.router;
  }
}
