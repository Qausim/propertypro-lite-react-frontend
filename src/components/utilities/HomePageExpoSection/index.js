import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Box, Heading, Flex, Text, Grid } from '@chakra-ui/core';

import { fillArray } from '../../../utils/arrayUtils';


const HomePageExpoSection = ({ px }) => {
  return (
    <Flex
        py='5em'
        wrap='wrap'
        as='section'
        px={px}
        align='center'
        justify='center'
        className='expo-section'
      >
        <Grid
          className='grid'
          gap='var(--padding-lg)'
          templateColumns={fillArray(2, 'repear(1, 1fr)').concat('repeat(2, 1fr)')}
        >
        {
          [
            {
              title: 'Searching for a new abode?',
              text: `
                Homely is the workplace for thousands of real estate agents
                uploading new properties as the become available. Your home is here, find it!
              `,
              icon: FaSearch,
              link: '/'
            },
            {
              title: 'Looking to sell?',
              text: `
                Homely is visited by hundreds of thousands of users willing to pay for what they
                want, fast and to the point. Reach out to them and start uploading now!
              `,
              icon: FaHome,
              link: '/'
            }
          ].map((el, index) => {
            return (
              <Flex
                h='100%'
                key={index}
                color='white'
                align='center'
                p='var(--padding-lg)'
                direction={fillArray(3, 'column').concat('row')}
              >
                <Box
                  as={el.icon}
                  size='80px'
                  mr='var(--padding-lg)'
                  mb={fillArray(3, 'var(--padding-lg)').concat('0px')}
                />
                <Box width={fillArray(3).concat('70%')}>
                  <Heading
                    as='h2'
                    fontSize='1.8em'
                    textAlign='center'
                    mb='var(--padding-md)'
                  >
                    {el.title}
                  </Heading>
                  <Text>{el.text}</Text>
                </Box>
              </Flex>
            );
          })
        }
        </Grid>
      </Flex>
  );
}
 
export default HomePageExpoSection;