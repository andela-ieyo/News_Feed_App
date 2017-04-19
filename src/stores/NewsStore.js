import assign from 'object-assign';
import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

const NewsStore = assign({}, EventEmitter.prototype, {

  news: [],

  // Accessor method
  getAll() {
    return this.news;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

/**
* @param {function} callback
*/

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {

    case NewsActionTypes.GET_NEWS:
      NewsStore.news = payload.news;
      NewsStore.emitChange();
      break;

    default:
      return true;
  }
});

export default NewsStore;
