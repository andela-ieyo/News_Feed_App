import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/Footer.jsx';
jest.dontMock('../../src/components/Footer.jsx');

describe('Footer component', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains('Designed by Eyo | All rights Reserved')).toBe(true);
    expect(wrapper.find('div')).toHaveLength(3);
  });
});
