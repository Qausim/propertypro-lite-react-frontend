import React from 'react';
import { Stack } from '@chakra-ui/core';


const PropertyTagsWrapper = ({ color, children }) => {
  return (
    <Stack
        isInline
        spacing={4}
        color={color}
        pos='absolute'
        p='var(--padding-sm) var(--padding-md)'
        className='property-tags-wrapper text--uppercase text--bold'
    >
      {children}
    </Stack>
  );
}
 
export default PropertyTagsWrapper;