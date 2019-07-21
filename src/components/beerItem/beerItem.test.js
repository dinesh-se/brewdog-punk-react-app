import React from 'react';
import { shallow } from 'enzyme';
import BeerItem from './beerItem';

test('should render', () => {
  const beer = {
    name: 'Beer 1',
    description: 'Beer description',
    image_url: 'image/png'
  };
  const wrapper = shallow(<BeerItem beer={beer} />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.beer-item-name').text()).toBe('Beer 1');
  expect(wrapper.find('.beer-item-desc').text()).toBe('Beer description');
});