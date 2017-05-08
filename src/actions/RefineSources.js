class RefineSources {
  constructor() {
    this.sources = [];
  }

  add(index, id, name, description, category, sortBysAvailable) {
    this.sources.push({
      href: `/articles/${id}`,
      id: index,
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

export default RefineSources;
