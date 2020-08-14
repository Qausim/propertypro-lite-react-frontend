import React from 'react';
import { Box } from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import CustomGrid from '../../utilities/CustomGrid';
import FeaturedPropertyItem from '../../utilities/FeaturedPropertyItem';
import SectionDivider from '../../utilities/SectionDivider';


const PropertyGridPage = () => {
  return (
    <Box
      mt='5em'
      mx={dividerMx}
      className='property-grid'
    >
      <CustomGrid
        gap='2em'
        colNumber={[1, 2, 3]}
      >
        {
          new Array(9).fill({
            bedroom: 5,
            garage: 2,
            size: 3555,
            term: "day",
            bathroom: 2,
            price: 50000,
            discount: 0.3,
            published: 2020,
            category: "sale",
            title: "15A bolaji olasowe street, Lekki Phase 1, Lagos",
            image: require("../../../assets/pxappliances-architecture-ceiling-chairs-sm.jpg"),
          }).map((property) => <FeaturedPropertyItem {...{ property }} />)
        }
      </CustomGrid>
      <SectionDivider mt='2.5em' mb='2.5em' />
    </Box>
  );
}

export default PropertyGridPage;