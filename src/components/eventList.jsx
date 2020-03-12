import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import { http } from '../helpers/httpService';
const EventList = () => {
    const [ eventData, setEventData ] = useState([]);
    const [page, setPage] = useState(1);
    
	const useStyles = makeStyles({
		root: {
			minWidth: 275
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)'
		},
		title: {
			fontSize: 14
		},
		pos: {
			marginBottom: 12
		}
	});

	const handleScroll = () => {
       
		if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
            const temp = page + 1;
            setPage(temp);
		}
	};
    
    useEffect(() => {
        getEventList()
    }, [page])

	useEffect(() => {
		getEventList();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const getEventList = () => {
		http.get(`http://localhost:5000/api/event/${page}`).then((res) => {
            setEventData([...eventData, ...res.data.data]);
		});
	};

	const classes = useStyles();
	
	return (
		<React.Fragment>
			<Header type="Add" />
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						{eventData.map((text, index) => (
							<Card
								className="dashboard-card total-jobs"
								key={text._id}
								style={{ margin: '5px' }}
							>
								<CardContent>Type : {text.type}</CardContent>
								<CardContent>Location : {text.location}</CardContent>
							</Card>
						))}
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default EventList;
