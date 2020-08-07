import React from 'react';
import { GoLocation } from 'react-icons/go';
import { Box, Text, Flex } from '@chakra-ui/core';

import { fillArray } from '../../../utils/arrayUtils';


const PropertyLocationSection = ({ property }) => {
  return (
    <Box
      as='section'
      className='property-location'
    >
      <Flex
        wrap='wrap'
        mb='1.5rem'
        justify='space-between'
      >
        <Text
          as='h3'
          fontSize='1.6rem'
          className='text--capitalize text--bold'
          mb={fillArray(2, 'var(--padding-xs)').concat('0px')}
        >
          location
          </Text>
        <Flex
          as='p'
          align='center'
          fontSize='1.2em'
        >
          <Box
            as={GoLocation}
            className='icon'
            d={['none', 'block']}
            mr='var(--padding-xs)'
          />
          <span>{property.address}</span>
        </Flex>
      </Flex>
    </Box>
  );
}

export default PropertyLocationSection;