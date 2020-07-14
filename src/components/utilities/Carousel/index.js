import ItemsCarousel from 'react-items-carousel';
import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/core';



const Carousel = (props) => {
  const {
    children, sizeMap, defaultNumOfCards, gutter,
    infiniteLoop, rightChevron, leftChevron, chevronWidth
  } = props;
  const carouselProps = {};
  if (gutter) carouselProps.gutter = gutter;
  if (leftChevron || rightChevron) {
    carouselProps.leftChevron = leftChevron;
    carouselProps.rightChevron = rightChevron;
    if (chevronWidth) carouselProps.chevronWidth = chevronWidth;
  }
  if (infiniteLoop) carouselProps.infiniteLoop = infiniteLoop;

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(2);
  const computeNumberOfCards = () => {
    const bodyWidth = document.body.clientWidth;
    let set = false;
    const mapSize = sizeMap.length;
    for (let i = 0; i < mapSize; i++) {
      const { num, size } = sizeMap[i];
      if (bodyWidth <= size) {
        setNumberOfCards(num);
        set = true;
        break;
      }
    }

    if (!set) setNumberOfCards(defaultNumOfCards)
  };
  const handleWindowResize = () => {
    computeNumberOfCards();
  };

  useEffect(() => {
    computeNumberOfCards();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <Box>
      <ItemsCarousel
        {...{
          ...carouselProps,
          children,
          numberOfCards,
          activeItemIndex,
          requestToChangeActive: setActiveItemIndex,
        }}
      />
    </Box>
  );
};

export default Carousel;