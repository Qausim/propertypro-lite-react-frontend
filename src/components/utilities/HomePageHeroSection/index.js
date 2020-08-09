import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Box, Heading, Flex, Text } from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import { fillArray } from '../../../utils/arrayUtils';


const HomePageHeroSection = ({ px }) => {
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
        <CustomGrid
          className='grid'
          gap='var(--padding-md)'
          colNumber={fillArray(2, 1).concat(2)}
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
                p='var(--padding-md)'
                direction={fillArray(3, 'column').concat('row')}
              >
                <Box
                  as={el.icon}
                  size='80px'
                  mr='var(--padding-md)'
                  mb={fillArray(3, 'var(--padding-md)').concat('0px')}
                />
                <Box width={fillArray(3).concat('70%')}>
                  <Heading
                    as='h2'
                    fontSize='1.8em'
                    textAlign='center'
                    mb='var(--)'
                  >
                    {el.title}
                  </Heading>
                  <Text>{el.text}</Text>
                </Box>
              </Flex>
            );
          })
        }
        </CustomGrid>
      </Flex>
  );
}
 
export default HomePageHeroSection;