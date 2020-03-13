import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Header from './header';
const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Header component', () =>{
    test('should render component ', () => {
        const wrapper = shallow(<Header />)
        const element = wrapper.find(`[position="static"]`);
        expect(element.length).toBe(1)
    });

})