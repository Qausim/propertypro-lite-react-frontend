import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FiHome, FiDollarSign } from 'react-icons/fi';
import { Box, Image, Text, Icon, Flex, Link } from '@chakra-ui/core';

import { formatMoneyValue } from '../../../utils/textUtils';
import { routes } from '../../../utils/constants';


const CitySummaryStatItem = ({ city }) => {
  const childBorder = '1px solid #CCC';
  return (
    <Link
      as={RouterLink}
      to={`${routes.properties}?city=${city.name}`}
      className='city-summary-stat-item hover-no-text-decor'
    >
      <Image
        w='100%'
        h='300px'
        alt={city.name}
        src={city.image}
        objectFit='cover'
        border={childBorder}
        borderBottom='none'
      />
      <Box
        borderTop='none'
        border={childBorder}
        p='var(--padding-sm)'
        className='text--capitalize'
      >
        <Text
          fontSize='1.5em'
          className='text--bold'
        >
          {city.name}
        </Text>
        <Flex className='align-center' mb='4px'>
          <Icon as={FiHome} className='icon' />
          <span className='text--bold'>listings:</span>&nbsp;{city.listings}
        </Flex>
        <Flex className='align-center'>
          <Icon as={FiDollarSign} className='icon' />
          <span className='text--bold'>price:</span>&nbsp;₦{formatMoneyValue(city.minPrice)} - ₦{formatMoneyValue(city.maxPrice)}
        </Flex>
      </Box>
    </Link>
  );
}
 
export default CitySummaryStatItem;