import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

import './PagePicturedBanner.css';
import { dividerMx } from '../../../utils/uiUtils';


const PagePicturedBanner = ({ title, px = dividerMx }) => {
  return (
    <Box
        h='14em'
        d='flex'
        px={px}
        className='banner'
        alignItems='center'
      >
        <Heading
          as='h1'
          color='white'
          className='text--bold text--capitalize'
        >
          {title}
        </Heading>
      </Box>
  );
}
 
export default PagePicturedBanner;