// import assign from 'object-assign';
import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

class NewsSourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

// Accessor method
  getAll() {
    return this.sources;
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
const newsSourcesStore = new NewsSourcesStore();

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {
    case NewsActionTypes.GET_SOURCES:
      newsSourcesStore.sources = payload.newItem;
      newsSourcesStore.emitChange();
      break;

    default:
      return true;
  }
});

export default newsSourcesStore;
