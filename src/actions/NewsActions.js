import axios from 'axios';
import NewsActionTypes from '../constants/NewsActionTypes';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import SourcesContainer from '../configs/SourcesContainer';
import NewsContainer from '../configs/NewsContainer';
import Api from '../utils/Api';


const NewsActions = {

  getNews: (source) => {
    Api.resetQuery();
    Api.addQuery('source', source);
    axios(Api.getLink()).then((response) => {
      const feeds = new NewsContainer(); // initialize variable to news features
      const body = response.data;
      if (response.status === 200) {
        const articles = body.articles;
        articles.forEach((article) => {
          feeds.add(article.title, article.description, article.author,
          article.url, article.urlToImage);
        });

        NewsDispatcher.dispatch({
          eventName: NewsActionTypes.GET_NEWS,
          news: feeds.get(),
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  },

  getSources: () => {
    Api.resetQuery();
    const dataFeatures = new SourcesContainer();
    axios.get(Api.apilink).then((response) => {
      if (response.status === 200) {
        const body = response.data;
        const sources = body.sources;
        sources.forEach((source, index) => {
          dataFeatures.add(index, source.id, source.name, source.description,
           source.category, source.sortBysAvailable);
        });

        NewsDispatcher.dispatch({
          eventName: NewsActionTypes.GET_SOURCES,
          newItem: dataFeatures.get(),
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  },
};

export default NewsActions;
