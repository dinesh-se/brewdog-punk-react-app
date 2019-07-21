import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

test('should render Header correctly', () => {
  const appInfo = {
    title: 'Brew Dog',
    subtitle: 'Beer application'
  };
  const wrapper = shallow(<Header title={appInfo.title} subtitle={appInfo.subtitle} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.app-title').text()).toBe(appInfo.title);
  expect(wrapper.find('.app-subtitle').text()).toBe(appInfo.subtitle);
});

test('should render Header with title only', () => {
  const appInfo = {
    title: 'Brew Dog'
  };
  const wrapper = shallow(<Header title={appInfo.title} subtitle={appInfo.subtitle} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.app-title').text()).toBe(appInfo.title);
  expect(wrapper.find('.app-subtitle')).toHaveLength(0);
});