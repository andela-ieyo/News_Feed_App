import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/App';

jest.dontMock('../src/App');

describe('App Component', () => {

  it('Should contain the Router Component ', () => {
   const renderer = new ReactShallowRenderer();
   renderer.render(<App />);
   const component = renderer.getRenderOutput();
   expect(component.props.children[0].type.displayName).toBe('Router');

  });
});
 
