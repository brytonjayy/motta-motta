import React from 'react';
import { Flex, Box, Image } from 'rebass';

import img from '../img';

function Home () {

	const coverArt = {
		backgroundImage: img.background.url,
		width: '100vw',
		height: '100vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	}

	const navLink = {
		color: 'black',
		textDecoration: 'none',
		textAlign: 'center',
		fontSize: '1.5em',
		fontWeight: 'bold',
		fontFamily: 'Chaitea',
		marginTop: 'none',
		padding: '15px'
	}

	return (
		<Flex style={coverArt}>
			<Box
			width={1/2}>
			</Box>
			<Box
			width={1/2}>
				<Image
				mx='auto'
				width='550px'
				src={img.logo.src} 
				alt="Jeri Motta Budior"/>
			<Flex
			mx='auto'>
				<Box style={navLink}><a style={navLink} href="/">home</a></Box>
				<Box style={navLink}><a style={navLink} href="/About">about</a></Box>
				<Box style={navLink}><a style={navLink} href="/Booking">book</a></Box>
				<Box style={navLink}><a style={navLink} href="/FAQ">faq</a></Box>
				<Box style={navLink}><a style={navLink} href="/Pricing">pricing</a></Box>
			</Flex>				
			</Box>
		</Flex>
	);
}

export default Home;
