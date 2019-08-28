import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../src/components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  let app;
  beforeEach(() => {
    app = mount(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    );
  });
  it('renders successfully', () => {
    expect(app).toMatchSnapshot();
  });
});
