/**
 * @desc contains resources for http call
 *
 * @class Api
 */
class Api {
  /**
   * Creates an instance of Api.
   *
   * @memberof Api
   */
  constructor() {
    this.apiKey = APIKEY;
    this.linkString = 'https://newsapi.org/v1/articles?';
    this.apilink = 'https://newsapi.org/v1/sources?language=en';
    this.link = this.linkString;
  }

  /**
   *
   * @return {void}
   * @param {string} type
   * @param {string} value
   *
   * @memberof Api
   */
  addQuery(type, value) {
    this.link += `&${type}=${value}&apiKey=${this.apiKey}`;
  }

  /**
   * @return {void}
   * @desc resets this.link
   *
   * @memberof Api
   */
  resetQuery() {
    this.link = this.linkString;
  }

  /**
   * @desc sets the endpoint for API call
   * @returns {string}
   *
   * @memberof Api
   */
  getLink() {
    return this.link;
  }

}

export default new Api();
