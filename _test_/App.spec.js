import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a h1 component', () => {
    expect(app.find('h1').length).toBe(1);
  });
});
