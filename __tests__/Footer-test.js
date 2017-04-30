import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../src/views/Footer';
jest.dontMock('../src/views/Footer');

describe('Footer component', () => {
  it('Footer component should render as expected', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains('Designed by Eyo | All rights Reserved')).toBe(true);
    expect(wrapper.find('div')).toHaveLength(3);
  });
});
