import React from 'react';

import './CitySummaryStats.css';
import CitySummaryStatItem from './CitySummaryStatItem';
import Carousel from '../Carousel';
import { getDefaultCarouselChevrons } from '../../../utils/uiUtils';


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
  const sizeMap = [
    { num: 1, size: 700 },
    { num: 2, size: 1100 },
  ];
  return (
    <Carousel
      {...{ sizeMap, defaultNumOfCards: 3, gutter: 35 }}
      { ...getDefaultCarouselChevrons() }
    >
      {
        cityStats.map((city, index) => {
          return (
            <CitySummaryStatItem key={index} {...{ city }} />
          )
        })
      }
    </Carousel>
  );
}
 
export default CitySummaryStats;