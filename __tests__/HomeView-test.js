import React from 'react';
import { shallow } from 'enzyme';
import HomeView from '../src/views/HomeView';
jest.dontMock('../src/views/HomeView');

describe('HomeView component', () => {
  it('HomeView component should render as expected', () => {
    const wrapper = shallow(<HomeView />);
    expect(wrapper.contains('News on the go')).toBe(true);
    expect(wrapper.contains('Sign in')).toBe(true);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
