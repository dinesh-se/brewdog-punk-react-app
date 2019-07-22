import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './searchForm';
import 'isomorphic-fetch';

test('should render search form correctly', () => {
  const wrapper = shallow(<SearchForm />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.search-input')).toHaveLength(1);
  expect(wrapper.find('.radio-button')).toHaveLength(2);
  expect(wrapper.find('.search-button')).toHaveLength(1);
});

// write test cases to checked radio button and placeholder values

// test('should call changeSearchBy when switching radio buttons', () => {
//   const wrapper = shallow(<SearchForm />);

//   wrapper.instance().inputRef = {
//     current: {
//       value: 'some value'
//     }
//   };
//   wrapper.instance().changeSearchBy = jest.fn();
//   wrapper.find('#brew').simulate('click', { 
//     target: { checked: true },
//     persist: jest.fn()
//   });
  
//   expect(wrapper.instance().changeSearchBy).toHaveBeenCalled();
  
// });

test('should return formatted string for search by name', () => {
  const wrapper = shallow(<SearchForm />);

  expect(wrapper.instance().spaceToUnderscore('beer name')).toBe('beer_name');
  expect(wrapper.instance().spaceToUnderscore('beer')).toBe('beer');
  expect(wrapper.instance().spaceToUnderscore('three word check')).toBe('three_word_check');
});

test('should return formatted string for search by brew date', () => {
  const wrapper = shallow(<SearchForm />);

  expect(wrapper.instance().formatDate('2019-09-31')).toBe('09-2019');
});

// test('should submit form on clicking search button', () => {
//   const wrapper = shallow(<SearchForm />);
//   // const searchBeer = jest.fn();

//   // wrapper.find('#search_input').prop().value = "lager";
//   wrapper.instance().searchBeer = jest.fn();
//   // const spy = jest.spyOn(wrapper.instance(), "searchBeer").mockImplementation();
//   wrapper.find('.search-button').simulate('click', {
//     preventDefault: jest.fn(),
//     target: {
//       elements: {
//         search_input: {
//           value: 'lager'
//         },
//         search: {
//           value: 'beer_name'
//         }
//       }
//     }
//   });

//   //e.target.elements.search_input.value

//   expect(wrapper.instance().searchBeer).toHaveBeenCalled();
// });