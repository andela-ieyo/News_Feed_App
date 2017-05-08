import mockedAxios from '../../__mocks__/axios';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import appDispatcher from '../../src/dispatcher/AppDispatcher';
import NewsActions from '../../src/actions/NewsActions';
import mockData from '../../__mocks__/mock-data.json';


describe('getSources Action', () => {
  let dispatchSpy;

  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(appDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('dispatch method should be called', () => NewsActions.getSources()
    .then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.eventName).toEqual(NewsActionTypes.GET_SOURCES);
      expect(mockDispatchCall.sources).toBeInstanceOf(Object);
      expect(mockDispatchCall.sources.length).toEqual(mockData.data.sources.length);
    }));

  it('should load sources data', () => NewsActions.getSources()
    .then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(mockDispatchCall.sources).toBeInstanceOf(Object);
      expect(mockDispatchCall.sources.length).toEqual(mockData.data.sources.length);
      expect(mockDispatchCall.sources[1].header).toEqual('Al Jazeera English');
    }));
});
