import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
const mockFn = jest.fn();
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App component', () =>{
    const wrapper = shallow(<App />);

    test('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    test('should render component ', () => {
        const element = wrapper.find(`[className="App"]`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`[from="/"]`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`[path="/login"]`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`[path="/event-list"]`);
        expect(element.length).toBe(1)
    });

    test('should render component ', () => {
        const element = wrapper.find(`[path="/add-event"]`);
        expect(element.length).toBe(1)
    });
});