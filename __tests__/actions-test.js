import mockedAxios from './../__mocks__/axios';
import NewsActionTypes from '../src/constants/NewsActionTypes';
import NewsDispatcher from '../src/dispatcher/NewsDispatcher';
import NewsActions from '../src/actions/NewsActions';

describe('#getNews() using Promises', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(NewsDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should load news data', () => NewsActions.getNews('bbcnews')
    .then(() => {
      const arg = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(arg.eventName).toEqual(NewsActionTypes.GET_NEWS);
      expect(arg.news).toBeInstanceOf(Object);
      expect(arg.news[0].meta).toEqual('BBC News');
    }));
});
