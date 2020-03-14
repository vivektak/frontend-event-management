import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import AddEvent from './addEvent';
//const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Add Event COmponent Test', () => {
    const wrapper = shallow(<AddEvent />);
    
    test('should render Header component ', () => {
        const element = wrapper.find(`[type='list']`);
        expect(element.length).toBe(1)
    });

    test('should render card', () => {
        const element = wrapper.find(`[className='card']`);
        expect(element.length).toBe(1)
    });

    test('should render event management header ', () => {
        const element = wrapper.find(`[className='event-management-box']`);
        expect(element.length).toBe(1)
    });

    test('should render from control ', () => {
        const element = wrapper.find(`[className="opening-box form-control"]`);
        expect(element.length).toBe(3)
    });

    test('should render date picker ', () => {
        const element = wrapper.find(`[id="date-picker-dialog"]`);
        expect(element.length).toBe(1)
    });

    test('should render time picker ', () => {
        const element = wrapper.find(`[id="time-picker"]`);
        expect(element.length).toBe(1)
    });

    test('should render upload button ', () => {
        const element = wrapper.find(`[className='upload-button']`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`[className='create-event-btn']`);
        expect(element.length).toBe(1)
    });

    test('should render create event button ', () => {
        const element = wrapper.find(`[className='clear-event-btn']`);
        expect(element.length).toBe(1)
    });

    test('should render create event button ', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<AddEvent className='create-event-btn' onClick={mockCallBack}>Create Event</AddEvent>));
        button.find(`[className='create-event-btn']`).simulate('click');
        expect(mockCallBack).toHaveBeenCalled();
    });


})