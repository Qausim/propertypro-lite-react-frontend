import React from "react";

import { GiHomeGarage } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, Text, Flex, Link } from "@chakra-ui/core";

import CustomGrid from "../CustomGrid";
import SectionDivider from "../SectionDivider";
import { fillArray } from "../../../utils/arrayUtils";
import { routes } from "../../../utils/constants";

const PropertyGrid = ({ properties } = { properties: [] }) => {
  const icons = {
    bedroom: FaBed, bathroom: FaBath, garage: GiHomeGarage, published: BsClockHistory
  };

  return (
    <CustomGrid
      className="property-grid"
      rowGap='var(--padding-md)'
      colNumber={[1, 1, ...fillArray(2, 2).concat(4)]}
    >
      {properties.map((property, index) => {
        return (
          <Link
            key={index}
            as={RouterLink}
            p='var(--padding-sm)'
            to={`${routes.properties}/dldldldld`}
            className="property-grid-item hover-shadow hover-no-text-decor"
          >
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              alt={property.name}
              src={property.image}
            />
            <Text
              py='var(--padding-sm)'
              className='text--bold'
            >
              {property.title}
            </Text>
            <SectionDivider />
            <CustomGrid
              gridGap='32px'
              color='#888888'
              colNumber={[4]}
              py='var(--padding-sm)'
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
            </CustomGrid>
          </Link>
        );
      })}
    </CustomGrid>
  );
};

export default PropertyGrid;
