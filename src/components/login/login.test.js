import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Login from './login';
const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = shallow(<Login />)
test('should render component ', () => {
    const element = wrapper.find(`[data-test="login-component"]`);
    expect(element.length).toBe(1)
});

test('should render mobile input box ', () => {
    const element = wrapper.find(`[name='mobile']`);
    expect(element.length).toBe(1)
});

test('should render otp input box ', () => {
    const element = wrapper.find(`[name='otp']`);
    expect(element.length).toBe(1)
});

test('should render Button ', () => {
    const element = wrapper.find(`[variant="contained"]`);
    expect(element.length).toBe(1)
});


// test('calls click event', () => {
    
//     const FakeFun = jest.spyOn(Login.prototype, 'handleValidate');
    
//     button.find('button').simulate('click');
//     wrapper.update();
//     expect(FakeFun).toHaveBeenCalled();
//   });

// describe('Test Button component', () => {
//     it('Test click event', () => {
//       const mockCallBack = jest.fn();
//         const button = shallow((<Login onClick={mockCallBack}>Ok!</Login>));
//         button.find('Login').simulate('click');
//       expect(mockCallBack.mock.calls.length).toEqual(1);
//     });
//   });