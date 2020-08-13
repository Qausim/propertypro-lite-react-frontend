import React from 'react';
import { BsCrop } from 'react-icons/bs';
import { GiHomeGarage } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/core';

import Carousel from '../Carousel';
import CustomGrid from '../CustomGrid';
import PropertyPrices from '../PropertyPrices';
import { fillArray } from '../../../utils/arrayUtils';
import { getDefaultCarouselChevrons, dividerMx } from '../../../utils/uiUtils';


const PropertyImagesAndSummary = ({ property, py }) => {
  const icons = {
    bedroom: FaBed, bathroom: FaBath, garage: GiHomeGarage, size: BsCrop,
  };

  return (
    <Box
      py={py}
      as='section'
      bg='#303441'
      color='white'
      px={dividerMx}
      className='images-and-summary-section'
    >
      <Flex
        wrap='wrap'
        align='center'
        justify='space-between'
        mb={`calc(${py} / 1.5)`}
      >
        <Heading
          as='h2'
          fontSize='2rem'
          className='text--capitalize text--bold'
        >
          {property.title}
        </Heading>
        <Flex
          align='inherit'
          className='prices'
        >
          <PropertyPrices {...{ property }} />
        </Flex>
      </Flex>
      <Carousel
        {...{ defaultNumOfCards: 1, gutter: 48 }}
        {...getDefaultCarouselChevrons('48px', 'transparent')}
      >
        {
          property.images.map((img, index) => (
            <Flex
              key={index}
              justify='center'
              mb={`calc(${py} / 1.5)`}
            >
              <Image
                src={img}
                objectFit='cover'
                w={['100vw', '80vw', '60vw']}
              />
            </Flex>
          ))
        }
      </Carousel>
      <Flex justify='center'>
        <CustomGrid
          rowGap='var(--padding-sm)'
          columnGap='var(--padding-md)'
          colNumber={fillArray(2, 2).concat(4)}
        >
          {
            Object.entries(icons).map(([key, icon]) => (
              <Flex
                key={key}
                align='center'
                justify='center'
                direction='column'
                aria-label={`number of ${key}s`}
              >
                <Box as={icon} color='green.500' size='24px' mb='.5em' />
                <Text className='text--capitalize'>
                  {property[key]} {key === 'size' ? 'sq ft' : `${key}s`}
                </Text>
              </Flex>
            ))
          }
        </CustomGrid>
      </Flex>
    </Box>
  );
}

export default PropertyImagesAndSummary;