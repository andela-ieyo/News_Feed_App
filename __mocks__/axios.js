import testdata from './mock-data.json';

const mockApiCall = {
  get() {
    return Promise.resolve(testdata);
  }
};

export default mockApiCall;
