import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './searchResults';

test('should render list of beer correctly', () => {
  const beerList = [{
    id: 1,
    name: 'Beer 1',
    description: 'description 1',
    image_url: 'image1.png'
  }, {
    id: 2,
    name: 'Beer 2',
    description: 'description 2',
    image_url: 'image2.png'
  }];
  const wrapper = shallow(<SearchResults beerList={beerList} />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.beer-search-results li')).toHaveLength(2);
  expect(wrapper.find('.no-results')).toHaveLength(0);
});

test('should display no results when no beers where found', () => {
  const beerList = [];
  const wrapper = shallow(<SearchResults beerList={beerList} />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.no-results').text()).toBe('No search results found.');
  expect(wrapper.find('.beer-search-results')).toHaveLength(0);
});