/**
 *
 * @desc Contains parameters to extract from API data.
 * @class RefineNews
 */
class RefineNews {
  /**
   * Creates an instance of RefineNews.
   *
   * @memberof RefineNews
   */
  constructor() {
    this.news = [];
  }

  /**
   * @desc extracts title, description, image-url, and address from news source.
   *
   * @param {string} title
   * @param {string} description
   * @param {string} meta
   * @param {string} link
   * @param {string} image
   *
   * @memberof RefineNews
   */
  add(title, description, meta, link, image) {
    this.news.push({
      href: link,
      header: title,
      description,
      meta,
      image,
    });
  }

  /**
   *
   * @desc returns value of news property
   * @returns object
   *
   * @memberof RefineNews
   */
  get() {
    return this.news;
  }


}
export default RefineNews;
