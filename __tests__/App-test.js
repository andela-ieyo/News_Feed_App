import React from 'react';
import { mount } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/App';
import Footer from '../src/views/Footer';

jest.dontMock('../src/App');

describe('App Component', () => {
  it('Should contain the Router Component ', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<App />);
    const component = renderer.getRenderOutput();
    expect(component.props.children[0].type.displayName).toBe('Router');
  });

  it('should render a footer component', () => {
     const wrapper = mount(<App />);
     expect(wrapper.find(Footer)).toBeDefined();
  })
});
