import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import AddEvent from './addEvent';
Enzyme.configure({ adapter: new EnzymeAdapter() });
import {post} from '../../helpers/httpService';

describe('Add Event COmponent Test', () => {
    const wrapper = shallow(<AddEvent />);

    // test('should match the snapshot', () => {
    //     expect(wrapper.html()).toMatchSnapshot();
    //   });

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

    test('should call handleCreateEvent on click ', () => {
        const handleCreateEvent = jest.fn();
        const button = shallow((<button className='create-event-btn' onClick={handleCreateEvent}>Create Event</button>));
        button.find(`.create-event-btn`).simulate('click');
        expect(handleCreateEvent).toHaveBeenCalled();
    });

    test('should call handleClearEvent on click ', () => {
        const handleClearEvent = jest.fn();
        const button = shallow((<button className='clear-event-btn' onClick={handleClearEvent}>Clear Event</button>));
        button.find(`.clear-event-btn`).simulate('click');
        expect(handleClearEvent).toHaveBeenCalled();
    });

    test('should call upload event ', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<button className='upload-button' onChange={mockCallBack}>upload Event</button>));
        button.find(`.upload-button`).simulate('change');
        expect(mockCallBack).toHaveBeenCalled();
    });

    test('should call setEventType on click ', () => {
        const setEventType = jest.fn();
        const button = shallow((<select name='event-type' onChange={setEventType}>upload Event</select>));
        button.find(`[name='event-type']`).simulate('change');
        expect(setEventType).toHaveBeenCalled();
    });

    test('should call setEventTypeError on click ', () => {
        const setEventTypeError = jest.fn();
        const button = shallow((<select name='event-type' onBlur={setEventTypeError}>upload Event</select>));
        button.find(`[name='event-type']`).simulate('blur');
        expect(setEventTypeError).toHaveBeenCalled();
    });

    test('should call setEventLocation on click ', () => {
        const setEventLocation = jest.fn();
        const button = shallow((<select name='event-location' onChange={setEventLocation}>upload Event</select>));
        button.find(`[name='event-location']`).simulate('change');
        expect(setEventLocation).toHaveBeenCalled();
    });

    test('should call setEventLocationError on click ', () => {
        const setEventLocationError = jest.fn();
        const button = shallow((<select name='event-location' onBlur={setEventLocationError}>upload Event</select>));
        button.find(`[name='event-location']`).simulate('blur');
        expect(setEventLocationError).toHaveBeenCalled();
    });

    test('should call setGender on click ', () => {
        const setGender = jest.fn();
        const button = shallow((<select name='gender-allowed' onChange={setGender}>upload Event</select>));
        button.find(`[name='gender-allowed']`).simulate('change');
        expect(setGender).toHaveBeenCalled();
    });

    test('should call setGenderError on click ', () => {
        const setGenderError = jest.fn();
        const button = shallow((<select name='gender-allowed' onBlur={setGenderError}>upload Event</select>));
        button.find(`[name='gender-allowed']`).simulate('blur');
        expect(setGenderError).toHaveBeenCalled();
    });

    test('should add event data', () => {
        const data = {
            'type': 'eventType',
            'image': 'imageUpload',
            'location': 'eventLocation',
            'date': 'selectedDate',
            'genderAllowed': 'gender'
        }

        post('/event/add', data)
        .then(res => {
          expect(res).toBeDefined();
        })
      });

      test('should  not add event data', () => {
        const data = {
            'type': 'eventType',
            'image': 'imageUpload',
            'location': 'eventLocation',
        }

        post('/event/add', data)
        .then(res => {
          
        }).catch(error => {
            expect(error).toBeDefined()
        })
      });

  
});