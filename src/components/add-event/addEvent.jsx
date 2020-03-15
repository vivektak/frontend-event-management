import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import {
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    FormHelperText
} from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { checkEventTypeValidation, checkEventLocationValidation, checkGenderValidation } from '../../helpers/commonValidation';
import Header from '../header/header';
import './addEvent.css';
import { post } from '../../helpers/httpService';
import { toBase64 } from '../../helpers/commonHandler';


const AddEvent = (props) => {

    const [eventType, setEventType] = useState('');
    const [eventTypeError, setEventTypeError] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventLocationError, setEventLocationError] = useState('');
    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [imageUpload, setImageUpload] = useState('');

    const events = ['Marriage', 'Engagement', 'Birthday'];
    const eventLocations = ['Jaipur', 'Delhi', 'Gurgaon', 'Noida'];
    const genders = ['Male Only', 'Female Only', 'Male & Female']


    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleClearEvent = () => {
        setEventLocation('');
        setEventType('');
        setGender('');
        setSelectedDate(new Date('2014-08-18T21:11:54'));
        setImageUpload('');
        setEventLocationError('');
        setEventTypeError('');
        setGenderError('');

    }

    const handleCreateEvent = () => {
        const data = {
            'type': eventType,
            'image': imageUpload,
            'location': eventLocation,
            'date': selectedDate,
            'genderAllowed': gender
        }


        post('/event/add', data).then(res => {
            props.history.push('/event-list');
        }).catch(error => {
            console.log(error);
        });
    }

    const onChange = async (e) => {
        const image = await toBase64(e.target.files[0]);
        setImageUpload(image);
    }

    return (<React.Fragment>
        <Header type='list' />
        <Card className='card'>
        <div className='event-management-box'>
                    <h2>Add Event</h2>
                </div>
            <FormControl error={eventTypeError ? true : null} variant="outlined" className="opening-box form-control" >
                <InputLabel htmlFor="filled-jobType-simple">Event Type</InputLabel>
                <Select
                    value={eventType}
                    name='event-type'
                    onChange={e => setEventType(e.target.value)}
                    onBlur={e => { setEventTypeError(checkEventTypeValidation(e.target.value)) }}
                    inputProps={{
                        name: 'eveny',
                        id: 'filled-exp-simple',
                    }}
                >
                    {
                        events.map(event => {
                            return <MenuItem value={event} key={event}>{event}</MenuItem>
                        })
                    }
                </Select>
                {eventTypeError ? <FormHelperText >Event Type is Required</FormHelperText> : null}
            </FormControl><br />
            <FormControl error={eventLocationError ? true : null} variant="outlined" className="opening-box form-control">
                <InputLabel htmlFor="filled-jobType-simple">Event Location</InputLabel>
                <Select
                    value={eventLocation}
                    name='event-location'
                    onChange={e => setEventLocation(e.target.value)}
                    onBlur={e => { setEventLocationError(checkEventLocationValidation(e.target.value)) }}
                    inputProps={{
                        name: 'eveny',
                        id: 'filled-exp-simple',
                    }}
                >
                    {
                        eventLocations.map(eventLoc => {
                            return <MenuItem value={eventLoc} key={eventLoc}>{eventLoc}</MenuItem>
                        })
                    }
                </Select>
                {eventLocationError ? <FormHelperText >Event Location is Required</FormHelperText> : null}
            </FormControl><br />
            <FormControl error={genderError ? true : null} variant="outlined" className="opening-box form-control">
                <InputLabel htmlFor="filled-jobType-simple">Genders Allowed</InputLabel>
                <Select
                    value={gender}
                    name='gender-allowed'
                    onChange={e => setGender(e.target.value)}
                    onBlur={e => { setGenderError(checkGenderValidation(e.target.value)) }}
                    inputProps={{
                        name: 'eveny',
                        id: 'filled-exp-simple',
                    }}
                >
                    {
                        genders.map(gender => {
                            return <MenuItem value={gender} key={gender}>{gender}</MenuItem>
                        })
                    }
                </Select>
                {genderError ? <FormHelperText >Gender is Required</FormHelperText> : null}
            </FormControl><br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    className='date-picker'
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                /><br />
            </MuiPickersUtilsProvider>
            <Button
                variant="contained"
                component="label"
                className='upload-button'
            >
                Upload Event Image
  <input
                    type="file"
                    style={{ display: "none" }}
                    accept=".png,.jpg,.jpeg"
                    onChange={e => {
                        onChange(e);
                    }}
                />
            </Button><br />
            <Button
                variant="contained"
                component="label"
                color="primary"
                onClick={handleCreateEvent}
                className='create-event-btn'
            >
                Create Event
        </Button>
            <Button
                variant="contained"
                component="label"
                color="secondary"
                onClick={handleClearEvent}
                className='clear-event-btn'
            >
                Clear Event
        </Button>
        </Card>
    </React.Fragment>);
}

export default AddEvent;