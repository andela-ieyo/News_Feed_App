import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsSources from '../../src/components/NewsSources.jsx';

jest.dontMock('../../src/components/NewsSources');

describe('NewsSources Component', () => {
  
  let wrapper;
  const sources= ['bbc News', 'cnn news'];

  beforeEach(() => {
    wrapper = mount(<NewsSources />);
  });

  it('allows us to set props', () => {
    expect(wrapper.node.props.sources).toEqual([]);
    expect(wrapper.node.props.search).toEqual('');

    wrapper.setProps({ search: 'latest' });
    expect(wrapper.node.props.search).toEqual('latest');

    wrapper.setProps({ sources: sources });
    expect(wrapper.node.props.sources).toEqual(sources);
  });

 

  it('NewsSources renders Input', () => {
    const input = wrapper.find('input').first();
    expect(input).toBeDefined();
    expect(input.length).toEqual(1);
  });

  it('should render a node with className bl', () => {
    const component = shallow(<NewsSources />);
    expect(component.find(".bl").first()).toBeDefined();
  })
});
