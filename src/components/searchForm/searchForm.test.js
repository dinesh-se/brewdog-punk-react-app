import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './searchForm';

test('should render search form correctly', () => {
  const wrapper = shallow(<SearchForm />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.search-input')).toHaveLength(1);
  expect(wrapper.find('.radio-button')).toHaveLength(2);
  expect(wrapper.find('.search-button')).toHaveLength(1);
});

// write test cases to checked radio button and placeholder values