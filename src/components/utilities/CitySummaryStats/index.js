import React from 'react';
import { Grid } from '@chakra-ui/core';

import './CitySummaryStats.css';
import CitySummaryStatItem from './CitySummaryStatItem';


const CitySummaryStats = () => {
  const cityStats = [
    {
      name: 'lagos',
      listings: 25,
      minPrice: 200000,
      maxPrice: 10000000,
      image: require('../../../assets/preview-mapz-lagos.png')
    },
    {
      name: 'abuja',
      listings: 10,
      minPrice: 200000,
      maxPrice: 10000000,
      image: require('../../../assets/preview-mapz-abuja.png')
    },
    {
      name: 'port harcourt',
      listings: 5,
      minPrice: 200000,
      maxPrice: 10000000,
      image: require('../../../assets/preview-mapz-port-harcourt.png')
    },
    {
      name: 'lagos',
      listings: 25,
      minPrice: 200000,
      maxPrice: 10000000,
      image: require('../../../assets/preview-mapz-lagos.png')
    },
    {
      name: 'abuja',
      listings: 10,
      minPrice: 200000,
      maxPrice: 10000000,
      image: require('../../../assets/preview-mapz-abuja.png')
    },
    {
      name: 'port harcourt',
      listings: 5,
      minPrice: 200000,
      maxPrice: 10000000,
      image: require('../../../assets/preview-mapz-port-harcourt.png')
    },
  ];
  const cityCount = cityStats.length;

  return (
    <Grid
      className='city-summary-stats'
      gridTemplateColumns={[
        `repeat(${cityCount}, 100%)`,
        `repeat(${cityCount}, 50%)`,
        `repeat(${cityCount}, 50%)`,
        `repeat(${cityCount}, calc(100% / 3))`
      ]}
    >
      {
        cityStats.map((city, index) => {
          return (
            <CitySummaryStatItem key={index} {...{ city }} />
          )
        })
      }
    </Grid>
  );
}
 
export default CitySummaryStats;