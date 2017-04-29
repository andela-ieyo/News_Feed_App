import NewsSourcesStore from '../src/stores/NewsSourcesStore';
import NewsActionTypes from '../src/constants/NewsActionTypes';
import NewsDispatcher from '../src/dispatcher/NewsDispatcher';

jest.mock('../src/dispatcher/NewsDispatcher');
jest.dontMock('../src/stores/NewsSourcesStore');
jest.dontMock('object-assign');


describe('NewsSourcesStore', () => {
  // mock actions inside dispatch payloads
  const actionGET_SOURCES = {
    eventName: NewsActionTypes.GET_SOURCES,
    newItem: [{
      id: 'abc-news-au',
      name: 'ABC News (AU)'
    }, {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English'
    }],
  };

  let callback;

  beforeEach(() => {
    callback = NewsDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(NewsDispatcher.register.mock.calls.length).toBe(1);
  });

  test('The store initializes with no data', () => {
    const all = NewsSourcesStore.getAll().length; 
    expect(all).toBe(0);
  });

  test('creates a to-do item', () => {
    callback(actionGET_SOURCES);
    const all = NewsSourcesStore.getAll();
    const keys = Object.keys(all);
    expect(keys.length).toBe(2);
    expect(all[keys[0]].name).toEqual('ABC News (AU)');
  });
});
