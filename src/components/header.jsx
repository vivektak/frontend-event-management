import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";


const Header = (props) => {
    return ( <AppBar position="static">
    <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1, textAlign : 'left' }}>
            Event Management
        </Typography>
        <Typography variant="h5" style={{ flexGrow: 1, textAlign : 'right' }} >
            {props.type === 'Add' ?<Link to='/add-event' style={{ color: "white",textDecorationLine: "none"}} >Add Event</Link> : <Link to='/event-list'  style={{ color: "white",textDecorationLine: "none"}}>Event List</Link>}
        </Typography>
    </Toolbar>
    </AppBar>
);
}
 
export default Header;