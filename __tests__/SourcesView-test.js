import React from 'react';
import { mount, shallow } from 'enzyme';
import SourcesView from '../src/views/SourcesView';

jest.dontMock('../src/views/SourcesView');

describe('SourcesView Component', () => {
  
  let wrapper;
  const sources= ['bbc News', 'cnn news'];

  beforeEach(() => {
    wrapper = mount(<SourcesView />);
  });

  it('allows us to set props', () => {
    expect(wrapper.node.props.sources).toEqual([]);
    expect(wrapper.node.props.search).toEqual('');

    wrapper.setProps({ search: 'latest' });
    expect(wrapper.node.props.search).toEqual('latest');

    wrapper.setProps({ sources: sources });
    expect(wrapper.node.props.sources).toEqual(sources);
  });

 

  it('SourcesView renders Input', () => {
    const input = wrapper.find('input').first();
    expect(input).toBeDefined();
    expect(input.length).toEqual(1);
  });

  it('should render a node with className bl', () => {
    const component = shallow(<SourcesView />);
    expect(component.find(".bl").first()).toBeDefined();
  })
});
