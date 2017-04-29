import React from 'react';
import { mount } from 'enzyme';
import SourcesView from '../src/views/SourcesView';

jest.dontMock('../src/views/SourcesView');

describe('SourcesView Component', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<SourcesView sources={['bbc News', 'cnn news']} />);
    expect(wrapper.props().sources).toEqual(['bbc News', 'cnn news']);
    wrapper.setProps({ search: 'latest' });
    expect(wrapper.props().search).toEqual('latest');
  });
})
