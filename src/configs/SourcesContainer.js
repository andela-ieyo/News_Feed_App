class SourcesContainer {
  constructor() {
    this.sources = [];
  }

<<<<<<< Updated upstream
  add(id, name, description) {
=======
  add(index, id, name, description, category, sortBysAvailable) {
>>>>>>> Stashed changes
    this.sources.push({
      href: `/articles/${id}`,
      id: index,
      header: name,
      description,
      title: name,
    });
  }

  get() {
    return this.sources;
  }

}

export default SourcesContainer;
