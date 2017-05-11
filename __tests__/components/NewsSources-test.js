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

 

  it('should render Input', () => {
    const input = wrapper.find('input').first();
    expect(input).toBeDefined();
    expect(input.length).toEqual(1);
  });

  it('should render a node with className bl', () => {
    const component = shallow(<NewsSources />);
    expect(component.find(".bl").first()).toBeDefined();
  });

  it('renders html elements with props passed on mount', () => {
    const wrapper = mount(<NewsSources sources={sources} />);
    expect(wrapper.containsAnyMatchingElements([
      <h4 className="card-title">{sources.name}</h4>,
      <p className="desc card-text">{sources.description}</p>,
      <p class="category card-text">{sources.category}</p>
    ])).toBeDefined();
  });

  it('renders a div with class card-row row', () => {
    const wrapper = mount(<NewsSources sources={sources} />);
    expect(wrapper.find('.card-row row')).toBeDefined();
  });
});
