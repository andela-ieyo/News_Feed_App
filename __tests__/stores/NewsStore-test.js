import newsStore from '../../src/stores/NewsStore';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import appDispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/NewsStore');
jest.dontMock('object-assign');


describe('NewsStore', () => {
  // mock actions inside dispatch payloads
  const actionGET_NEWS = {
    eventName: NewsActionTypes.GET_NEWS,
    news: [{
      title: 'General Election 2017: Labour to rip up Tory Brexit plan',
      description: 'The party says it would prioritise jobs and workers\' rights, and guarantee the status of EU citizens.',
    }, {
      title: 'US submarine arrives in South Korea as tensions rise',
      description: 'It comes amid worries of a North Korean missile test as Pyongyang marks its army\'s anniversary.'
    }]
  };

  let callback;

  beforeEach(() => {
    callback = appDispatcher.register.mock.calls[0][0];
  });

  test('registers a callback with the dispatcher', () => {
    expect(appDispatcher.register.mock.calls.length).toBe(1);
  });

  test('The store initializes with no data', () => {
    const all = newsStore.getAll().length;
    expect(all).toBe(0);
  });

  test('creates a to-do item', () => {
    callback(actionGET_NEWS);
    const all = newsStore.getAll();
    const keys = Object.keys(all);
    expect(keys.length).toBe(2);
    expect(all[keys[0]].title).toEqual('General Election 2017: Labour to rip up Tory Brexit plan');
  });
});
