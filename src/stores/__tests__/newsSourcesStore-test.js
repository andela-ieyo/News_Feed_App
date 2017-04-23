import NewsSourcesStore from '../NewsSourcesStore';
import NewsActionTypes from '../../constants/NewsActionTypes';
jest.dontMock('../NewsSourcesStore');
jest.dontMock('../NewsStore');
jest.dontMock('object-assign');


describe('NewsSourcesStore', () => {
  // mock actions inside dispatch payloads
  const actionTodoCreate = {
    source: 'VIEW_ACTION',
    action: {
      actionType: TodoConstants.TODO_CREATE,
      text: 'foo'
    }
  };
  var actionTodoDestroy = {
    source: 'VIEW_ACTION',
    action: {
      actionType: TodoConstants.TODO_DESTROY,
      id: 'replace me in test'
    }
  };

  var AppDispatcher;
  var TodoStore;
  var callback;


  it('The store initializes with no data', () => {
    const all = NewsSourcesStore.getAll().length; // This throws the error
    expect(all).toBe(0);
  });
});
