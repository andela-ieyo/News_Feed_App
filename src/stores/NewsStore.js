import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.news = [];
  }

  // Accessor method
  getAll() {
    return this.news;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

/**
* @param {function} callback
*/

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

const newsStore = new NewsStore();

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {

    case NewsActionTypes.GET_NEWS:
      newsStore.news = payload.news;
      newsStore.emitChange();
      break;

    default:
      return true;
  }
});

export default newsStore;
