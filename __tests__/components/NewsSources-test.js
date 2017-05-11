import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsSources from '../../src/components/NewsSources.jsx';

jest.dontMock('../../src/components/NewsSources');

describe('NewsSources Component', () => {
  
  let wrapper;
  const sources=  [{
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "sortBysAvailable": ["top"]
    }, {
      "id": "al-jazeera-english",
      "name": "Al Jazeera English",
      "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
      "url": "http://www.aljazeera.com",
      "category": "general",
      "language": "en",
      "country": "us",
      "sortBysAvailable": ["top", "latest"]
    }, {
      "id": "ars-technica",
      "name": "Ars Technica",
      "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
      "url": "http://arstechnica.com",
      "category": "technology",
      "language": "en",
      "country": "us",
      "sortBysAvailable": ["top", "latest"]
    }, {
      "id": "associated-press",
      "name": "Associated Press",
      "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
      "url": "http://bigstory.ap.org",
      "category": "general",
      "language": "en",
      "country": "us",
      "sortBysAvailable": ["top", "latest"]
    }
  ]

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
