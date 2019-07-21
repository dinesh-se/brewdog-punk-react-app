import React from 'react';
import { shallow } from 'enzyme';
import BeerDogApp from './beerDogApp';

test('should render the app', () => {
  const wrapper = shallow(<BeerDogApp />);
  
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('Header')).toHaveLength(1);
  expect(wrapper.find('BeerBanner')).toHaveLength(1);
  expect(wrapper.find('SearchForm')).toHaveLength(1);
  expect(wrapper.find('.footer-section').text()).toContain('Developed by');
});