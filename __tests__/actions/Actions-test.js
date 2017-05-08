import mockedAxios from '../../__mocks__/axios';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import appDispatcher from '../../src/dispatcher/AppDispatcher';
import NewsActions from '../../src/actions/NewsActions';

describe('getNews method using Promises', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(appDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should load news data', () => NewsActions.getNews('bbcnews')
    .then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.eventName).toEqual(NewsActionTypes.GET_NEWS);
      expect(mockDispatchCall.news).toBeInstanceOf(Object);
      expect(mockDispatchCall.news[0].meta).toEqual('BBC News');
    }));
});

