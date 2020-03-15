import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Header from './header';
const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Header component', () =>{
    const wrapper = shallow(<Header />);
   
    test('should render component ', () => {
        const element = wrapper.find(`[position="static"]`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`.event-management`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`.add-event`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`.link-add-event`);
        expect(element.length).toBe(1)
    });
 
});