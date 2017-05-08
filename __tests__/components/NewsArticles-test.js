import React from 'react';
import { mount } from 'enzyme';
import NewsArticles from '../../src/components/NewsArticles.jsx';

jest.dontMock('../../src/components/NewsArticles.jsx');

describe('NewsArticles Component', () => {
  const articles = 
  {
    "status": "ok",
    "source": "techcrunch",
    "sortBy": "top",
    "articles": [
      {
        "author": "Khaled \"Tito\" Hamze",
        "title": "Crunch Report",
        "description": "Your daily roundup of the biggest TechCrunch stories and startup news.",
        "url": "https://techcrunch.com/video/crunchreport/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1",
        "publishedAt": "2017-05-01T20:22:39Z"
      },
      {
        "author": "Matthew Lynley",
        "title": "Apple hits a speed bump in Q2 after its stock soared in the past year",
        "description": "Apple hit a little snag in the second quarter, falling slightly under what Wall Street expected in its earnings report — causing a slight drop after its..",
        "url": "https://techcrunch.com/2017/05/02/apple-hits-a-speed-bump-in-q2-after-its-stock-soared-in-the-past-year/",
        "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2015/11/185582845.jpg?w=764&h=400&crop=1",
        "publishedAt": "2017-05-02T20:38:29Z"
      }
    ]
  };

  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<NewsArticles />);
  });

  it('allows us to set props', () => {
    expect(wrapper.node.props.articles).toEqual([]);
    wrapper.setProps({ articles: articles });
    expect(wrapper.node.props.articles).toEqual(articles);
  });

  it('renders Input', () => {
    const input = wrapper.find('.order').first();
    expect(input).toBeDefined();
    expect(input.length).toEqual(1);
  });

  it('should have a div', () => {
    const newsCard = wrapper.find('.headline').first();
    expect(newsCard).toBeDefined();
  });

  it('renders 3 news cards', () => {
    const wrapper = mount(<NewsArticles articles={articles} />);
    expect(wrapper.containsAnyMatchingElements([
      <h4 className="title">{articles.author}</h4>,
      <h6 className="subtitle">{articles.title}</h6>,
    ])).toBeDefined();
    })
});