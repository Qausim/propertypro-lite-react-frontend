import React from 'react';
import { Stack } from '@chakra-ui/core';


const PropertyTagWrapper = (props) => {
  return (
    <Stack
        isInline
        spacing={4}
        pos='absolute'
        p='var(--padding-xs) var(--padding-sm)'
        className='property-tags-wrapper text--uppercase text--bold'
        {...props}
    >
      {props.children}
    </Stack>
  );
}
 
export default PropertyTagWrapper;