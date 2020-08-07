import React from 'react';
import { BsCrop } from 'react-icons/bs';
import { GiHomeGarage } from 'react-icons/gi';
import { Box, Flex, Text, Image, Grid } from '@chakra-ui/core';
import { FaBed, FaBath } from 'react-icons/fa';

import Carousel from '../Carousel';
import { fillArray } from '../../../utils/arrayUtils';
import { formatMoneyValue } from '../../../utils/textUtils';
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
        <Text
          as='h2'
          fontSize='2rem'
          className='text--capitalize text--bold'
        >
          {property.title}
        </Text>
        <Flex
          align='inherit'
          className='prices'
        >
          {
            (() => {
              const { discount, price } = property;
              const res = [];
              const hasDiscount = discount > 0;
              res.push((
                <Text
                  key={res.length + 1}
                  mr={hasDiscount ? 'var(--padding-sm)' : 0}
                  className={hasDiscount ? `text--deleted ` : ''}
                >
                  {formatMoneyValue(price)}
                </Text>
              ));
              if (hasDiscount) res.push(<Text key={res.length + 1} fontSize='2em'>{formatMoneyValue(price * (1 - discount))}</Text>);

              return res;
            })()
          }
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
                w={['100vw', '80vw', '60vw']}
                objectFit='cover'
              />
            </Flex>
          ))
        }
      </Carousel>
      <Flex justify='center'>
        <Grid
          rowGap='var(--padding-sm)'
          columnGap='var(--padding-md)'
          templateColumns={fillArray(2, 'repeat(2, 1fr)').concat('repeat(4, 1fr)')}
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
        </Grid>
      </Flex>
    </Box>
  );
}

export default PropertyImagesAndSummary;