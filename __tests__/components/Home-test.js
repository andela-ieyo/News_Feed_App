import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home.jsx';

jest.dontMock('../../src/components/Home.jsx');

describe('Home component', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(' ... News on the go from over 50 news sources')).toBe(true);
    expect(wrapper.contains('News Feed')).toBe(true);
    expect(wrapper.contains('Sign in with Google')).toBe(true);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
