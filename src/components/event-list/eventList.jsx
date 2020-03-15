import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from '../header/header';
import { get } from '../../helpers/httpService';
import SearchBar from 'material-ui-search-bar';
import './eventList.css';
import moment from 'moment';


const EventList = () => {

	const [eventData, setEventData] = useState([]);
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchedData, setSearchedData] = useState([]);
	const [isSearched, setIsSearched] = useState(false);

	const getEventList = () => {
		get(`/event/${page}`).then((res) => {
			setEventData([...eventData, ...res.data.data]);
		});
	};

	useEffect(() => {
		getEventList()
	}, [page])

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
				const temp = page + 1;
				setPage(temp);
			}
		};
		getEventList();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);



	const handleSearch = () => {
		setIsSearched(true);
		const filteredData = eventData.filter(event => {
			return event.type.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setSearchedData(filteredData)
		if (searchTerm === '') {
			setIsSearched(false);
		}
	}

	return (
		<React.Fragment>
			<Header type="Add" />
			<SearchBar
				value={searchTerm}
				onChange={e => setSearchTerm(e)}
				onRequestSearch={handleSearch}
				placeholder='Search By Event type'
				className='search-bar'
			/>
			<Container>
				<Grid container spacing={3}>
					{isSearched ? searchedData.map((event) => (
						<Grid item xs={12} sm={12} md={6} key={event._id} className='grid'>
							<Card className='event-card'>
								<img src={event.image} alt='cardImage' height='200' width='560' />
								<CardContent className='event-type-card'>{event.type}</CardContent>
								<CardContent className='event-loc-card'>{event.location}</CardContent>
								<CardContent ><img alt='cardImage' src={event.genderAllowed === 'Female Only' ? '/girl.png' : event.genderAllowed === 'Male Only' ? '/boy.png' : '/boy_girl.png'} height='40' width='40' className='img-card' /></CardContent>
							</Card>
						</Grid>
					)) :
						eventData.map((event) => (
							<Grid item xs={12} sm={12} md={6} key={event._id} className='grid'>
								<Card className='event-card'>
									<img src={event.image !== '' ? event.image : event.type === 'Marriage' ? '/marriage.jpg' : event.type === 'Birthday'? '/birthday.png' : 'engagement.jpg'} alt='cardImage' height='200' width='560' />
									<CardContent className='event-type-card'>{event.type}</CardContent>
									<CardContent className='event-loc-card'>@ {event.location}</CardContent>
									<CardContent className='event-loc-card'>on {moment().format('DD/MM/YYYY',event.date)} @ {moment().format('HH:MM',event.date)} O`Clock</CardContent>
									<CardContent ><img alt='cardImage' src={event.genderAllowed === 'Female Only' ? '/girl.png' : event.genderAllowed === 'Male Only' ? '/boy.png' : '/boy_girl.png'} height='40' width='40' className='img-card' /></CardContent>
								</Card>
							</Grid>
						))
					}

				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default EventList;
