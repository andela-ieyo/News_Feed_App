import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/views/Header';
jest.dontMock('../src/views/Header');

describe('Header component', () => {
  it('Header component should render as expected', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains('News Feed | Andela')).toBe(true);
    expect(wrapper.contains('Home')).toBe(true);
    expect(wrapper.contains('Logout')).toBe(true);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('Link')).toHaveLength(1);
  });
});
