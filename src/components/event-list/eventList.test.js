import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import EventList from './eventList';
const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Should render Event List Component', () => {

    const wrapper = shallow(<EventList />)

    test('should render header component ', () => {
        const element = wrapper.find(`[type="Add"]`);
        expect(element.length).toBe(1)
    });

    test('should render search bar ', () => {
        const element = wrapper.find(`[className='search-bar']`);
        expect(element.length).toBe(1)
    });
    
});

