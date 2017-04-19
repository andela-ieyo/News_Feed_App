import assign from 'object-assign';
import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

const NewsSourcesStore = assign({}, EventEmitter.prototype, {

  sources: [],

// Accessor method
  getAll() {
    return this.sources;
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

    case NewsActionTypes.GET_SOURCES:
      NewsSourcesStore.sources = payload.newItem;
      NewsSourcesStore.emitChange();
      break;

    default:
      return true;
  }
});

export default NewsSourcesStore;
