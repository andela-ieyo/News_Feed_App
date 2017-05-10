import newsSourcesStore from '../../src/stores/NewsSourcesStore';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import appDispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/NewsSourcesStore');
jest.dontMock('object-assign');


describe('newsSourcesStore', () => {
  // mock actions inside dispatch payloads
  const getSources = {
    eventName: NewsActionTypes.GET_SOURCES,
    sources: [{
      id: 'abc-news-au',
      name: 'ABC News (AU)'
    }, {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English'
    }],
  };

  let callback;

  beforeEach(() => {
    callback = appDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(appDispatcher.register.mock.calls.length).toBe(1);
  });

  test('The store initializes with no data', () => {
    const all = newsSourcesStore.getAll().length;
    expect(all).toBe(0);
  });

  test('creates a to-do item', () => {
    callback(getSources);
    const all = newsSourcesStore.getAll();
    const keys = Object.keys(all);
    expect(keys.length).toBe(2);
    expect(all[keys[0]].name).toEqual('ABC News (AU)');
  });
});
