import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import { http } from '../helpers/httpService';
import SearchBar from 'material-ui-search-bar';

const EventList = () => {

	const [ eventData, setEventData ] = useState([]);
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');

	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            const temp = page + 1;
            setPage(temp);
		}
	};
    
    useEffect(() => {
		getEventList()
		console.log(searchTerm)
    }, [page])

	useEffect(() => {
		getEventList();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const getEventList = () => {
		http.get(`/event/${page}`).then((res) => {
			setEventData([...eventData, ...res.data.data]);
			
		});
	};

	return (
		<React.Fragment>
			<Header type="Add" />
			<SearchBar
			value={searchTerm}
			onChange={e => setSearchTerm(e)}
            onRequestSearch={(e) => {
				console.log(e);
			}}
            style={{
                margin: '0 auto',
                maxWidth: 800
            }}
    />
			<Container>
				<Grid container spacing={3}>
					
						{eventData.map((text, index) => (
							<Grid item xs={6}>
							<Card
								className="dashboard-card total-jobs"
								key={text._id}
								style={{ margin: '10px', padding : '10px' }}
							>
								{/* <CardMedia
									image="/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/> */}
								<CardContent>Type : {text.type}</CardContent>
								<CardContent>Location : {text.location}</CardContent>
								<CardContent>Gender Allowed  : {text.genderAllowed}</CardContent>
							</Card>
							</Grid>
						))}
					
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default EventList;
