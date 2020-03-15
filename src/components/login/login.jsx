import React, { useState } from 'react';
import {
    CardContent,
    Card,
    CardActions,
    Button,
    TextField
} from "@material-ui/core";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { checkMobileValidation } from '../../helpers/commonValidation';
import { post } from '../../helpers/httpService';
import './login.css';

const Login = (props) => {

    const [mobile, setMobile] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [isOtpGenerated, setIsOtpGenerated] = useState('none');

    const handleSubmit = e => {
        post('/user/login', { mobile }).then(res => {
            NotificationManager.success('Success', 'OTP sent to mobile number');
            setIsOtpGenerated(true);
        })
    };


    const handleValidate = e => {
        const data = {
            mobile,
            OTP: otp
        }

        post('/user/verifyLoginOTP', data).then(res => {
            NotificationManager.success('Success', 'Verified Successfully');
            props.history.push('/event-list');
        }).catch(error => {
            setOtpError('wrong otp entered ')
            NotificationManager.error('Error', 'OTP Mismatched');
        })
    }

    return (
        <div data-test='login-component' className='login-header'>

            <Card className='card-width'>
                <div className='event-management-box'>
                    <h5>Event Management</h5>
                </div>
                <CardContent>
                    <TextField
                        id="standard-name"
                        label="Mobile Number"
                        name="mobile"
                        helperText={mobileError}
                        fullWidth={true}
                        value={mobile}
                        error={mobileError ? true : false}
                        onChange={e => {
                            setMobile(e.target.value);
                        }}
                        onBlur={e => {
                            setMobileError(checkMobileValidation(mobile));
                        }}
                        margin="normal"
                    ></TextField>
                    <TextField
                        id="standard-name"
                        label="OTP"
                        name="otp"
                        helperText={otpError}
                        fullWidth={true}
                        value={otp}
                        error={otpError ? true : false}
                        onChange={e => {
                            setOtp(e.target.value);
                        }}
                        margin="normal"
                        style={{ display: isOtpGenerated }}
                    ></TextField>
                </CardContent>
                <CardActions style={{ display: "flex", justifyContent: "center" }}>
                    {isOtpGenerated === 'none' ? <Button
                        className='button login-button'
                        name='login'
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={mobileError || mobile === '' ? true : false}
                    >Login</Button> :
                        <Button
                            className='button'
                            name="validate"
                            size="small"
                            color="secondary"
                            variant="contained"
                            onClick={handleValidate}
                            style={{ display: isOtpGenerated }}
                        >Validate</Button>}
                </CardActions>
                <NotificationContainer />
            </Card>
        </div>
    );
}

export default Login;