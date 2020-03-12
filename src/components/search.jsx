import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchBar from 'material-ui-search-bar';

const Search = (props) => {
    return ( 
        <SearchBar
            onChange={(e) => {
                const value = props.eventData.filter(event =>  event.type == e)
                console.log(value)
            }
            }
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
                margin: '0 auto',
                maxWidth: 800
            }}
    />
     );
}
 
export default Search;