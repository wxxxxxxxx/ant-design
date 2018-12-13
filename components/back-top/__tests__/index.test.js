import React from 'react';
import { mount } from 'enzyme';
import BackTop from '..';

describe('BackTop', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should scroll to top after click it', async () => {
    const wrapper = mount(<BackTop visibilityHeight={-1} />);
    document.documentElement.scrollTop = 400;
    // trigger scroll manually
    wrapper.instance().handleScroll();
    jest.runAllTimers();
    wrapper.find('.ant-back-top').simulate('click');
    jest.runAllTimers();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(Math.abs(Math.round(document.documentElement.scrollTop))).toBe(0);
  });
});
