import testdata from './mock-data.json';

const test = {
  get() {
    return Promise.resolve(testdata);
  }
};

export default test;
