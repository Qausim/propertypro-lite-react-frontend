import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/core';

import SectionDivider from '../SectionDivider';
import PropertyLocationSection from '../PropertyLocationSection';
import PropertyFeaturesSection from '../PropertyFeaturesSection';


const PropertyDetailsLHS = ({ pr, property, gridColumn }) => {
  const InnerDivider = () => <SectionDivider opacity='1' mt='3em' mb='3em' />;
  
  return (
    <Box gridColumn={gridColumn} pr={pr}>
      <Box
        as='section'
        className='property-description'
      >
        <Heading
          as='h3'
          mb='1.5rem'
          fontSize='1.6rem'
          className='text--capitalize text--bold'
        >
          description
        </Heading>
        <Text as='p'>
          {property.description}
        </Text>
      </Box>
      <InnerDivider />
      <PropertyLocationSection {...{ property }} />
      <InnerDivider />
      <PropertyFeaturesSection {...{ property }} />
    </Box>
  );
}

export default PropertyDetailsLHS;