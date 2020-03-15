import {get, post} from './httpService';
import Axios from 'axios';
jest.mock('axios');

describe('Should test http service file', () => {

    test('should test http get method',async ()=>{
        const data = await Axios.get('http://localhost:5000/api/event/1');
        expect(Axios.get).toHaveBeenCalledWith(
            `http://localhost:5000/api/event/1`,
          );
    });

    test('should test http get method',async ()=>{
        const data = {
            error : false,
            message : 'Events Found',
            data : [{"_id":"5e6ccd03c3ef814ead9e3016","type":"","image":"","location":"","date":"2014-08-18T15:41:54.000Z","genderAllowed":"","createdAt":"2020-03-14T12:24:35.239Z","updatedAt":"2020-03-14T12:24:35.239Z","__v":0}]

        }
        Axios.get.mockImplementationOnce(() => Promise.resolve(data));
        
        await expect(get('1')).resolves.toEqual(data);
    });

    test('should test http get method',async ()=>{
        const data = {
            
                'type': 'eventType',
                'image': 'imageUpload',
                'location': 'eventLocation',
                'date': 'selectedDate',
                'genderAllowed': 'gender'
            
        }
        const result = {
            error: false,
			message: 'Event saved successfully'
        }
        Axios.post.mockImplementationOnce(() => Promise.resolve(result));
        
        await expect(post('/event/add', data)).resolves.toEqual(result);
    });

    test('should test http get method',async ()=>{
        const data = {
                'type': 'eventType',
                'image': 'imageUpload',
                'location': 'eventLocation',
        }

        const result = {
            error: true,
            message: 'Error while saving event',
            data : 'error'
        }
        Axios.post.mockImplementationOnce(() => Promise.reject(result));
        
        await expect(post('/event/add', data)).rejects.toEqual(result);
    });

    test('should test http get method',async ()=>{
        const data = {
            'type': 'eventType',
            'image': 'imageUpload',
            'location': 'eventLocation',
        };
        await Axios.post('/event/add', data);
        expect(Axios.post).toHaveBeenCalledWith(
            `http://localhost:5000/api/event/add`,data
          );
    });

});