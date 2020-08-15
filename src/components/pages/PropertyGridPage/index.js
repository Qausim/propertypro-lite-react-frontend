import React from 'react';
import { MdRefresh } from 'react-icons/md';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import CustomGrid from '../../utilities/CustomGrid';
import { fillArray } from '../../../utils/arrayUtils';
import SectionDivider from '../../utilities/SectionDivider';
import { formatMoneyValue } from '../../../utils/textUtils';
import GridPageSearchForm from '../../utilities/GridPageSearchForm';
import FeaturedPropertyItem from '../../utilities/FeaturedPropertyItem';
import PriceAndAreaFieldsOrder from '../../utilities/PriceAndAreaFieldsOrder';


const PropertyGridPage = () => {
  const inputBackground = '#EDF2F7';
  return (
    <Box
      mt='5em'
      mx={dividerMx}
      className='property-grid'
    >
      <Heading
        as='h1'
        pos='absolute'
        transform='translateY(-1000px)'
      >
        Properties
      </Heading>
      <GridPageSearchForm
        p='1em'
        {...{ inputBackground }}
      />
      <Box
        mt='5em'
        as='section'
      >
        <CustomGrid
          gap='1em'
          colNumber={fillArray(2, 1).concat(2)}
        >
          <Flex direction='column' justify='center' align='start'>
            <Heading as='h2'>Properties</Heading>
            <Text fontSize='.9em'>{formatMoneyValue(30000)} results</Text>
          </Flex>
          <Flex
            ml={fillArray(2, '0px').concat('auto')}
          >
            <Button
              p='0px'
              mr='1em'
              bg='transparent'
              color='gray.600'
              _hover={{ bg: 'transparent' }}
            >
              <Box
                size='24px'
                as={MdRefresh}
                mr='var(--padding-xs)'
              />
              <Text>Reset search</Text>
            </Button>
            <PriceAndAreaFieldsOrder bg={inputBackground} />
          </Flex>
        </CustomGrid>
        <CustomGrid
          mt='2em'
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
            }).map((property, index) => <FeaturedPropertyItem key={index} {...{ property }} />)
          }
        </CustomGrid>
      </Box>
      <SectionDivider mt='2.5em' mb='2.5em' />
    </Box>
  );
}

export default PropertyGridPage;