import React from 'react';

import Carousel from '../Carousel';
import FeaturedPropertyItem from '../FeaturedPropertyItem';
import { getDefaultCarouselChevrons } from '../../../utils/uiUtils';


const FeaturedPropertiesCarousel = () => {
  const properties = new Array(10).fill({
    rooms: 5,
    size: 3555,
    term: 'day',
    price: 50000,
    discount: 0.3,
    published: 2020,
    category: 'sublet',
    title: '15A bolaji olasowe street, Lekki Phase 1, Lagos',
    image: require('../../../assets/pxappliances-architecture-ceiling-chairs-sm.jpg'),
  });
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
        properties.map((property, index) => <FeaturedPropertyItem {...{ property }} key={index} />)
      }
    </Carousel>
  );
}
 
export default FeaturedPropertiesCarousel;