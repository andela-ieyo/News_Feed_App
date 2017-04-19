class newsContainer {
  constructor() {
    this.news = [];
  }

  add(title, description, meta, link, image) {
    this.news.push({
      href: link,
      header: title,
      description,
      meta,
      image,
    });
  }

  get() {
    return this.news;
  }


}
export default newsContainer;
