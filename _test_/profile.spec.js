import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ProfilePage } from '../src/components/Profile/ProfilePage';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const renderSignInPage = args => {
  const defaultProps = {
    history: {
        push: jest.fn()
    },
    match: {},
    userAccounts: {
      isLoading: false,
      accounts: []
    },
    fetchAccouts: jest.fn(),
    errors: undefined,
    location: {}
  };
  const props = { ...defaultProps, ...args };
  return mount(
    <BrowserRouter>
      <ProfilePage {...props} />
    </BrowserRouter>
  );
};

describe('Profile in Components Tests', () => {
  it('renders Profile In template', () => {
    const wrapper = renderSignInPage();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('DashboardPage').length).toBe(1);
  });
});