import React from 'react';
import { shallow } from 'enzyme';
import BeerBanner from './beerBanner';
import "isomorphic-fetch";

test('should render loader correctly', () => {
  const wrapper = shallow(<BeerBanner />);

  // default state - loading
  wrapper.setState({
    error: null,
    isLoaded: false,
    beerInfo: {}
  });

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.banner-loading').text()).toBe('Loading...');
  expect(wrapper.find('.error-message')).toHaveLength(0);
  expect(wrapper.find('.banner-container')).toHaveLength(0);
});

test('should render error message correctly', () => {
  const wrapper = shallow(<BeerBanner />);

  // error state
  wrapper.setState({
    error: {
      message: "Error fetching data."
    },
    isLoaded: true,
    beerInfo: {}
  });

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.error-message').text()).toContain('Error:');
  expect(wrapper.find('.banner-loading')).toHaveLength(0);
  expect(wrapper.find('.banner-container')).toHaveLength(0);
});

test('should render beer banner correctly', () => {
  const wrapper = shallow(<BeerBanner />);

  // success state
  wrapper.setState({
    error: null,
    isLoaded: true,
    beerInfo: {
      name: 'Beer 1',
      description: 'Beer description'
    }
  });

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.beer-name').text()).toContain('Beer 1');
  expect(wrapper.find('.beer-desc').text()).toContain('Beer description');
  expect(wrapper.find('.banner-loading')).toHaveLength(0);
  expect(wrapper.find('.error-message')).toHaveLength(0);
});

test('should call another beer method on clicking button', () => {
  const wrapper = shallow(<BeerBanner />);
  wrapper.instance().getAnotherBeer = jest.fn();

  // success state
  wrapper.setState({
    error: null,
    isLoaded: true,
    beerInfo: {
      name: 'Beer 1',
      description: 'Beer description'
    }
  });

  wrapper.find('.button-alcoholic-beer').prop('onClick')();
  expect(wrapper.instance().getAnotherBeer).toHaveBeenCalled();
});

test('should fetch random beer successfully', (done) => {
  const wrapper = shallow(<BeerBanner />);
  const mockSucessResponse = [{
    name: 'Beer',
    description: 'Beer description',
    image_url: 'image.png'
  }];
  const mockJsonPromise = Promise.resolve(mockSucessResponse);

  wrapper.instance().fetchRandomBeer = jest.fn(() => mockJsonPromise);
  wrapper.instance().getAnotherBeer();

  expect(wrapper.instance().fetchRandomBeer).toHaveBeenCalled();
  wrapper.instance().fetchRandomBeer()
    .then(() => {
      expect(wrapper.state()).toEqual({
        isLoaded: true,
        beerInfo: mockSucessResponse[0],
        error: null
      });
      done();
    });
});

test('should set error message when API fails', (done) => {
  const wrapper = shallow(<BeerBanner />);
  const mockFailureResponse = {
    message: "Error"
  };
  const mockJsonPromise = Promise.reject(mockFailureResponse);

  wrapper.instance().fetchRandomBeer = jest.fn(() => mockJsonPromise);
  wrapper.instance().getAnotherBeer();

  expect(wrapper.instance().fetchRandomBeer).toHaveBeenCalled();
  wrapper.instance().fetchRandomBeer()
    .catch(() => {
      expect(wrapper.state()).toEqual({
        isLoaded: true,
        beerInfo: {},
        error: mockFailureResponse
      });
      done();
    });
});