import React from 'react';
import { Flex, Box, Image } from 'rebass';
import { WiredButton } from "wired-button";
import { WiredFab } from "wired-fab";

import img from '../img';

const HomePage = () => {

  const coverArt = {
		width: '100vw',
		height: '100vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundImage: img.background.url,
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
     <Box width={1 / 2}></Box>
     <Box width={1 / 2}>
         <Image mx='auto' width='550px' src={img.logo.src} alt="Jeri Motta Budior" />
     </Box>
     <Flex width='550px'>

                 <Box width='20%'>
                     <wired-button style={navLink}>
                         <a href="/"> home </a>
                    </wired-button>
                 </Box>

                 <Box width='20%'>
                     <wired-button style={navLink}>
                         <a href="/About"> about</a>
                     </wired-button>
                 </Box>

                 <Box width='20%'>
                     <wired-button style={navLink}>
                         <a href="/Booking"> booking </a>
                     </wired-button>
                 </Box>

                 <Box width='20%'>
                     <wired-button style={navLink}>
                         <a href="/FAQs"> faq </a>
                     </wired-button>
                 </Box>

                 <Box width='20%'>
                     <wired-button style={navLink}>
                         <a href="/Pricing"> pricing </a>
                     </wired-button>
                 </Box>

     </Flex>
 </Flex>

  );
}

export default HomePage;
