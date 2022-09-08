export class Repository {
  constructor(repository) {
    this.name = repository.name;
    this.link = repository.link;
    this.priority = repository.priority;
    this.note = repository.note;
  }

  validate() {
    if (!this.name || !this.link || !this.priority || !this.note) {
      throw new Error("Missing required fields for Repository.");
    }
  }

  getRepository() {
    return {
      name: this.name,
      link: this.link,
      priority: this.priority,
      note: this.note,
    };
  }
}
