import React from 'react';
import { Box, Heading, Flex, Icon } from '@chakra-ui/core';

import './HomePage.css';
import HomeSearchForm from '../../utilities/HomeSearchForm';
import CitySummaryStats from '../../utilities/CitySummaryStats';
import { Home } from 'react-feather';


const HomePage = () => {
  return (
    <Box className="homepage">
      <Box
        py='8em'
        as='section'
        className='homepage-top text--align-center'
      >
        <p
          className='text--uppercase text--bold'
          style={{
            color: 'white',
            marginBottom: '.9em',
            letterSpacing: '4px',
            fontWeight: '600'
          }}
        >
          the intuitive way to
        </p>
        <Heading
          as='h1'
          color='white'
          fontSize='2.8em'
          fontWeight='700'
          px='var(--padding-md)'
          className='text--capitalize text--bold'
        >
          find your dream home
        </Heading>
        <HomeSearchForm />
      </Box>

      <Box
        py='5em'
        maxW='100vw'
        as='section'
        className='cities-covered'
        px={['var(--padding-md)', 'var(--padding-lg)']}
      >
        <Heading
          as='h1'
          fontSize='2.8em'
          className='text--align-center'
        >
          Explore the Cities
        </Heading>
        <Box
          mt='4em'
          mx='auto'
          overflowX='auto'
          w={[
            'calc(100% + var(--padding-md))',
            'calc(100% + var(--padding-lg))'
          ]}
          className='cities-summary-stats-wrapper'
        >
          <CitySummaryStats />
        </Box>
      </Box>
      
      <Box
        py='5em'
        maxW='100vw'
        as='section'
        bg='#EDEDED'
        className='featured-properties'
        px={['var(--padding-md)', 'var(--padding-lg)']}
      >
        <Flex
          wrap='wrap'
          align='center'
          justify='space-between'
        >
          <Heading
            as='h1'
            fontSize='2.8em'
            mb={['16px', '16px', 0]}
          >
            Featured Properties
          </Heading>
          <p
            className='text--uppercase d-flex align-center'
          >
            <Icon as={Home} mr='8px' size='32px' className='home-icon' />
            <span className='text--bold'>1,300+</span>&nbsp;available properties
          </p>
        </Flex>
        
      </Box>
    </Box>
  );
}
 
export default HomePage;