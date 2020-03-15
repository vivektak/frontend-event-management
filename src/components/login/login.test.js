import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Login from './login';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Render Login Component', () => {

    const wrapper = shallow(<Login />)
    test('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

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
    
    test('should call handleSubmit on click ', () => {
        const handleSubmit = jest.fn();
        const button = shallow((<button name='login' onClick={handleSubmit}>Login</button>));
        button.find(`[name='login']`).simulate('click');
        expect(handleSubmit).toHaveBeenCalled();
    });
    
    test('should call handleValidate on click ', () => {
        const handleValidate = jest.fn();
        const button = shallow((<button name='validate' onClick={handleValidate}>Validate</button>));
        button.find(`[name='validate']`).simulate('click');
        expect(handleValidate).toHaveBeenCalled();
    });
    
    test('should call setMobile on click ', () => {
        const setMobile = jest.fn();
        const button = shallow((<textfield name="mobile" onClick={setMobile} />));
        button.find(`[name="mobile"]`).simulate('click');
        expect(setMobile).toHaveBeenCalled();
    });
    
    test('should call setMobileError on click ', () => {
        const setMobileError = jest.fn();
        const button = shallow((<textfield name="mobile" onBlur={setMobileError} />));
        button.find(`[name="mobile"]`).simulate('blur');
        expect(setMobileError).toHaveBeenCalled();
    });
    
    test('should call setOtp on click ', () => {
        const setOtp = jest.fn();
        const button = shallow((<textfield name="otp" onClick={setOtp} />));
        button.find(`[name="otp"]`).simulate('click');
        expect(setOtp).toHaveBeenCalled();
    });
    
    test('should call setOtpError on click ', () => {
        const setOtpError = jest.fn();
        const button = shallow((<textfield name="otp" onBlur={setOtpError} />));
        button.find(`[name="otp"]`).simulate('blur');
        expect(setOtpError).toHaveBeenCalled();
    });
});

