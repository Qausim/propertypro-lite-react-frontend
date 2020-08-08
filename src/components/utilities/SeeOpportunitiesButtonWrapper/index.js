import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/core';

import './SeeOpportunitiesButtonWrapper.css';

const SeeOpportunitiesButtonWrapper = () => (
  <Flex
    wrap='wrap'
    align='center'
    justify={['center', 'unset']}
    className='see-opportunities-button-wrapper'
  >
    <Text
      mr={['0px', '1em']}
      mb={['.5em', '0px']}
    >
      Want to join our team?
    </Text>
    <Link
      to='/careers'
      className='text--uppercase'
    >
      see open positions
    </Link>
  </Flex>
);

export default SeeOpportunitiesButtonWrapper;