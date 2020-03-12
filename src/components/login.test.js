import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Login from './login';
const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('should render component ', () => {
    const wrapper = shallow(<Login />)
    const element = wrapper.find(`[data-test="login-component"]`);
    expect(element.length).toBe(1)
});

test('should render mobile input box ', () => {
    const wrapper = shallow(<Login />)
    const element = wrapper.find(`[name='mobile']`);
    expect(element.length).toBe(1)
});

test('should render otp input box ', () => {
    const wrapper = shallow(<Login />)
    const element = wrapper.find(`[name='otp']`);
    expect(element.length).toBe(1)
});

test('should render Button ', () => {
    const wrapper = shallow(<Login />)
    const element = wrapper.find(`[variant="contained"]`);
    expect(element.length).toBe(1)
});