class Api {
  constructor() {
    this.apiKey = '213327409d384371851777e7c7f78dfe';
    this.linkString = 'https://newsapi.org/v1/articles?';
    this.apilink = 'https://newsapi.org/v1/sources?language=en';
    this.link = this.linkString;
    this.num_query = 0;
    this.result = [];
    this.hasError = false;
    this.errorMessage = '';
  }

  addQuery(type, value) {
    this.link += `&${type}=${value}&apiKey=${this.apiKey}`;
  }

  resetQuery() {
    this.link = this.linkString;
  }

  getLink() {
    return this.link;
  }

}

export default new Api();
