import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SignupPage, mapDispatchToProps } from '../src/components/Signup/SignupPage';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const renderSignInPage = args => {
  const defaultProps = {
    isLoading: false,
    history: {},
    match: {},
    articles: {},
    newUser: jest.fn(),
    errors: undefined,
    location: {}
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <BrowserRouter>
      <SignupPage {...props} />
    </BrowserRouter>
  );
};

describe('Sign up Components Tests', () => {
  it('renders Sign up template', () => {
    const wrapper = renderSignInPage();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });

  it(`Simulates an onchange event on form email input`, () => {
    const wrapper = renderSignInPage();
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { currentTarget: { value: 'fola@gmail.com' } });
  });

  it(`Simulates an onchange event on form password input`, () => {
    const wrapper = renderSignInPage();
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { currentTarget: { value: 'password' } });
  });
  it('Simulates a form submit event', () => {
    const wrapper = renderSignInPage();
    wrapper.find('form').simulate('submit');
  });

  it('should dispatch login request action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).newUser();
  });
});