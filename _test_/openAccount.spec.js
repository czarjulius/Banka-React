import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { CreateAccountPage } from '../src/components/Bank/CreateAccount/CreateAccountPage';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const renderAccountsPage = args => {
    const defaultProps = {
        isLoading: false,
        history: {push: jest.fn()}, 
        match: {},
        accounts: {},
        newAccount: jest.fn(() => Promise.resolve('this is an account...')),
        errors: undefined,
        location: {}
      };
  const props = { ...defaultProps, ...args }; 
  
  return shallow (
    <BrowserRouter>
      <CreateAccountPage {...props} />
    </BrowserRouter>
  );
};
const state = {
  form: {
    type: 'jjj',
    address: 'jdj',
    nextOfKin: 'ffj',
  },
}
describe('Accounts Components Tests', () => {
  it('renders Accounts template', () => {
    const wrapper = renderAccountsPage();
    const wrapperDive = wrapper.dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapperDive.find('.dasboard-body').length).toBe(1);
  });
  it('Find div on the template', () => {
    const wrapper = renderAccountsPage();
    const wrapperDive = wrapper.dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapperDive.find('div').length).toBe(5);
  });
  it('Find select on the template', () => {
    const wrapper = renderAccountsPage();
    const wrapperDive = wrapper.dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapperDive.find('select').length).toBe(1);
  });
  it('Find form on the template', () => {
    const wrapper = renderAccountsPage();
    const wrapperDive = wrapper.dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapperDive.find('form').length).toBe(1);
  });
  it('Find p on the template', () => {
    const wrapper = renderAccountsPage();
    const wrapperDive = wrapper.dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapperDive.find('p').length).toBe(3);
  });
  it('Find option on the template', () => {
    const wrapper = renderAccountsPage();
    const wrapperDive = wrapper.dive().dive().dive();
    expect(wrapper).toMatchSnapshot();
    expect(wrapperDive.find('option').length).toBe(3);
    const newWrapper = wrapperDive.instance()
    newWrapper.state = state;
    newWrapper.submitHandler();
  });

  
});
