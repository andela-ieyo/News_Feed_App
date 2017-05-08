import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header.jsx';
jest.dontMock('../../src/components/Header.jsx');

describe('Header component', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains('News Feed | Andela')).toBe(true);
    expect(wrapper.contains('Home')).toBe(true);
    expect(wrapper.contains('Logout')).toBe(true);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('Link')).toHaveLength(1);
  });
});
