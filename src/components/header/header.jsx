import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";
import './header.css'


const Header = (props) => {
    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h5" className='event-management'>
                Event Management
        </Typography>
            <Typography variant="h5" className='add-event'>
                {props.type === 'Add' ? <Link to='/add-event' className='link-add-event' >Add Event</Link> : <Link to='/event-list' className='link-add-event'>Event List</Link>}
            </Typography>
        </Toolbar>
    </AppBar>
    );
}

export default Header;