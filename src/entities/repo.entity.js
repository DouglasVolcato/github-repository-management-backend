export class Repository {
  constructor(repo) {
    this.name = repo.name;
    this.link = repo.link;
    this.priority = repo.priority;
    this.note = repo.note;
  }

  validate() {
    if (!this.name || !this.link || !this.priority || !this.note) {
      throw new Error("Missing required fields for Repository.");
    }
  }

  getRepo() {
    return {
      name: this.name,
      link: this.link,
      priority: this.priority,
      note: this.note,
    };
  }
}
