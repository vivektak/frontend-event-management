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

    test('should call setSearchTerm on change', () => {
        const setSearchTerm = jest.fn();
        const button = shallow((<searchbar className='search-bar' onChange={setSearchTerm} />));
        button.find(`.search-bar`).simulate('change');
        expect(setSearchTerm).toHaveBeenCalled();
    });

    test('should call handleSearch on change', () => {
        const handleSearch = jest.fn();
        const button = shallow((<searchbar className='search-bar' onBlur={handleSearch} />));
        button.find(`.search-bar`).simulate('blur');
        expect(handleSearch).toHaveBeenCalled();
    });
    
});

