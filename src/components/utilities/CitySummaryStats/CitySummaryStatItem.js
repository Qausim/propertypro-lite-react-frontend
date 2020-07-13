import React from 'react';
import { Home, DollarSign } from 'react-feather';
import { Box, Image, Text, Icon, Flex } from '@chakra-ui/core';

import { formatMoneyValue } from '../../../utils/textUtils';


const CitySummaryStatItem = ({ city }) => {
  const childBorder = '1px solid #CCC';
  return (
    <Box
      px='var(--padding-md)'
      className='city-summary-stat-item'
    >
      <Image
        w='100%'
        h='300px'
        objectFit='cover'
        alt={city.name}
        src={city.image}
        border={childBorder}
        borderBottom='none'
      />
      <Box
        border={childBorder}
        borderTop='none'
        p='var(--padding-md)'
        className='text--capitalize'
      >
        <Text
          fontSize='1.5em'
          className='text--bold'
        >
          {city.name}
        </Text>
        <Flex className='align-center' mb='4px'>
          <Icon as={Home} className='icon' />
          <span className='text--bold'>listings:</span>&nbsp;{city.listings}
        </Flex>
        <Flex className='align-center'>
          <Icon as={DollarSign} className='icon' />
          <span className='text--bold'>price:</span>&nbsp;₦{formatMoneyValue(city.minPrice)} - ₦{formatMoneyValue(city.maxPrice)}
        </Flex>
      </Box>
    </Box>
  );
}
 
export default CitySummaryStatItem;