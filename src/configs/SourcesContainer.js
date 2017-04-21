class SourcesContainer {
  constructor() {
    this.sources = [];
  }

  add(id, name, description, category, sortBysAvailable) {
    this.sources.push({
      href: `/articles/${id}`,
      header: name,
      description,
      category,
      title: name,
      sortBysAvailable,
    });
  }

  get() {
    return this.sources;
  }

}

export default SourcesContainer;
