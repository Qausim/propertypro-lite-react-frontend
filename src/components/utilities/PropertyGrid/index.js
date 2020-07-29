import React from "react";

import { GiHomeGarage } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { Grid, Box, Image, Text, Flex } from "@chakra-ui/core";

import SectionDivider from "../SectionDivider";
import { fillArray } from "../../../utils/arrayUtils";

const PropertyGrid = ({ properties } = { properties: [] }) => {
  const icons = {
    bedroom: FaBed, bathroom: FaBath, garage: GiHomeGarage, published: BsClockHistory
  };

  return (
    <Grid
      className="property-grid"
      rowGap='var(--padding-lg)'
      gridTemplateColumns={
        ['repeat(1, 1fr)'].concat(fillArray(3, 'repeat(2, 1fr)').concat('repeat(4, 1fr)'))
      }
    >
      {properties.map((property, index) => {
        return (
          <Box
            key={index}
            p='var(--padding-md)'
            className="property-grid-item hover-shadow"
          >
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              alt={property.name}
              src={property.image}
            />
            <Text
              py='var(--padding-md)'
              className='text--bold'
            >
              {property.title}
            </Text>
            <SectionDivider />
            <Grid
              color='#888888'
              gridGap='32px'
              py='var(--padding-md)'
              gridTemplateColumns='repeat(4, 1fr)'
            >
              {
                Object.keys(icons).map((key, innerInd) => (
                  <Flex
                    align='center'
                    key={innerInd}
                  >
                    <Box as={icons[key]} mr='8px' size='24px' />
                    <Text>{property[key]}</Text>
                  </Flex>
                ))
              }
            </Grid>
          </Box>
        );
      })}
    </Grid>
  );
};

export default PropertyGrid;
